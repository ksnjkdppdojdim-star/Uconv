import { convertDisplay } from '../src/index.js';
import { describe, it, expect } from 'vitest';

describe('convertDisplay localized formatting', () => {
  it('should format number in French', () => {
    expect(convertDisplay(12345.67, 'm', 'km', 'fr')).toBe('12,34567 kilomètre');
    expect(convertDisplay(1000, 'g', 'kg', 'fr')).toBe('1 kilogramme');
  });
  it('should format number in English', () => {
    expect(convertDisplay(12345.67, 'm', 'km', 'en')).toBe('12.34567 kilometer');
    expect(convertDisplay(1000, 'g', 'kg', 'en')).toBe('1 kilogram');
  });
  it('should format with fr_FR locale', () => {
    expect(convertDisplay(1234.56, 'm', 'km', 'fr_FR')).toBe('1,23456 kilomètre');
  });
  it('should format with en_US locale', () => {
    expect(convertDisplay(1234.56, 'm', 'km', 'en_US')).toBe('1.23456 kilometer');
  });
});
