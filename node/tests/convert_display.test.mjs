import { convertDisplay } from '../src/index.js';

import { describe, it, expect } from 'vitest';

describe('convertDisplay', () => {
  it('should display result in French', () => {
    expect(convertDisplay(10, 'km', 'm', 'fr')).toBe('10000 mètre');
    expect(convertDisplay(2, 'kg', 'g', 'fr')).toBe('2000 gramme');
  });
  it('should display result in English', () => {
    expect(convertDisplay(10, 'km', 'm', 'en')).toBe('10000 meter');
    expect(convertDisplay(2, 'kg', 'g', 'en')).toBe('2000 gram');
  });
  it('should display area in French', () => {
    expect(convertDisplay(1, 'km2', 'm2', 'fr')).toBe('1000000 mètre carré');
  });
  it('should display area in English', () => {
    expect(convertDisplay(1, 'km2', 'm2', 'en')).toBe('1000000 square meter');
  });
});
