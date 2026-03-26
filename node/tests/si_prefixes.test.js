import { describe, it, expect } from 'vitest';
import { convert } from '../src/index.js';

describe('SI prefixes', () => {
  it('should convert km to m', () => {
    expect(convert('1km', 'm')).toBeCloseTo(1000);
  });
  it('should convert mm to m', () => {
    expect(convert('1000mm', 'm')).toBeCloseTo(1);
  });
  it('should convert µg to g', () => {
    expect(convert('1000000µg', 'g')).toBeCloseTo(1);
  });
  it('should convert megagram to g', () => {
    expect(convert('2megagram', 'g')).toBeCloseTo(2e6);
  });
  it('should convert nm2 to m2', () => {
    expect(convert('1nm2', 'm2')).toBeCloseTo(1e-18);
  });
  it('should convert kL to m3', () => {
    expect(convert('1kL', 'm3')).toBeCloseTo(1);
  });
});
