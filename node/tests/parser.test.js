import { describe, it, expect } from 'vitest';
import { parseInput } from '../src/parser.js';

describe('Input Parser', () => {
  it('should parse basic input correctly', () => {
    expect(parseInput('10km')).toEqual({ value: 10, unit: 'km' });
    expect(parseInput('5.5lbs')).toEqual({ value: 5.5, unit: 'lbs' });
  });
  
  it('should handle spaces between value and unit', () => {
    expect(parseInput('10 km')).toEqual({ value: 10, unit: 'km' });
    expect(parseInput('5.5 lbs')).toEqual({ value: 5.5, unit: 'lbs' });
  });
  
  it('should handle extra whitespace', () => {
    expect(parseInput(' 10km ')).toEqual({ value: 10, unit: 'km' });
    expect(parseInput('  5.5 lbs  ')).toEqual({ value: 5.5, unit: 'lbs' });
  });
  
  it('should handle negative values', () => {
    expect(parseInput('-10km')).toEqual({ value: -10, unit: 'km' });
    expect(parseInput('-5.5 lbs')).toEqual({ value: -5.5, unit: 'lbs' });
  });
  
  it('should convert unit to lowercase', () => {
    expect(parseInput('10KM')).toEqual({ value: 10, unit: 'km' });
    expect(parseInput('5.5LBS')).toEqual({ value: 5.5, unit: 'lbs' });
  });
  
  it('should return null for invalid input', () => {
    expect(parseInput('invalid')).toBe(null);
    expect(parseInput('10')).toBe(null);
    expect(parseInput('km')).toBe(null);
    expect(parseInput('')).toBe(null);
    expect(parseInput('10 km extra')).toBe(null);
  });
  
  it('should handle non-string input', () => {
    expect(parseInput(null)).toBe(null);
    expect(parseInput(undefined)).toBe(null);
    expect(parseInput(123)).toBe(null);
  });
});