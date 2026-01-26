import { getPayload } from 'payload';
import config from '../payload.config';
import {
  seedAdminUser,
  seedAwardTypes,
  seedTunas,
  seedCitadaoEditions,
  seedCitadaoPosters,
  seedPalmaresYears,
  seedSiteSettings,
} from './seeders';

const seed = async () => {
  console.log('Starting seed process...');
  console.log(`Database: ${process.env.TURSO_DATABASE_URL?.substring(0, 50)}...`);

  // Initialize Payload v3
  const payload = await getPayload({ config });

  try {
    // Seed in order (dependencies first)
    console.log('\n1. Seeding admin user...');
    await seedAdminUser(payload);

    console.log('\n2. Seeding award types...');
    const awardRegistry = await seedAwardTypes(payload);

    console.log('\n3. Seeding tunas...');
    const tunaRegistry = await seedTunas(payload);

    console.log('\n4. Seeding Citadao editions (includes venues, participants, awards)...');
    await seedCitadaoEditions(payload, tunaRegistry, awardRegistry);

    console.log('\n5. Seeding Citadao posters (from Cloudinary)...');
    await seedCitadaoPosters(payload);

    console.log('\n6. Seeding Palmares years...');
    await seedPalmaresYears(payload, tunaRegistry, awardRegistry);

    console.log('\n7. Seeding site settings...');
    await seedSiteSettings(payload);

    console.log('\n Seed completed successfully!');
  } catch (error) {
    console.error(' Seed failed:', error);
    process.exit(1);
  }

  process.exit(0);
};

seed();
