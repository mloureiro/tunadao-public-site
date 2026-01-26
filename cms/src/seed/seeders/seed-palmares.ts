import type { Payload } from 'payload';
import { PALMARES_YEARS, type PalmaresAwardData } from '../definitions/palmares-years';
import { TunaRegistry } from '../utils/tuna-registry';
import { AwardRegistry } from '../utils/award-registry';

/**
 * Seed Palmares years using the registries for lookups.
 */
export const seedPalmaresYears = async (
  payload: Payload,
  tunaRegistry: TunaRegistry,
  awardRegistry: AwardRegistry
) => {
  console.log('\n  Creating Palmares years...');

  for (const yearData of PALMARES_YEARS) {
    try {
      // Check if already exists
      const existing = await payload.find({
        collection: 'palmares-years',
        where: { year: { equals: yearData.year } },
        limit: 1,
      });

      if (existing.docs.length > 0) {
        console.log(`    Skipped Palmares ${yearData.year} - already exists`);
        continue;
      }

      // Prepare festivals array with organizing tuna and award type references
      const festivals = await Promise.all(
        yearData.festivals.map(async (festival) => {
          // Get organizing tuna ID if specified and exists
          let organizingTunaId: string | null = null;
          if (festival.organizingTuna) {
            try {
              organizingTunaId = tunaRegistry.getTunaId(festival.organizingTuna);
            } catch {
              // Tuna not in master data - try to create on-demand or skip
              const id = tunaRegistry.tryGetTunaId(festival.organizingTuna);
              if (id) {
                organizingTunaId = id;
              } else {
                console.log(`      Warning: Organizing tuna "${festival.organizingTuna}" not found for ${festival.name}`);
              }
            }
          }

          // Map awards with award type references
          const awards = festival.awards.map((award: PalmaresAwardData) => {
            let awardTypeId: string | null = null;
            try {
              awardTypeId = awardRegistry.getAwardId(award.slug);
            } catch {
              console.log(`      Warning: Award type "${award.slug}" not found for ${festival.name}`);
            }

            return {
              awardType: awardTypeId,
              customName: award.customNote || '',
            };
          });

          return {
            name: festival.name,
            location: festival.location || '',
            organizingTuna: organizingTunaId,
            awards,
          };
        })
      );

      await payload.create({
        collection: 'palmares-years',
        data: {
          year: yearData.year,
          festivals,
          status: 'published',
        },
      });
      console.log(`    Created Palmares: ${yearData.year}`);
    } catch (error) {
      console.error(`    Failed to create Palmares ${yearData.year}:`, error);
    }
  }
};
