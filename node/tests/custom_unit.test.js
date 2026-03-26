import { describe, it, expect } from 'vitest';
import { convert, registerUnit } from '../src/index.js';

describe('Custom units', () => {
  it('should convert using a registered custom unit', () => {
    registerUnit('foo', { factor: 123, category: 'distance' });
    expect(convert('10foo', 'm')).toBeCloseTo(1230);
    expect(convert('246m', 'foo')).toBeCloseTo(2);
  });
  it('should throw for unknown category', () => {
    expect(() => registerUnit('bar', { factor: 1, category: 'unknown' })).toThrow();
  });
  it('should throw for invalid factor', () => {
    expect(() => registerUnit('baz', { factor: 0, category: 'distance' })).toThrow();
    expect(() => registerUnit('baz', { factor: NaN, category: 'distance' })).toThrow();
  });
});
