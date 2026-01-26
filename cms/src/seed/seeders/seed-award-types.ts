import type { Payload } from 'payload';
import { AwardRegistry } from '../utils/award-registry';

/**
 * Seed award types using the AwardRegistry.
 */
export const seedAwardTypes = async (payload: Payload): Promise<AwardRegistry> => {
  const registry = new AwardRegistry(payload);
  await registry.initialize();
  await registry.seedAllAwardTypes();
  return registry;
};
