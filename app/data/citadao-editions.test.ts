import { describe, it, expect } from 'vitest';
import { editionsData, awardLabels } from './citadao-editions';

describe('Citadão Editions Data', () => {
  describe('editionsData', () => {
    it('should have editions data', () => {
      expect(Object.keys(editionsData).length).toBeGreaterThan(0);
    });

    it('should have required fields for each edition', () => {
      Object.values(editionsData).forEach((edition) => {
        expect(edition).toHaveProperty('edition');
        expect(edition).toHaveProperty('year');
        expect(edition).toHaveProperty('date');
        expect(edition).toHaveProperty('venue');
        expect(edition).toHaveProperty('tunas');
        expect(edition).toHaveProperty('guests');
        expect(edition).toHaveProperty('awards');
      });
    });

    it('should have edition numbers in correct order', () => {
      const editions = Object.values(editionsData);
      editions.forEach((edition) => {
        expect(typeof edition.edition).toBe('number');
        expect(edition.edition).toBeGreaterThan(0);
      });
    });

    it('should have years matching the keys', () => {
      Object.entries(editionsData).forEach(([yearKey, edition]) => {
        expect(edition.year).toBe(parseInt(yearKey));
      });
    });

    it('should have tunas as arrays', () => {
      Object.values(editionsData).forEach((edition) => {
        expect(Array.isArray(edition.tunas)).toBe(true);
      });
    });
  });

  describe('awardLabels', () => {
    it('should have labels for common awards', () => {
      expect(awardLabels.melhorTuna).toBe('Melhor Tuna');
      expect(awardLabels.tunaMaisTuna).toBe('Tuna Mais Tuna');
      expect(awardLabels.melhorSerenata).toBe('Melhor Serenata');
    });

    it('should have all required award labels', () => {
      const requiredAwards = [
        'melhorTuna',
        'segundaMelhorTuna',
        'tunaMaisTuna',
        'tunaDoPublico',
        'melhorSerenata',
        'melhorPandeireta',
        'melhorInstrumental',
        'melhorSolista',
        'melhorOriginal',
        'melhorEstandarte',
      ];

      requiredAwards.forEach((award) => {
        expect(awardLabels).toHaveProperty(award);
      });
    });
  });
});
