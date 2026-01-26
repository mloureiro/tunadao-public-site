import type { Payload } from 'payload';
import { MASTER_TUNAS, getMasterTuna, type MasterTuna } from '../definitions/master-tunas';

/**
 * Registry for tuna lookups by shortName.
 * Uses exact matching - no normalization.
 */
export class TunaRegistry {
  private payload: Payload;
  private cache: Map<string, string> = new Map(); // shortName -> id
  private initialized = false;

  constructor(payload: Payload) {
    this.payload = payload;
  }

  /**
   * Initialize the registry by loading existing tunas from the database.
   */
  async initialize(): Promise<void> {
    if (this.initialized) return;

    const existingTunas = await this.payload.find({
      collection: 'tunas',
      limit: 1000,
    });

    for (const tuna of existingTunas.docs) {
      this.cache.set(tuna.shortName, tuna.id);
    }

    console.log(`  [TunaRegistry] Loaded ${existingTunas.docs.length} existing tunas`);
    this.initialized = true;
  }

  /**
   * Get a tuna ID by shortName.
   * @throws Error if tuna not found in database
   */
  getTunaId(shortName: string): string {
    const id = this.cache.get(shortName);
    if (!id) {
      throw new Error(
        `Tuna not found in database: "${shortName}". ` +
          `Make sure it exists in MASTER_TUNAS and seedAllTunas() was called.`
      );
    }
    return id;
  }

  /**
   * Try to get a tuna ID by shortName, returning null if not found.
   */
  tryGetTunaId(shortName: string): string | null {
    return this.cache.get(shortName) ?? null;
  }

  /**
   * Check if a tuna exists in the database.
   */
  hasTuna(shortName: string): boolean {
    return this.cache.has(shortName);
  }

  /**
   * Seed all tunas from the master data.
   * Creates tunas that don't exist yet.
   */
  async seedAllTunas(): Promise<void> {
    console.log('\n  [TunaRegistry] Seeding tunas from master data...');
    let created = 0;
    let skipped = 0;

    for (const tuna of MASTER_TUNAS) {
      if (this.cache.has(tuna.shortName)) {
        skipped++;
        continue;
      }

      try {
        const newTuna = await this.payload.create({
          collection: 'tunas',
          data: {
            shortName: tuna.shortName,
            fullName: tuna.fullName,
            city: tuna.city || '',
            website: tuna.website || '',
          },
        });

        this.cache.set(tuna.shortName, newTuna.id);
        console.log(`    + Created: ${tuna.shortName}`);
        created++;
      } catch (error) {
        const message = error instanceof Error ? error.message : String(error);
        console.error(`    ! Failed to create "${tuna.shortName}": ${message}`);
      }
    }

    console.log(`  [TunaRegistry] Done: ${created} created, ${skipped} skipped (already exist)`);
  }

  /**
   * Get or create a tuna by shortName.
   * If the tuna doesn't exist in DB but exists in master data, creates it.
   * @throws Error if shortName not in master data
   */
  async getOrCreateTunaId(shortName: string): Promise<string> {
    // Check cache first
    const cachedId = this.cache.get(shortName);
    if (cachedId) {
      return cachedId;
    }

    // Validate against master data (throws if not found)
    const masterTuna = getMasterTuna(shortName);

    // Create the tuna
    const newTuna = await this.payload.create({
      collection: 'tunas',
      data: {
        shortName: masterTuna.shortName,
        fullName: masterTuna.fullName,
        city: masterTuna.city || '',
        website: masterTuna.website || '',
      },
    });

    this.cache.set(shortName, newTuna.id);
    console.log(`    + Created on-demand: ${shortName}`);
    return newTuna.id;
  }

  /**
   * Get the number of tunas in the cache.
   */
  get size(): number {
    return this.cache.size;
  }
}
