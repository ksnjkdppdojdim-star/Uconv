import { describe, it, expect } from 'vitest';
import { getUnitDisplayName } from '../src/units.js';

describe('i18n unit display', () => {
  it('should display French names for distance', () => {
    expect(getUnitDisplayName('km', 'fr')).toBe('kilomètre');
    expect(getUnitDisplayName('m', 'fr')).toBe('mètre');
    expect(getUnitDisplayName('ft', 'fr')).toBe('pied');
  });
  it('should display English names for distance', () => {
    expect(getUnitDisplayName('km', 'en')).toBe('kilometer');
    expect(getUnitDisplayName('m', 'en')).toBe('meter');
    expect(getUnitDisplayName('ft', 'en')).toBe('foot');
  });
  it('should display French names for area', () => {
    expect(getUnitDisplayName('m2', 'fr')).toBe('mètre carré');
    expect(getUnitDisplayName('acre', 'fr')).toBe('acre');
  });
  it('should display English names for area', () => {
    expect(getUnitDisplayName('m2', 'en')).toBe('square meter');
    expect(getUnitDisplayName('acre', 'en')).toBe('acre');
  });
  it('should fallback to code if unknown', () => {
    expect(getUnitDisplayName('foobar', 'fr')).toBe('foobar');
    expect(getUnitDisplayName('foobar', 'en')).toBe('foobar');
  });
});
