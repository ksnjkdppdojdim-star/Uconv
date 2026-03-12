import { getConversionFactor } from '../units.js';
import { getConversionFactor } from '../units.js';
import { factorConvert } from '../utils/convert.js';

/**
 * Convert time units
 * @param {number} value - Value to convert
 * @param {string} fromUnit - Source unit
 * @param {string} toUnit - Target unit
 * @returns {number} Converted value
 */


export function convertTime(value, fromUnit, toUnit) {
  const from = getConversionFactor(fromUnit);
  const to   = getConversionFactor(toUnit);
  if (from === null || to === null) throw new Error('Invalid time unit');
  return factorConvert(value, from, to);
}