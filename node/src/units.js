// Base units for each category
export const BASE_UNITS = {
  distance: 'm',    // meter
  weight: 'g',      // gram
  time: 's',        // second
  currency: 'usd'   // US Dollar
};

// Unit definitions with conversion factors to base units
export const UNITS = {
  // Distance (base: meter)
  distance: {
    // Metric
    'm': 1,
    'meter': 1,
    'metre': 1,
    'km': 1000,
    'kilometer': 1000,
    'kilometre': 1000,
    'cm': 0.01,
    'centimeter': 0.01,
    'centimetre': 0.01,
    'mm': 0.001,
    'millimeter': 0.001,
    'millimetre': 0.001,
    
    // Imperial
    'ft': 0.3048,
    'foot': 0.3048,
    'feet': 0.3048,
    'in': 0.0254,
    'inch': 0.0254,
    'yd': 0.9144,
    'yard': 0.9144,
    'mi': 1609.344,
    'mile': 1609.344
  },
  
  // Weight (base: gram)
  weight: {
    // Metric
    'g': 1,
    'gram': 1,
    'kg': 1000,
    'kilogram': 1000,
    'mg': 0.001,
    'milligram': 0.001,
    't': 1000000,
    'ton': 1000000,
    'tonne': 1000000,
    
    // Imperial
    'lb': 453.592,
    'lbs': 453.592,
    'pound': 453.592,
    'oz': 28.3495,
    'ounce': 28.3495,
    'st': 6350.29,
    'stone': 6350.29
  },
  
  // Time (base: second)
  time: {
    's': 1,
    'sec': 1,
    'second': 1,
    'min': 60,
    'minute': 60,
    'hr': 3600,
    'hour': 3600,
    'day': 86400,
    'week': 604800,
    'month': 2629746, // Average month
    'year': 31556952  // Average year
  },
  
  // Currency (base: USD)
  // Note: In a real implementation, these would be fetched from an API
  currency: {
    'usd': 1,
    'eur': 0.85,   // Example rates
    'gbp': 0.75,
    'jpy': 110,
    'cad': 1.25,
    'aud': 1.35,
    'chf': 0.92,
    'cny': 6.45
  }
};

/**
 * Get the category of a unit
 * @param {string} unit - Unit name
 * @returns {string|null} Category name or null if not found
 */
export function getUnitCategory(unit) {
  const normalizedUnit = unit.toLowerCase();
  
  for (const [category, units] of Object.entries(UNITS)) {
    if (units.hasOwnProperty(normalizedUnit)) {
      return category;
    }
  }
  
  return null;
}

/**
 * Check if a unit is valid
 * @param {string} unit - Unit name
 * @returns {boolean} True if unit exists
 */
export function isValidUnit(unit) {
  return getUnitCategory(unit) !== null;
}

/**
 * Get conversion factor to base unit
 * @param {string} unit - Unit name
 * @returns {number|null} Conversion factor or null if not found
 */
export function getConversionFactor(unit) {
  const category = getUnitCategory(unit);
  if (!category) {
    return null;
  }
  
  return UNITS[category][unit.toLowerCase()];
}