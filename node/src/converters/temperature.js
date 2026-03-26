// Conversion température : °C, °F, K
export function convertTemperature(value, fromUnit, toUnit) {
  const from = fromUnit.toLowerCase();
  const to = toUnit.toLowerCase();

  // Celsius -> ...
  if (from === 'c' || from === '°c' || from === 'celsius') {
    if (to === 'c' || to === '°c' || to === 'celsius') return value;
    if (to === 'f' || to === '°f' || to === 'fahrenheit') return value * 9/5 + 32;
    if (to === 'k' || to === 'kelvin') return value + 273.15;
  }
  // Fahrenheit -> ...
  if (from === 'f' || from === '°f' || from === 'fahrenheit') {
    if (to === 'c' || to === '°c' || to === 'celsius') return (value - 32) * 5/9;
    if (to === 'f' || to === '°f' || to === 'fahrenheit') return value;
    if (to === 'k' || to === 'kelvin') return (value - 32) * 5/9 + 273.15;
  }
  // Kelvin -> ...
  if (from === 'k' || from === 'kelvin') {
    if (to === 'c' || to === '°c' || to === 'celsius') return value - 273.15;
    if (to === 'f' || to === '°f' || to === 'fahrenheit') return (value - 273.15) * 9/5 + 32;
    if (to === 'k' || to === 'kelvin') return value;
  }
  throw new Error(`Cannot convert from ${fromUnit} to ${toUnit} (temperature)`);
}
