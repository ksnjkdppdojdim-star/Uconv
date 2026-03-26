import distance from './units/distance.js';
import weight from './units/weight.js';
import time from './units/time.js';
import currency from './units/currency.js';
import temperature from './units/temperature.js';
import speed from './units/speed.js';
import area from './units/area.js';
import volume from './units/volume.js';
import energy from './units/energy.js';
import pressure from './units/pressure.js';
import power from './units/power.js';

import UNIT_NAMES_FR from './i18n/fr_FR/LC_MESSAGES/units.fr.js';
import UNIT_NAMES_EN from './i18n/en_US/LC_MESSAGES/units.en.js';

export const UNITS = {
  distance,
  weight,
  time,
  currency,
  temperature,
  speed,
  area,
  volume,
  energy,
  pressure,
  power
};



// Préfixes binaires (IEC)
const BINARY_PREFIXES = [
  { symbol: 'Ki', factor: 1024 },      // kibi
  { symbol: 'Mi', factor: 1024 ** 2 }, // mebi
  { symbol: 'Gi', factor: 1024 ** 3 }, // gibi
  { symbol: 'Ti', factor: 1024 ** 4 }, // tebi
  { symbol: 'Pi', factor: 1024 ** 5 }, // pebi
  { symbol: 'Ei', factor: 1024 ** 6 }, // exbi
  { symbol: 'Zi', factor: 1024 ** 7 }, // zebi
  { symbol: 'Yi', factor: 1024 ** 8 }  // yobi
];
// Catégorie data (octet, bit)

const data = {
  // Bits (base = 1 bit)
  'b':   1,
  'bit': 1,
  // Octets (bytes, base = 1 byte)
  'B':    1,
  'byte': 1,
};

// Ajoute les préfixes binaires à la catégorie data


function addBinaryPrefixes(category) {
  // Ajoute uniquement les préfixes binaires pour les bits (kib, mib, gib, etc.)
  for (const { symbol, factor } of BINARY_PREFIXES) {
    const bitKey = symbol.toLowerCase() + 'b';
    if (!UNITS[category][bitKey]) {
      UNITS[category][bitKey] = factor;
    }
  }
}

// Ajouter la catégorie data et ses préfixes APRÈS la création de UNITS
UNITS.data = data;
addBinaryPrefixes('data');
// Table d'équivalences d'unités composées (ex: N·m = J, J/s = W)
const COMPOSED_EQUIVALENTS = {
  'n*m': 'j',
  'j/s': 'w',
  'w*s': 'j',
  'pa*m3': 'j',
  'v*a': 'w',
  'c*v': 'j',
  // Ajouter d'autres équivalences physiques ici
};



// --- i18n: Localized unit names (externalized) ---
const UNIT_I18N_MAP = {
  fr: UNIT_NAMES_FR,
  fr_FR: UNIT_NAMES_FR,
  en: UNIT_NAMES_EN,
  en_US: UNIT_NAMES_EN
};

/**
 * Retourne le nom localisé d’une unité (ex: getUnitDisplayName('km', 'fr') => 'kilomètre')
 * @param {string} unit - nom ou abréviation
 * @param {string} lang - 'fr' ou 'en'
 * @returns {string} nom localisé ou le code si inconnu
 */
export function getUnitDisplayName(unit, lang = 'en') {
  unit = unit.toLowerCase();
  const dict = UNIT_I18N_MAP[lang] || UNIT_I18N_MAP['en'];
  for (const cat of Object.values(dict)) {
    if (cat[unit]) return cat[unit];
  }
  return unit;
}

// SI prefixes: symbol, factor
const SI_PREFIXES = [
  { symbol: 'Y',  factor: 1e24 },   // yotta
  { symbol: 'Z',  factor: 1e21 },   // zetta
  { symbol: 'E',  factor: 1e18 },   // exa
  { symbol: 'P',  factor: 1e15 },   // peta
  { symbol: 'T',  factor: 1e12 },   // tera
  { symbol: 'G',  factor: 1e9 },    // giga
  { symbol: 'M',  factor: 1e6 },    // mega
  { symbol: 'k',  factor: 1e3 },    // kilo
  { symbol: 'h',  factor: 1e2 },    // hecto
  { symbol: 'da', factor: 1e1 },    // deca
  { symbol: 'd',  factor: 1e-1 },   // deci
  { symbol: 'c',  factor: 1e-2 },   // centi
  { symbol: 'm',  factor: 1e-3 },   // milli
  { symbol: 'µ',  factor: 1e-6 },   // micro
  { symbol: 'u',  factor: 1e-6 },   // micro (ascii)
  { symbol: 'n',  factor: 1e-9 },   // nano
  { symbol: 'p',  factor: 1e-12 },  // pico
  { symbol: 'f',  factor: 1e-15 },  // femto
  { symbol: 'a',  factor: 1e-18 },  // atto
  { symbol: 'z',  factor: 1e-21 },  // zepto
  { symbol: 'y',  factor: 1e-24 }   // yocto
];

// --- Composed Unit Utilities ---
// Parse a unit string like 'km2', 'm3/s', 'l/min', 'kg*m2/s2', etc.
// Returns { numerator: [[unit, power], ...], denominator: [[unit, power], ...] }
export function parseComposedUnit(unitStr) {
  // Split numerator/denominator (e.g. 'm2/s' or 'kg*m2/s2')
  const [num, denom] = unitStr.split('/');
  // Numerator: split by '*' (allow both 'm2' and 'm^2')
  const parsePart = (part) => part.split('*').map(u => {
    // Match unit with optional power: 'km2', 'm^2', 's', etc.
    const match = u.match(/^([a-zA-Z°µ]+)(\^?([0-9]+))?$/);
    if (!match) return [u, 1];
    const unit = match[1].toLowerCase();
    const pow = match[3] ? parseInt(match[3], 10) : (match[2] ? parseInt(match[2], 10) : 1);
    return [unit, pow || 1];
  });
  const numerator = parsePart(num);
  const denominator = denom ? parsePart(denom) : [];
  return { numerator, denominator };
}

// Compute the total factor for a composed unit (e.g. 'km2/s')
export function getComposedUnitFactor(unitStr) {
  // Normaliser la chaîne (pas d'espaces, minuscules)
  const norm = unitStr.replace(/\s+/g, '').toLowerCase();
  if (COMPOSED_EQUIVALENTS[norm]) {
    // Si équivalent connu, utiliser le facteur de l'unité équivalente
    return getConversionFactor(COMPOSED_EQUIVALENTS[norm]);
  }
  // Sinon, calcul classique
  const { numerator, denominator } = parseComposedUnit(unitStr);
  let factor = 1;
  for (const [unit, pow] of numerator) {
    const f = getConversionFactor(unit);
    if (f == null) throw new Error('Unknown unit: ' + unit);
    factor *= Math.pow(f, pow);
  }
  for (const [unit, pow] of denominator) {
    const f = getConversionFactor(unit);
    if (f == null) throw new Error('Unknown unit: ' + unit);
    factor /= Math.pow(f, pow);
  }
  return factor;
}




// Génère dynamiquement les variantes SI pour les unités de base
function addSIPrefixes(category, baseUnit) {
  for (const { symbol, factor } of SI_PREFIXES) {
    // Exclure le préfixe qui donnerait le même nom que l’unité de base
    if (symbol.toLowerCase() === baseUnit.toLowerCase()) continue;
    // Always use lowercase for SI-prefixed units
    const prefixed = (symbol + baseUnit).toLowerCase();
    if (!UNITS[category][prefixed]) {
      UNITS[category][prefixed] = factor * UNITS[category][baseUnit];
    }
  }
}

// Appliquer aux catégories compatibles (distance, weight, area)
addSIPrefixes('distance', 'm');
addSIPrefixes('weight', 'g');
addSIPrefixes('area', 'm2');
// Volume: SI prefixes for both m3 and l
addSIPrefixes('volume', 'm3');
addSIPrefixes('volume', 'l');
/**
 * Register a custom unit dynamically
 * @param {string} name - Nom de l’unité (ex: 'foo')
 * @param {object} options - { factor, category }
 */
export function registerUnit(name, { factor, category }) {
  if (!name || typeof name !== 'string') throw new Error('Unit name must be a string');
  if (!category || !UNITS[category]) throw new Error('Unknown category: ' + category);
  if (typeof factor !== 'number' || !isFinite(factor) || factor === 0) throw new Error('Invalid factor');
  UNITS[category][name.toLowerCase()] = factor;
}
// Base units for each category

// Base units for each category
export const BASE_UNITS = {
  distance: 'm',
  weight: 'g',
  time: 's',
  currency: 'usd',
  temperature: 'c',
  speed: 'm/s',
  area: 'm2',
  volume: 'm3',
  energy: 'j',
  pressure: 'pa',
  power: 'w'
};


/**
 * Get the category of a unit
 * @param {string} unit - Unit name
 * @returns {string|null} Category name or null if not found
 */
export function getUnitCategory(unit) {
  const normalizedUnit = unit.toLowerCase();
  for (const [category, units] of Object.entries(UNITS)) {
    if (Object.hasOwn(units, normalizedUnit)) {
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