import type { Payload } from 'payload';
import { execSync } from 'child_process';

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

// Extract year and edition from filename like "citadao-2024-18-poster_s7e7zj"
function parseFilename(filename: string): { year: number; edition: number } | null {
  const match = filename.match(/citadao-(\d{4})-(\d{2})-poster/);
  if (!match) return null;
  return {
    year: parseInt(match[1], 10),
    edition: parseInt(match[2], 10),
  };
}

export const seedCitadaoPosters = async (payload: Payload) => {
  console.log('  📷 Fetching posters from Cloudinary...');

  // Fetch posters from Cloudinary using CLI
  let cloudinaryData: CloudinarySearchResult;
  try {
    const result = execSync('source ~/.zshrc && cld search "folder:tunadao/citadao" -n 50', {
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
    console.error('  ❌ Failed to fetch from Cloudinary:', error);
    return;
  }

  console.log(`  📋 Found ${cloudinaryData.total_count} posters in Cloudinary`);

  // Create Media entries and map to editions
  for (const resource of cloudinaryData.resources) {
    const parsed = parseFilename(resource.filename);
    if (!parsed) {
      console.log(`  ⚠️  Could not parse filename: ${resource.filename}`);
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
        console.log(`  ⏭️  Media for ${parsed.edition}º (${parsed.year}) already exists`);
      } else {
        // Create media entry
        const media = await payload.create({
          collection: 'media',
          data: {
            filename: `citadao-${parsed.year}-${String(parsed.edition).padStart(2, '0')}-poster`,
            alt: `Cartaz do ${parsed.edition}º Citadão (${parsed.year})`,
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
        console.log(`  ✅ Created media: ${parsed.edition}º Citadão (${parsed.year})`);
      }

      // Find and update the corresponding CitadaoEdition
      const edition = await payload.find({
        collection: 'citadao-editions',
        where: {
          editionNumber: { equals: parsed.edition },
        },
        limit: 1,
      });

      if (edition.docs.length > 0) {
        const doc = edition.docs[0];
        if (!doc.poster) {
          await payload.update({
            collection: 'citadao-editions',
            id: doc.id,
            data: {
              poster: mediaId,
            },
          });
          console.log(`  🔗 Linked poster to ${parsed.edition}º Citadão (${parsed.year})`);
        }
      } else {
        console.log(`  ⚠️  No CitadaoEdition found for ${parsed.edition}º (${parsed.year})`);
      }
    } catch (error) {
      console.error(`  ❌ Failed to process ${resource.filename}:`, error);
    }
  }
};
