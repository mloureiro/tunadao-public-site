import type { Payload } from 'payload';
import { execSync } from 'child_process';
import { MASTER_TUNAS } from '../definitions/master-tunas';

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

export const seedTunaLogos = async (payload: Payload) => {
  console.log('  Fetching logos from Cloudinary...');

  // Fetch logos from Cloudinary using CLI
  let cloudinaryData: CloudinarySearchResult;
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
    cloudinaryData = JSON.parse(jsonMatch[0]);
  } catch (error) {
    console.error('  Failed to fetch from Cloudinary:', error);
    return;
  }

  console.log(`  Found ${cloudinaryData.total_count} logos in Cloudinary`);

  // Build a map of public_id to cloudinary resource
  const cloudinaryMap = new Map<string, CloudinaryResource>();
  for (const resource of cloudinaryData.resources) {
    cloudinaryMap.set(resource.public_id, resource);
  }

  // Process tunas that have logoPublicId
  let linked = 0;
  let skipped = 0;

  for (const tuna of MASTER_TUNAS) {
    if (!tuna.logoPublicId) continue;

    const resource = cloudinaryMap.get(tuna.logoPublicId);
    if (!resource) {
      console.log(`  Warning: Logo not found in Cloudinary for ${tuna.shortName}: ${tuna.logoPublicId}`);
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

      let mediaId: string;

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
        console.log(`  Created media: ${tuna.shortName}`);
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
          console.log(`  Linked logo to ${tuna.shortName}`);
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
