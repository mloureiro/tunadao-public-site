import type { Payload } from 'payload';
import { FESTIVALS } from '../definitions/festivals';

// Cloudinary cloud name for constructing URLs
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

/**
 * Create a synthetic CloudinaryResource from a full public ID.
 * This is used when the Cloudinary CLI is not available (e.g., in CI).
 */
function createSyntheticResource(publicId: string, _festivalName: string): CloudinaryResource {
  const secureUrl = `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/${publicId}`;
  const url = secureUrl.replace('https://', 'http://');
  // Extract filename from public ID (last part after /)
  const filename = publicId.split('/').pop() || publicId;

  return {
    asset_id: `synthetic-${filename}`,
    public_id: publicId,
    filename,
    format: 'jpg',
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

export const seedFestivalPosters = async (payload: Payload) => {
  console.log('  Processing festival posters...');

  // Get festivals with poster definitions
  const festivalsWithPosters = FESTIVALS.filter((f) => f.posterPublicId);
  console.log(`  Found ${festivalsWithPosters.length} festivals with poster definitions`);

  let linked = 0;
  let created = 0;

  for (const festivalDef of festivalsWithPosters) {
    const publicId = festivalDef.posterPublicId!;

    try {
      // Check if media already exists by publicId
      const existingMedia = await payload.find({
        collection: 'media',
        where: {
          publicId: { equals: publicId },
        },
        limit: 1,
      });

      let mediaId: string | number;

      if (existingMedia.docs.length > 0) {
        mediaId = existingMedia.docs[0].id;
      } else {
        // Create synthetic resource and media entry
        const resource = createSyntheticResource(publicId, festivalDef.name);

        const media = await payload.create({
          collection: 'media',
          data: {
            filename: resource.filename,
            alt: `Cartaz do ${festivalDef.name}`,
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
        created++;
      }

      // Find the festival by name (exact match)
      const festival = await payload.find({
        collection: 'festivals',
        where: {
          name: { equals: festivalDef.name },
        },
        limit: 1,
      });

      if (festival.docs.length > 0) {
        const doc = festival.docs[0];
        if (!doc.poster) {
          await payload.update({
            collection: 'festivals',
            id: doc.id,
            data: {
              poster: mediaId,
            },
          });
          linked++;
        }
      } else {
        console.log(`  Warning: No Festival found for "${festivalDef.name}"`);
      }
    } catch (error) {
      console.error(`  Failed to process poster for "${festivalDef.name}":`, error);
    }
  }

  console.log(`  Done: Created ${created} media entries, linked ${linked} posters to festivals`);
};
