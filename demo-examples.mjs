#!/usr/bin/env node
/**
 * UConv - Concrete Usage Examples
 * Demonstrations for marketing & real-world use cases
 */

import { convert, convertCurrencyLive } from './node/src/index.js';

// ANSI color codes
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  dim: '\x1b[2m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  white: '\x1b[37m',
  bgBlue: '\x1b[44m',
  bgGreen: '\x1b[42m',
  bgRed: '\x1b[41m',
};

const c = colors;

const title = (text) => `${c.bgBlue}${c.bright}${c.white} ${text} ${c.reset}`;
const section = (text) => `${c.bright}${c.cyan}${text}${c.reset}`;
const result = (text) => `${c.bright}${c.green}${text}${c.reset}`;
const value = (text) => `${c.bright}${c.yellow}${text}${c.reset}`;
const label = (text) => `${c.white}${text}${c.reset}`;
const arrow = () => `${c.bright}${c.magenta}→${c.reset}`;
const sep = () => `${c.dim}${'─'.repeat(60)}${c.reset}`;

console.log(`\n${c.bright}${c.cyan}
╔═══════════════════════════════════════════════════════╗
║   🎯  ${c.yellow}UConv Real-World Examples${c.cyan}  🎯          ║
║        Visualize Unit Conversions Like Never Before   ║
╚═══════════════════════════════════════════════════════╝
${c.reset}\n`);

// ============================================
// 1. Personal Health & Fitness
// ============================================
console.log(section('📏 PERSONAL HEALTH & FITNESS'));
console.log(sep());

const userHeightFt = 5.9;
const userHeightM = convert(`${userHeightFt} ft`, 'm');
console.log(`${label('Height:')} ${value(userHeightFt + ' ft')} ${arrow()} ${result(userHeightM.toFixed(2) + ' m')}`);

const userWeightLbs = 170;
const userWeightKg = convert(`${userWeightLbs} lbs`, 'kg');
console.log(`${label('Weight:')} ${value(userWeightLbs + ' lbs')} ${arrow()} ${result(userWeightKg.toFixed(2) + ' kg')}`);

// BMI calculation (metric)
const bmi = userWeightKg / (userHeightM * userHeightM);
console.log(`${label('BMI:')} ${result(bmi.toFixed(1))} ${c.dim}(healthy range)${c.reset}\n`);

// ============================================
// 2. Sports & Events
// ============================================
console.log(section('🏃 SPORTS & EVENTS'));
console.log(sep());

const marathonMiles = 26.2;
const marathonKm = convert(`${marathonMiles} mi`, 'km');
console.log(`${label('Marathon:')} ${value(marathonMiles + ' mi')} ${arrow()} ${result(marathonKm.toFixed(2) + ' km')}`);

const runnersSpeedMph = 12;
const runnersSpeedKmh = convert(`${runnersSpeedMph} mph`, 'km/h');
console.log(`${label('Speed:')} ${value(runnersSpeedMph + ' mph')} ${arrow()} ${result(runnersSpeedKmh.toFixed(2) + ' km/h')}`);

const averageSpeedMs = convert(`${runnersSpeedKmh} km/h`, 'm/s');
console.log(`${label('  Also:')} ${result(averageSpeedMs.toFixed(2) + ' m/s')}\n`);

// ============================================
// 3. Travel & Transportation
// ============================================
console.log(section('✈️  TRAVEL & TRANSPORTATION'));
console.log(sep());

const baggageWeightKg = 23;
const baggageWeightLbs = convert(`${baggageWeightKg} kg`, 'lbs');
console.log(`${label('Luggage limit:')} ${value(baggageWeightKg + ' kg')} ${arrow()} ${result(baggageWeightLbs.toFixed(2) + ' lbs')}`);

const distanceMiles = 500;
const distanceKm = convert(`${distanceMiles} mi`, 'km');
console.log(`${label('Flight distance:')} ${value(distanceMiles + ' mi')} ${arrow()} ${result(distanceKm.toFixed(2) + ' km')}`);

const speedMph = 500;
const speedKmh = convert(`${speedMph} mph`, 'km/h');
console.log(`${label('Cruise speed:')} ${value(speedMph + ' mph')} ${arrow()} ${result(speedKmh.toFixed(2) + ' km/h')}\n`);

// ============================================
// 4. Cooking & Recipes
// ============================================
console.log(section('👨‍🍳 COOKING & RECIPES'));
console.log(sep());

const oilMl = 250;
const oilL = convert(`${oilMl} ml`, 'l');
console.log(`${label('Ingredient:')} ${value(oilMl + ' ml oil')} ${arrow()} ${result(oilL.toFixed(3) + ' liters')}`);

const tempF = 350;  // oven temperature
const tempC = convert(`${tempF} F`, 'C');
console.log(`${label('Oven temp:')} ${value(tempF + '°F')} ${arrow()} ${result(tempC.toFixed(0) + '°C')}\n`);

// ============================================
// 5. Weather & Environmental
// ============================================
console.log(section('🌡️ WEATHER & ENVIRONMENTAL'));
console.log(sep());

const coldDayF = -4;
const coldDayC = convert(`${coldDayF} F`, 'C');
console.log(`${label('Freezing:')} ${value(coldDayF + '°F')} ${arrow()} ${result(coldDayC.toFixed(1) + '°C')}`);

const bodyTempF = 98.6;
const bodyTempC = convert(`${bodyTempF} F`, 'C');
console.log(`${label('Body temp:')} ${value(bodyTempF + '°F')} ${arrow()} ${result(bodyTempC.toFixed(1) + '°C')}`);

const heatWaveF = 104;
const heatWaveC = convert(`${heatWaveF} F`, 'C');
console.log(`${label('Heat wave:')} ${value(heatWaveF + '°F')} ${arrow()} ${result(heatWaveC.toFixed(1) + '°C')}\n`);

// ============================================
// 6. Energy & Utilities
// ============================================
console.log(section('⚡ ENERGY & UTILITIES'));
console.log(sep());

const monthlyKwh = 800;
const monthlyJ = convert(`${monthlyKwh} kwh`, 'j');
console.log(`${label('Monthly usage:')} ${value(monthlyKwh + ' kWh')} ${arrow()} ${result((monthlyJ / 1e9).toFixed(2) + ' GJ')}`);

const temperatureDiffF = 68 - 72;
const temperatureDiffC = convert(`${temperatureDiffF} F`, 'C');
console.log(`${label('Temp delta:')} ${value(temperatureDiffF + '°F')} ${arrow()} ${result(temperatureDiffC.toFixed(1) + '°C')}\n`);

// ============================================
// 7. International Currency (Static)
// ============================================
console.log(section('💰 CURRENCY CONVERSION (Static Rates)'));
console.log(sep());

const priceUSD = 99.99;
const priceEUR = convert(`${priceUSD} USD`, 'EUR');
const priceGBP = convert(`${priceUSD} USD`, 'GBP');
console.log(`${label('Product price:')}`);
console.log(`  ${result('$' + priceUSD)} USD ${arrow()} ${result('€' + priceEUR.toFixed(2))} EUR ${arrow()} ${result('£' + priceGBP.toFixed(2))} GBP\n`);

// ============================================
// 8. Industrial & Technical
// ============================================
console.log(section('🏭 INDUSTRIAL & TECHNICAL'));
console.log(sep());

const pressureBar = 1.5;
const pressurePa = convert(`${pressureBar} bar`, 'pa');
const pressurePsi = convert(`${pressureBar} bar`, 'psi');
console.log(`${label('Pressure:')} ${value(pressureBar + ' bar')} ${arrow()} ${result(pressurePa.toFixed(0))} Pa / ${result(pressurePsi.toFixed(2))} psi`);

const powerKw = 5;
const powerHp = convert(`${powerKw} kw`, 'hp');
console.log(`${label('Motor power:')} ${value(powerKw + ' kW')} ${arrow()} ${result(powerHp.toFixed(2) + ' hp')}\n`);

// ============================================
// 9. Time Calculations
// ============================================
console.log(section('⏱️ TIME CALCULATIONS'));
console.log(sep());

const movieHours = 2.5;
const movieMinutes = convert(`${movieHours} hr`, 'min');
const movieSeconds = convert(`${movieHours} hr`, 's');
console.log(`${label('Movie:')} ${value(movieHours + ' hr')} ${arrow()} ${result(movieMinutes.toFixed(0))} min / ${result(movieSeconds.toFixed(0))} sec`);

const yearDays = convert('1 year', 'day');
const yearSeconds = convert('1 year', 's');
console.log(`${label('Year:')} ${value('1 year')} ${arrow()} ${result(yearDays.toFixed(0))} days / ${result(yearSeconds.toFixed(0))} seconds\n`);

// ============================================
// 10. Data & Volume
// ============================================
console.log(section('📦 DATA & VOLUME'));
console.log(sep());

const tankL = 50;
const tankGal = convert(`${tankL} l`, 'gal');
console.log(`${label('Water tank:')} ${value(tankL + ' L')} ${arrow()} ${result(tankGal.toFixed(2))} gallons`);

const volumeMl = 500;
const volumeLiters = convert(`${volumeMl} ml`, 'l');
console.log(`${label('Bottle:')} ${value(volumeMl + ' ml')} ${arrow()} ${result(volumeLiters.toFixed(3) + ' L')}\n`);

console.log(`${c.bright}${c.green}╔═══════════════════════════════════════════════════════╗`);
console.log(`║              ✨ Thanks for using UConv! ✨             ║`);
console.log(`╚═══════════════════════════════════════════════════════╝${c.reset}\n`);
