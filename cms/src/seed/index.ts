import { getPayload } from 'payload';
import config from '../payload.config';
import { seedAdminUser } from './admin-user';
import { seedAwardTypes } from './award-types';
import { seedCitadaoEditions } from './citadao-editions';
import { seedCitadaoPosters } from './citadao-posters';
import { seedPalmaresYears } from './palmares-years';
import { seedSiteSettings } from './site-settings';

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
    await seedAwardTypes(payload);

    console.log('\n3. Seeding Citadão editions (includes venues, tunas, participants, awards)...');
    await seedCitadaoEditions(payload);

    console.log('\n4. Seeding Citadão posters (from Cloudinary)...');
    await seedCitadaoPosters(payload);

    console.log('\n5. Seeding Palmarés years...');
    await seedPalmaresYears(payload);

    console.log('\n6. Seeding site settings...');
    await seedSiteSettings(payload);

    console.log('\n✅ Seed completed successfully!');
  } catch (error) {
    console.error('❌ Seed failed:', error);
    process.exit(1);
  }

  process.exit(0);
};

seed();
