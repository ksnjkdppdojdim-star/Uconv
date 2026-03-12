import { parseInput } from './parser.js';
import { getUnitCategory, isValidUnit } from './units.js';
import { convertDistance } from './converters/distance.js';
import { convertWeight } from './converters/weight.js';
import { convertTime } from './converters/time.js';
import { convertCurrency } from './converters/currency.js';

// Custom error classes
export class UnknownUnitError extends Error {
  constructor(unit) {
    super(`Unknown unit: ${unit}`);
    this.name = 'UnknownUnitError';
  }
}

export class InvalidInputError extends Error {
  constructor(input) {
    super(`Invalid input format: ${input}`);
    this.name = 'InvalidInputError';
  }
}

export class IncompatibleUnitsError extends Error {
  constructor(fromUnit, toUnit) {
    super(`Cannot convert from ${fromUnit} to ${toUnit}: incompatible unit types`);
    this.name = 'IncompatibleUnitsError';
  }
}

const converters = {
  distance: convertDistance,
  weight: convertWeight,
  time: convertTime,
  currency: convertCurrency
};

/**
 * Convert between units
 * @param {string} from - Source value and unit (e.g., "10km")
 * @param {string} to - Target unit (e.g., "m")
 * @returns {number} Converted value
 */
export function convert(from, to) {
  try {
    // Parse input
    const parsed = parseInput(from);
    if (!parsed) {
      throw new InvalidInputError(from);
    }
    
    const { value, unit: fromUnit } = parsed;
    
    // Validate units exist
    if (!isValidUnit(fromUnit)) {
      throw new UnknownUnitError(fromUnit);
    }
    
    if (!isValidUnit(to)) {
      throw new UnknownUnitError(to);
    }
    
    // Get unit categories
    const fromCategory = getUnitCategory(fromUnit);
    const toCategory = getUnitCategory(to);
    
    // Validate units are compatible
    if (fromCategory !== toCategory) {
      throw new IncompatibleUnitsError(fromUnit, to);
    }
    
    // Get appropriate converter
    const converter = converters[fromCategory];
    if (!converter) {
      throw new Error(`No converter available for category: ${fromCategory}`);
    }
    
    // Perform conversion
    return converter(value, fromUnit, to);
    
  } catch (error) {
    // Re-throw our custom errors, wrap others
    if (error instanceof UnknownUnitError || 
        error instanceof InvalidInputError || 
        error instanceof IncompatibleUnitsError) {
      throw error;
    }
    throw new Error(`Conversion failed: ${error.message}`);
  }
}