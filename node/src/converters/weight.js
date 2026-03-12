import { getConversionFactor } from '../units.js';
import { factorConvert } from '../utils/convert.js';


/**
 * Convert weight units
 * @param {number} value - Value to convert
 * @param {string} fromUnit - Source unit
 * @param {string} toUnit - Target unit
 * @returns {number} Converted value
 */


export function convertWeight(value, fromUnit, toUnit) {
  const from = getConversionFactor(fromUnit);
  const to   = getConversionFactor(toUnit);
  if (from === null || to === null) throw new Error('Invalid weight unit');
  return factorConvert(value, from, to);
}