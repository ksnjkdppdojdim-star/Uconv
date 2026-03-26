import convertData from './converters/data.js';
/**
 * Formate un nombre selon la locale (fr, en, etc.)
 * @param {number} value
 * @param {string} locale - ex: 'fr', 'fr-FR', 'en', 'en-US'
 * @param {object} options - options Intl.NumberFormat
 * @returns {string}
 */
export function formatNumberLocalized(value, locale = 'en', options = {}) {
  // Par défaut, pas de séparateur de milliers, jusqu’à 10 décimales
  const defaultOptions = {
    useGrouping: false,
    minimumFractionDigits: 0,
    maximumFractionDigits: 10
  };
  return new Intl.NumberFormat(locale, { ...defaultOptions, ...options }).format(value);
}
import ERRORS_FR from './i18n/fr_FR/LC_MESSAGES/errors.fr.js';
import ERRORS_EN from './i18n/en_US/LC_MESSAGES/errors.en.js';

const ERROR_I18N_MAP = {
  fr: ERRORS_FR,
  fr_FR: ERRORS_FR,
  en: ERRORS_EN,
  en_US: ERRORS_EN
};

/**
 * Retourne le générateur de messages d’erreur localisé
 * @param {string} lang - 'fr' ou 'en'
 */
export function getErrorMessages(lang = 'en') {
  return ERROR_I18N_MAP[lang] || ERROR_I18N_MAP['en'];
}
import { getUnitDisplayName } from './units.js';
/**
 * Convertit et affiche le résultat avec unité localisée
 * @param {number|string} value - valeur source
 * @param {string} from - unité source
 * @param {string} to - unité cible
 * @param {string} lang - langue ('fr' ou 'en')
 * @returns {string} ex: "12.5 kilomètres"
 */
export function convertDisplay(value, from, to, lang = 'en') {
  const locale = lang.replace('_', '-');
  const result = convert(`${value}${from}`, to);
  const formatted = formatNumberLocalized(result, locale);
  return `${formatted} ${getUnitDisplayName(to, lang)}`;
}
import { parseInput } from './parser.js';
import { getUnitCategory, isValidUnit, UNITS, registerUnit, getComposedUnitFactor } from './units.js';
export { registerUnit };

import { convertDistance } from './converters/distance.js';
import { convertWeight } from './converters/weight.js';
import { convertTime } from './converters/time.js';
import { convertCurrency } from './converters/currency.js';
import { convertTemperature } from './converters/temperature.js';
import { convertSpeed } from './converters/speed.js';
import convertArea from './converters/area.js';
import convertVolume from './converters/volume.js';
import convertEnergy from './converters/energy.js';
import convertPressure from './converters/pressure.js';
import convertPower from './converters/power.js';

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
  currency: convertCurrency,
  temperature: convertTemperature,
  speed: convertSpeed,
  area: convertArea,
  volume: convertVolume,
  energy: convertEnergy,
  pressure: convertPressure,
  power: convertPower,
  data: convertData
};

/**
 * Convert between units
 * @param {string} from - Source value and unit (e.g., "10km")
 * @param {string} to - Target unit (e.g., "m")
 * @returns {number} Converted value
 */
export function convert(from, to) {
  if (typeof to !== 'string' || !to.trim()) {
    throw new InvalidInputError(to);
  }
  const toUnit = to.trim().toLowerCase();

  try {
    const parsed = parseInput(from);
    if (!parsed) throw new InvalidInputError(from);
    const { value, unit: fromUnit } = parsed;
    if (!fromUnit) throw new InvalidInputError(from);

    // Support composed units (powers, ratios)
    // Accept if either fromUnit or toUnit is a composed unit (contains /, *, ^, or ends with a digit)
    const isComposed = u => /[\/\*\^]|\d$/.test(u);
    if (isComposed(fromUnit) || isComposed(toUnit)) {
      // Compute factors for both units
      const fromFactor = getComposedUnitFactor(fromUnit);
      const toFactor = getComposedUnitFactor(toUnit);
      return (value * fromFactor) / toFactor;
    }

    // Si le parser a extrait une unité mais qu’elle n’est pas reconnue, lever UnknownUnitError
    if (!isValidUnit(fromUnit)) throw new UnknownUnitError(fromUnit);
    if (!isValidUnit(toUnit))   throw new UnknownUnitError(toUnit);

    const fromCategory = getUnitCategory(fromUnit);
    const toCategory   = getUnitCategory(toUnit);

    if (fromCategory !== toCategory) throw new IncompatibleUnitsError(fromUnit, toUnit);

    const converter = converters[fromCategory];
    if (!converter) throw new Error(`No converter for: ${fromCategory}`);

    // Pour les converters factoriels, passer le mapping d’unités
    if (["area","volume","energy","pressure","power","data"].includes(fromCategory)) {
      return converter(value, fromUnit, toUnit, UNITS[fromCategory]);
    }
    return converter(value, fromUnit, toUnit);

  } catch (error) {
    if (error instanceof UnknownUnitError ||
        error instanceof InvalidInputError ||
        error instanceof IncompatibleUnitsError) {
      throw error;
    }
    throw new Error(`Conversion failed: ${error.message}`);
  }
}

export { convertCurrencyLive } from './converters/currency.js';