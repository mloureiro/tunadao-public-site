import payload from 'payload';
import { seedAwardTypes } from './award-types';
import { seedCitadaoEditions } from './citadao-editions';
import { seedPalmaresYears } from './palmares-years';
import { seedAlbums } from './albums';
import { seedSiteSettings } from './site-settings';
import dotenv from 'dotenv';

dotenv.config();

const seed = async () => {
  console.log('Starting seed process...');

  // Initialize Payload
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  await payload.init({ local: true } as any);

  try {
    // Seed in order (award types first as they're referenced by others)
    console.log('\n1. Seeding award types...');
    await seedAwardTypes(payload);

    console.log('\n2. Seeding Citadão editions...');
    await seedCitadaoEditions(payload);

    console.log('\n3. Seeding Palmarés years...');
    await seedPalmaresYears(payload);

    console.log('\n4. Seeding albums...');
    await seedAlbums(payload);

    console.log('\n5. Seeding site settings...');
    await seedSiteSettings(payload);

    console.log('\n✅ Seed completed successfully!');
  } catch (error) {
    console.error('❌ Seed failed:', error);
    process.exit(1);
  }

  process.exit(0);
};

seed();
