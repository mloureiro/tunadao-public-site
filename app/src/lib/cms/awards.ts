/**
 * Award utilities - Shared sorting and priority logic for awards
 */

import type { FrontendPalmaresAward, FrontendTunaWithLogo, FrontendCitadaoEdition } from './types';

/**
 * Award priority for sorting (lower = more important)
 */
export const AWARD_PRIORITY: Record<string, number> = {
  'melhor-tuna': 1,
  'tuna-mais-tuna': 2,
  'tuna-do-publico': 3,
  'segunda-melhor-tuna': 4,
  'terceira-melhor-tuna': 5,
};

/**
 * Get the priority of an award (lower is better)
 */
export function getAwardPriority(awardKey: string): number {
  return AWARD_PRIORITY[awardKey] ?? 100;
}

/**
 * Check if an award is a top prize (melhor-tuna, tuna-mais-tuna, tuna-do-publico)
 */
export function isTopPrize(awardSlug: string): boolean {
  return ['melhor-tuna', 'tuna-mais-tuna', 'tuna-do-publico'].includes(awardSlug);
}

/**
 * Sort awards by priority (palmares page)
 */
export function sortAwards(awards: FrontendPalmaresAward[]): FrontendPalmaresAward[] {
  return [...awards].sort((a, b) => {
    const aPriority = AWARD_PRIORITY[a.slug] ?? 100;
    const bPriority = AWARD_PRIORITY[b.slug] ?? 100;
    if (aPriority !== bPriority) {
      return aPriority - bPriority;
    }
    // Same priority: sort alphabetically by name
    return a.name.localeCompare(b.name, 'pt');
  });
}

/**
 * Tuna with their awards (for citadao pages)
 */
export interface TunaWithAwards {
  tuna: FrontendTunaWithLogo;
  awards: string[];
}

/**
 * Group awards by tuna (citadao index page)
 */
export function groupAwardsByTuna(edition: FrontendCitadaoEdition): TunaWithAwards[] {
  if (!edition.awards) return [];

  // Group awards by tuna shortName
  const tunaAwardsMap = new Map<string, string[]>();
  for (const [awardKey, tunaShortName] of Object.entries(edition.awards)) {
    const existing = tunaAwardsMap.get(tunaShortName) || [];
    existing.push(awardKey);
    tunaAwardsMap.set(tunaShortName, existing);
  }

  // Build list with tuna info
  const result: TunaWithAwards[] = [];
  for (const [shortName, awards] of tunaAwardsMap) {
    const tuna = edition.tunas.find((t) => t.shortName === shortName);
    if (tuna) {
      result.push({ tuna, awards });
    } else {
      // Tuna not in participants (might be guest or external)
      result.push({
        tuna: { shortName, fullName: shortName },
        awards,
      });
    }
  }

  // Sort by best award priority, then alphabetically for same priority
  result.sort((a, b) => {
    const aPriority = Math.min(...a.awards.map((k) => AWARD_PRIORITY[k] ?? 100));
    const bPriority = Math.min(...b.awards.map((k) => AWARD_PRIORITY[k] ?? 100));
    if (aPriority !== bPriority) {
      return aPriority - bPriority;
    }
    // Same priority: sort alphabetically by tuna shortName
    return a.tuna.shortName.localeCompare(b.tuna.shortName, 'pt');
  });

  return result;
}
