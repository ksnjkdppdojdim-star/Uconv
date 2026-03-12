/**
 * Parse input string containing value and unit
 * @param {string} input - Input string like "10km", "5.5 lbs", "100 USD"
 * @returns {Object|null} Parsed object {value, unit} or null if invalid
 */
export function parseInput(input) {
  if (typeof input !== 'string') {
    return null;
  }
  
  // Remove extra whitespace
  const clean = input.trim();
  
  if (!clean) {
    return null;
  }
  
  // Match patterns like "10km", "5.5 lbs", "100 USD", "3.14159m"
  const match = clean.match(/^(-?\d+(?:\.\d+)?)\s*([a-zA-Z]+)$/);
  
  if (!match) {
    return null;
  }
  
  const [, valueStr, unit] = match;
  const value = parseFloat(valueStr);
  
  if (isNaN(value)) {
    return null;
  }
  
  return {
    value,
    unit: unit.toLowerCase()
  };
}