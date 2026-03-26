import { describe, it, expect } from 'vitest';
import { convert } from '../src/index.js';

describe('Area conversions', () => {
  it('should convert m2 to ft2', () => {
    expect(convert('10m2', 'ft2')).toBeCloseTo(107.639, 2);
  });
  it('should convert acre to m2', () => {
    expect(convert('1acre', 'm2')).toBeCloseTo(4046.86, 2);
  });
  it('should convert hectare to m2', () => {
    expect(convert('1hectare', 'm2')).toBeCloseTo(10000, 2);
  });
});

describe('Volume conversions', () => {
  it('should convert l to m3', () => {
    expect(convert('1000l', 'm3')).toBeCloseTo(1, 4);
  });
  it('should convert gal to l', () => {
    expect(convert('1gal', 'l')).toBeCloseTo(3.78541, 4);
  });
  it('should convert ft3 to l', () => {
    expect(convert('1ft3', 'l')).toBeCloseTo(28.3168, 3);
  });
});

describe('Energy conversions', () => {
  it('should convert kWh to J', () => {
    expect(convert('1kwh', 'j')).toBeCloseTo(3600000, 0);
  });
  it('should convert cal to J', () => {
    expect(convert('100cal', 'j')).toBeCloseTo(418.4, 1);
  });
  it('should convert btu to kJ', () => {
    expect(convert('1btu', 'kj')).toBeCloseTo(1.05506, 2);
  });
});

describe('Pressure conversions', () => {
  it('should convert bar to Pa', () => {
    expect(convert('1bar', 'pa')).toBeCloseTo(100000, 0);
  });
  it('should convert atm to kPa', () => {
    expect(convert('1atm', 'kpa')).toBeCloseTo(101.325, 3);
  });
  it('should convert psi to Pa', () => {
    expect(convert('1psi', 'pa')).toBeCloseTo(6894.76, 2);
  });
});

describe('Power conversions', () => {
  it('should convert kW to W', () => {
    expect(convert('1kw', 'w')).toBeCloseTo(1000, 0);
  });
  it('should convert hp to W', () => {
    expect(convert('1hp', 'w')).toBeCloseTo(745.7, 1);
  });
  it('should convert MW to kW', () => {
    expect(convert('1mw', 'kw')).toBeCloseTo(1000, 0);
  });
});
