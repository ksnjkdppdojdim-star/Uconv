import { getConversionFactor } from '../units.js';

/**
 * Convert currency units
 * Note: In production, exchange rates should be fetched from a live API
 * @param {number} value - Value to convert
 * @param {string} fromUnit - Source currency
 * @param {string} toUnit - Target currency
 * @returns {number} Converted value
 */
export function convertCurrency(value, fromUnit, toUnit) {
  const fromFactor = getConversionFactor(fromUnit);
  const toFactor = getConversionFactor(toUnit);
  
  if (fromFactor === null || toFactor === null) {
    throw new Error('Invalid currency unit');
  }
  
  // Convert to base unit (USD), then to target currency
  const baseValue = value * fromFactor;
  return baseValue / toFactor;
}