import { getConversionFactor } from '../units.js';

/**
 * Convert weight units
 * @param {number} value - Value to convert
 * @param {string} fromUnit - Source unit
 * @param {string} toUnit - Target unit
 * @returns {number} Converted value
 */
export function convertWeight(value, fromUnit, toUnit) {
  const fromFactor = getConversionFactor(fromUnit);
  const toFactor = getConversionFactor(toUnit);
  
  if (fromFactor === null || toFactor === null) {
    throw new Error('Invalid weight unit');
  }
  
  // Convert to base unit (grams), then to target unit
  const baseValue = value * fromFactor;
  return baseValue / toFactor;
}