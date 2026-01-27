import type { Payload } from 'payload';
import { FESTIVALS, type FestivalAwardData } from '../definitions/festivals';
import { TunaRegistry } from '../utils/tuna-registry';
import { AwardRegistry } from '../utils/award-registry';

/**
 * Seed Festivals and FestivalAwards using the registries for lookups.
 */
export const seedFestivals = async (
  payload: Payload,
  tunaRegistry: TunaRegistry,
  awardRegistry: AwardRegistry
) => {
  console.log('\n  Creating Festivals...');

  for (const festivalData of FESTIVALS) {
    try {
      // Check if festival already exists by name and date
      const existing = await payload.find({
        collection: 'festivals',
        where: {
          and: [
            { name: { equals: festivalData.name } },
            { date: { equals: festivalData.date } },
          ],
        },
        limit: 1,
      });

      if (existing.docs.length > 0) {
        console.log(`    Skipped Festival "${festivalData.name}" - already exists`);
        continue;
      }

      // Get organizing tuna ID if specified
      let organizingTunaId: number | null = null;
      if (festivalData.organizingTuna) {
        const id = tunaRegistry.tryGetTunaId(festivalData.organizingTuna);
        if (id) {
          organizingTunaId = id;
        } else {
          console.log(`      Warning: Organizing tuna "${festivalData.organizingTuna}" not found for ${festivalData.name}`);
        }
      }

      // Create the festival
      const festival = await payload.create({
        collection: 'festivals',
        data: {
          name: festivalData.name,
          date: festivalData.date,
          location: festivalData.location || '',
          organizingTuna: organizingTunaId,
          status: 'published',
        },
      });

      console.log(`    Created Festival: ${festivalData.name}`);

      // Create festival awards
      for (const award of festivalData.awards) {
        let awardTypeId: number | null = null;
        try {
          awardTypeId = awardRegistry.getAwardId(award.slug);
        } catch {
          console.log(`      Warning: Award type "${award.slug}" not found for ${festivalData.name}`);
        }

        await payload.create({
          collection: 'festival-awards',
          data: {
            festival: festival.id,
            awardType: awardTypeId,
            customName: award.customNote || '',
          },
        });
      }

      if (festivalData.awards.length > 0) {
        console.log(`      Created ${festivalData.awards.length} awards`);
      }
    } catch (error) {
      console.error(`    Failed to create Festival "${festivalData.name}":`, error);
    }
  }
};
