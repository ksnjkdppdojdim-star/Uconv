/**
 * Parse input string containing value and unit
 * @param {string} input - Input string like "10km", "5.5 lbs", "100 USD"
 * @returns {Object|null} Parsed object {value, unit} or null if invalid
 */
const MAX_INPUT_LENGTH = 50;
const MAX_VALUE = 1e15;
// Accept units with *, /, ^, digits (e.g. 'kg*m2/s2', 'l/min', 'm^2/s')
const PARSE_REGEX = /^(-?\d+(?:\.\d+)?(?:e[+-]?\d+)?)\s*([a-zA-Z°µ][a-zA-Z0-9°µ\/\*\^]*)$/i;

export function parseInput(input) {
  if (typeof input !== 'string') return null;

  const clean = input.trim();
  if (!clean || clean.length > MAX_INPUT_LENGTH) return null;

  const match = clean.match(PARSE_REGEX);
  if (!match) return null;

  const value = parseFloat(match[1]);

  if (!isFinite(value)) return null;
  if (Math.abs(value) > MAX_VALUE) return null;

  return { value, unit: match[2].toLowerCase() };
}