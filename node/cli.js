#!/usr/bin/env node

import { getConversionFactor, isValidUnit, UNITS, BASE_UNITS, getUnitDisplayName, getComposedUnitFactor } from "./src/units.js";
import pkg from "./package.json" with { type: "json" };

function printUsage() {
  console.log("Uconv - Universal Unit Converter");
  console.log("Usage: uconv <value> <from_unit> <to_unit> [--lang xx]");
  console.log("       uconv list");
  console.log("       uconv categories");
  console.log("       uconv --version");
  console.log("       uconv --help");
  console.log("Examples:");
  console.log("  uconv 10 km m");
  console.log("  uconv 100 USD EUR");
  console.log("  uconv list");
  console.log("  uconv categories");
}

function printVersion() {
  console.log(`uconv version ${pkg.version}`);
}

function printCategories() {
  console.log('Available categories:');
  Object.keys(UNITS).forEach(cat => console.log(' -', cat));
}

function printUnits(lang = 'en') {
  console.log('Supported units:');
  for (const [cat, units] of Object.entries(UNITS)) {
    console.log(`\n[${cat}]`);
    const names = Object.keys(units).sort();
    for (const u of names) {
      const disp = getUnitDisplayName ? getUnitDisplayName(u, lang) : u;
      console.log(`  ${u}${disp !== u ? ` (${disp})` : ''}`);
    }
  }
}


const args = process.argv.slice(2);
if (args.length === 0 || args.includes('--help') || args.includes('-h')) {
  printUsage();
  process.exit(0);
}

if (args.includes('--version') || args.includes('-v')) {
  printVersion();
  process.exit(0);
}

let lang = 'en';
const langIdx = args.indexOf('--lang');
if (langIdx !== -1 && args[langIdx + 1]) {
  lang = args[langIdx + 1];
  args.splice(langIdx, 2);
}

if (args[0] === 'list') {
  printUnits(lang);
  process.exit(0);
}

if (args[0] === 'categories') {
  printCategories();
  process.exit(0);
}

if (args.length !== 3) {
  printUsage();
  process.exit(1);
}

const [valueStr, fromUnit, toUnit] = args;
const value = parseFloat(valueStr);
if (isNaN(value)) {
  console.error('Invalid value:', valueStr);
  printUsage();
  process.exit(1);
}


// Accept composed units (e.g. N*m, J/s, kg*m2/s2)
function getFactor(unit) {
  // Try simple unit first
  let factor = getConversionFactor(unit);
  if (factor != null) return factor;
  // Try composed unit
  try {
    factor = getComposedUnitFactor(unit);
    return factor;
  } catch (e) {
    return null;
  }
}

const fromFactor = getFactor(fromUnit);
const toFactor = getFactor(toUnit);
if (fromFactor == null || toFactor == null) {
  console.error('Unknown or invalid unit(s).');
  printUsage();
  process.exit(1);
}

const result = value * (fromFactor / toFactor);
console.log(`${value} ${fromUnit} = ${result} ${toUnit}`);
