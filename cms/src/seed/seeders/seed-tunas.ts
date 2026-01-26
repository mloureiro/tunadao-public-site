import type { Payload } from 'payload';
import { TunaRegistry } from '../utils/tuna-registry';

/**
 * Seed tunas using the TunaRegistry.
 */
export const seedTunas = async (payload: Payload): Promise<TunaRegistry> => {
  const registry = new TunaRegistry(payload);
  await registry.initialize();
  await registry.seedAllTunas();
  return registry;
};
