import type { Payload } from 'payload';
import { execSync } from 'child_process';
import { MASTER_TUNAS } from '../definitions/master-tunas';

// Cloudinary cloud name for constructing URLs when CLI is not available
const CLOUDINARY_CLOUD_NAME = 'tunadao-site';

interface CloudinaryResource {
  asset_id: string;
  public_id: string;
  filename: string;
  format: string;
  version: number;
  resource_type: string;
  type: string;
  created_at: string;
  bytes: number;
  width: number;
  height: number;
  url: string;
  secure_url: string;
}

interface CloudinarySearchResult {
  total_count: number;
  resources: CloudinaryResource[];
}

/**
 * Create a synthetic CloudinaryResource from just the public ID.
 * This is used when the Cloudinary CLI is not available (e.g., in CI).
 */
function createSyntheticResource(publicId: string): CloudinaryResource {
  const secureUrl = `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/${publicId}`;
  const url = secureUrl.replace('https://', 'http://');

  return {
    asset_id: `synthetic-${publicId.replace(/\//g, '-')}`,
    public_id: publicId,
    filename: publicId.split('/').pop() || publicId,
    format: 'png', // Default format, Cloudinary auto-detects anyway
    version: 1,
    resource_type: 'image',
    type: 'upload',
    created_at: new Date().toISOString(),
    bytes: 0,
    width: 0,
    height: 0,
    url,
    secure_url: secureUrl,
  };
}

export const seedTunaLogos = async (payload: Payload) => {
  console.log('  Fetching logos from Cloudinary...');

  // Fetch logos from Cloudinary using CLI (if available)
  const cloudinaryMap = new Map<string, CloudinaryResource>();
  let usingSyntheticData = false;

  try {
    const result = execSync('source ~/.zshrc && cld search "folder:tunadao/tunas" -n 100', {
      encoding: 'utf-8',
      shell: '/bin/zsh',
    });
    // Extract JSON object from output (handles terminal control characters)
    const jsonMatch = result.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      throw new Error('No JSON found in Cloudinary output');
    }
    const cloudinaryData: CloudinarySearchResult = JSON.parse(jsonMatch[0]);
    console.log(`  Found ${cloudinaryData.total_count} logos in Cloudinary`);

    // Build a map of public_id to cloudinary resource
    for (const resource of cloudinaryData.resources) {
      cloudinaryMap.set(resource.public_id, resource);
    }
  } catch {
    console.warn('  Cloudinary CLI not available, using synthetic URLs from public IDs');
    usingSyntheticData = true;

    // Create synthetic resources from the public IDs in master data
    for (const tuna of MASTER_TUNAS) {
      if (tuna.logoPublicId) {
        cloudinaryMap.set(tuna.logoPublicId, createSyntheticResource(tuna.logoPublicId));
      }
    }
    console.log(`  Created ${cloudinaryMap.size} synthetic media entries`);
  }

  // Process tunas that have logoPublicId
  let linked = 0;
  let skipped = 0;

  for (const tuna of MASTER_TUNAS) {
    if (!tuna.logoPublicId) continue;

    const resource = cloudinaryMap.get(tuna.logoPublicId);
    if (!resource) {
      console.log(`  Warning: Logo not found for ${tuna.shortName}: ${tuna.logoPublicId}`);
      continue;
    }

    try {
      // Check if media already exists by publicId
      const existingMedia = await payload.find({
        collection: 'media',
        where: {
          publicId: { equals: resource.public_id },
        },
        limit: 1,
      });

      let mediaId: string | number;

      if (existingMedia.docs.length > 0) {
        mediaId = existingMedia.docs[0].id;
      } else {
        // Create media entry
        const media = await payload.create({
          collection: 'media',
          data: {
            filename: `logo-${tuna.shortName.toLowerCase().replace(/[^a-z0-9]/g, '-')}`,
            alt: `Logo de ${tuna.fullName}`,
            cloudinary: {
              asset_id: resource.asset_id,
              public_id: resource.public_id,
              format: resource.format,
              version: resource.version,
              resource_type: resource.resource_type,
              type: resource.type,
              created_at: resource.created_at,
              bytes: resource.bytes,
              width: resource.width,
              height: resource.height,
              url: resource.url,
              secure_url: resource.secure_url,
            },
          },
        });
        mediaId = media.id;
        if (!usingSyntheticData) {
          console.log(`  Created media: ${tuna.shortName}`);
        }
      }

      // Find and update the corresponding Tuna
      const tunaDoc = await payload.find({
        collection: 'tunas',
        where: {
          shortName: { equals: tuna.shortName },
        },
        limit: 1,
      });

      if (tunaDoc.docs.length > 0) {
        const doc = tunaDoc.docs[0];
        if (!doc.logo) {
          await payload.update({
            collection: 'tunas',
            id: doc.id,
            data: {
              logo: mediaId,
            },
          });
          if (!usingSyntheticData) {
            console.log(`  Linked logo to ${tuna.shortName}`);
          }
          linked++;
        } else {
          skipped++;
        }
      } else {
        console.log(`  Warning: Tuna not found in DB: ${tuna.shortName}`);
      }
    } catch (error) {
      console.error(`  Failed to process logo for ${tuna.shortName}:`, error);
    }
  }

  console.log(`  Done: ${linked} logos linked, ${skipped} already had logos`);
};
