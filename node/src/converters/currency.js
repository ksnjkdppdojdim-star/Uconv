import { getConversionFactor } from '../units.js';
import { factorConvert } from '../utils/convert.js';


/**
 * Convert currency units
 * Note: In production, exchange rates should be fetched from a live API
 * @param {number} value - Value to convert
 * @param {string} fromUnit - Source currency
 * @param {string} toUnit - Target currency
 * @returns {number} Converted value
 */


export function convertCurrency(value, fromUnit, toUnit) {
  const from = getConversionFactor(fromUnit); // taux fromUnit/USD
  const to   = getConversionFactor(toUnit);   // taux toUnit/USD
  if (from === null || to === null) throw new Error('Invalid currency unit');
  // Convertir via USD : value → USD → target
  const inUsd = value * from;   // ramener en USD
  return inUsd * to;            // convertir vers target
}

export async function convertCurrencyLive(value, fromUnit, toUnit) {
  const from = fromUnit.toUpperCase();
  const to   = toUnit.toUpperCase();

  const res = await fetch(`https://api.frankfurter.app/latest?from=${from}&to=${to}`);
  if (!res.ok) throw new Error('Failed to fetch live rates');

  const { rates } = await res.json();
  if (!rates[to]) throw new Error(`Unknown currency: ${to}`);

  return value * rates[to];
}