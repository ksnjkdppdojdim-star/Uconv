import { describe, it, expect } from 'vitest';
import { convert, UnknownUnitError, InvalidInputError, IncompatibleUnitsError } from '../src/index.js';

describe('Unit Converter', () => {
  describe('Distance conversions', () => {
    it('should convert kilometers to meters', () => {
      expect(convert('10km', 'm')).toBe(10000);
    });
    
    it('should convert feet to meters', () => {
      expect(convert('10ft', 'm')).toBeCloseTo(3.048);
    });
    
    it('should convert inches to centimeters', () => {
      expect(convert('12in', 'cm')).toBeCloseTo(30.48);
    });
    
    it('should handle decimal values', () => {
      expect(convert('5.5km', 'm')).toBe(5500);
    });
  });
  
  describe('Weight conversions', () => {
    it('should convert pounds to kilograms', () => {
      expect(convert('5lbs', 'kg')).toBeCloseTo(2.26796);
    });
    
    it('should convert ounces to grams', () => {
      expect(convert('16oz', 'g')).toBeCloseTo(453.592);
    });
    
    it('should convert kilograms to pounds', () => {
      expect(convert('1kg', 'lb')).toBeCloseTo(2.20462);
    });
  });
  
  describe('Time conversions', () => {
    it('should convert hours to minutes', () => {
      expect(convert('1hr', 'min')).toBe(60);
    });
    
    it('should convert days to hours', () => {
      expect(convert('1day', 'hr')).toBe(24);
    });
    
    it('should convert minutes to seconds', () => {
      expect(convert('5min', 's')).toBe(300);
    });
  });
  
  describe('Currency conversions', () => {
    it('should convert USD to EUR', () => {
      const result = convert('100usd', 'eur');
      expect(result).toBeCloseTo(85, 0); // Approximate due to example rates
    });
    
    it('should convert EUR to GBP', () => {
      const result = convert('100eur', 'gbp');
      expect(typeof result).toBe('number');
    });
  });
  
  describe('Error handling', () => {
    it('should throw UnknownUnitError for invalid units', () => {
      expect(() => convert('10xyz', 'm')).toThrow(UnknownUnitError);
      expect(() => convert('10m', 'xyz')).toThrow(UnknownUnitError);
    });
    
    it('should throw InvalidInputError for malformed input', () => {
      expect(() => convert('invalid', 'm')).toThrow(InvalidInputError);
      expect(() => convert('', 'm')).toThrow(InvalidInputError);
      expect(() => convert('10', 'm')).toThrow(InvalidInputError);
    });
    
    it('should throw IncompatibleUnitsError for different unit types', () => {
      expect(() => convert('10km', 'kg')).toThrow(IncompatibleUnitsError);
      expect(() => convert('5lbs', 'hr')).toThrow(IncompatibleUnitsError);
      expect(() => convert('100usd', 'm')).toThrow(IncompatibleUnitsError);
    });
  });
  
  describe('Input parsing', () => {
    it('should handle various input formats', () => {
      expect(convert('10 km', 'm')).toBe(10000);
      expect(convert('10.5km', 'm')).toBe(10500);
      expect(convert(' 10km ', 'm')).toBe(10000);
    });
    
    it('should handle negative values', () => {
      expect(convert('-10km', 'm')).toBe(-10000);
    });
  });
});