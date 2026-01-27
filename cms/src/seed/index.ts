// Load environment FIRST before any other imports
import 'dotenv/config';
import { config as dotenvConfig } from 'dotenv';
dotenvConfig({ path: '.env.local', override: true });

// Now dynamically import everything else AFTER env is loaded
const main = async () => {
  const { getPayload } = await import('payload');
  const { default: config } = await import('../payload.config');
  const {
    seedAdminUser,
    seedAwardTypes,
    seedTunas,
    seedTunaLogos,
    seedCitadaoEditions,
    seedCitadaoPosters,
    seedFestivals,
    seedSiteSettings,
  } = await import('./seeders');

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

    console.log('\n4. Seeding tuna logos (from Cloudinary)...');
    await seedTunaLogos(payload);

    console.log('\n5. Seeding Citadao editions (includes venues, participants, awards)...');
    await seedCitadaoEditions(payload, tunaRegistry, awardRegistry);

    console.log('\n6. Seeding Citadao posters (from Cloudinary)...');
    await seedCitadaoPosters(payload);

    console.log('\n7. Seeding Festivals...');
    await seedFestivals(payload, tunaRegistry, awardRegistry);

    console.log('\n8. Seeding site settings...');
    await seedSiteSettings(payload);

    console.log('\n Seed completed successfully!');
  } catch (error) {
    console.error(' Seed failed:', error);
    process.exit(1);
  }

  process.exit(0);
};

main();
