import type { Payload } from 'payload';
import { AWARD_TYPES } from '../definitions/award-types';

/**
 * Registry for award type lookups by slug.
 * Uses exact matching - no normalization.
 */
export class AwardRegistry {
  private payload: Payload;
  private cache: Map<string, string> = new Map(); // slug -> id
  private initialized = false;

  constructor(payload: Payload) {
    this.payload = payload;
  }

  /**
   * Initialize the registry by loading existing award types from the database.
   */
  async initialize(): Promise<void> {
    if (this.initialized) return;

    const existingAwards = await this.payload.find({
      collection: 'award-types',
      limit: 100,
    });

    for (const award of existingAwards.docs) {
      this.cache.set(award.slug, award.id);
    }

    console.log(`  [AwardRegistry] Loaded ${existingAwards.docs.length} existing award types`);
    this.initialized = true;
  }

  /**
   * Get an award type ID by slug.
   * @throws Error if award type not found in database
   */
  getAwardId(slug: string): string {
    const id = this.cache.get(slug);
    if (!id) {
      throw new Error(
        `Award type not found in database: "${slug}". ` +
          `Make sure it exists in AWARD_TYPES and seedAllAwardTypes() was called.`
      );
    }
    return id;
  }

  /**
   * Try to get an award type ID by slug, returning null if not found.
   */
  tryGetAwardId(slug: string): string | null {
    return this.cache.get(slug) ?? null;
  }

  /**
   * Check if an award type exists in the database.
   */
  hasAward(slug: string): boolean {
    return this.cache.has(slug);
  }

  /**
   * Seed all award types from the data.
   * Creates award types that don't exist yet.
   */
  async seedAllAwardTypes(): Promise<void> {
    console.log('\n  [AwardRegistry] Seeding award types...');
    let created = 0;
    let skipped = 0;

    for (const awardType of AWARD_TYPES) {
      if (this.cache.has(awardType.slug)) {
        skipped++;
        continue;
      }

      try {
        const newAward = await this.payload.create({
          collection: 'award-types',
          data: awardType,
        });

        this.cache.set(awardType.slug, newAward.id);
        console.log(`    + Created: ${awardType.name} (${awardType.slug})`);
        created++;
      } catch (error) {
        const message = error instanceof Error ? error.message : String(error);
        console.error(`    ! Failed to create "${awardType.slug}": ${message}`);
      }
    }

    console.log(`  [AwardRegistry] Done: ${created} created, ${skipped} skipped (already exist)`);
  }

  /**
   * Get the number of award types in the cache.
   */
  get size(): number {
    return this.cache.size;
  }
}
