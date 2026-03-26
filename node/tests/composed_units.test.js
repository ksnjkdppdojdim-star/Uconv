import { describe, it, expect } from 'vitest';
import { convert } from '../src/index.js';

describe('Composed unit conversions', () => {
  it('should convert km2 to m2', () => {
    expect(convert('2km2', 'm2')).toBeCloseTo(2e6);
  });
  it('should convert cm3 to m3', () => {
    expect(convert('1000000cm3', 'm3')).toBeCloseTo(1);
  });
  it('should convert l/min to m3/h', () => {
    // 60 l/min = 0.06 m3/min = 3.6 m3/h
    expect(convert('60l/min', 'm3/h')).toBeCloseTo(3.6);
  });
  it('should convert m/s to km/h', () => {
    expect(convert('10m/s', 'km/h')).toBeCloseTo(36);
  });
  it('should convert m3/s to l/min', () => {
    // 0.001 m3/s = 1 l/s = 60 l/min
    expect(convert('0.001m3/s', 'l/min')).toBeCloseTo(60);
  });
  it('should convert kg*m2/s2 to g*cm2/s2', () => {
    // 1 kg*m2/s2 = 1000g * 10000cm2 / s2 = 1e7 g*cm2/s2
    expect(convert('1kg*m2/s2', 'g*cm2/s2')).toBeCloseTo(1e7);
  });

  it('should convert N*m to J and back', () => {
    // 1 N*m = 1 J
    expect(convert('5n*m', 'j')).toBeCloseTo(5);
    expect(convert('12j', 'n*m')).toBeCloseTo(12);
  });

  it('should convert J/s to W and back', () => {
    // 1 J/s = 1 W
    expect(convert('42j/s', 'w')).toBeCloseTo(42);
    expect(convert('10w', 'j/s')).toBeCloseTo(10);
  });

  it('should convert W*s to J and back', () => {
    // 1 W*s = 1 J
    expect(convert('7w*s', 'j')).toBeCloseTo(7);
    expect(convert('15j', 'w*s')).toBeCloseTo(15);
  });

  it('should convert Pa*m3 to J and back', () => {
    // 1 Pa*m3 = 1 J
    expect(convert('3pa*m3', 'j')).toBeCloseTo(3);
    expect(convert('8j', 'pa*m3')).toBeCloseTo(8);
  });
});
