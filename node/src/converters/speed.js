// Conversion vitesse : m/s, km/h, mph, knots
const SPEED_FACTORS = {
  'm/s': 1,
  'meter/second': 1,
  'meters/second': 1,
  'ms': 1,
  'km/h': 0.277778,
  'kph': 0.277778,
  'kilometer/hour': 0.277778,
  'kilometre/hour': 0.277778,
  'mph': 0.44704,
  'mile/hour': 0.44704,
  'kn': 0.514444,
  'knot': 0.514444,
  'knots': 0.514444
};

export function convertSpeed(value, fromUnit, toUnit) {
  const from = fromUnit.toLowerCase();
  const to = toUnit.toLowerCase();
  const fromFactor = SPEED_FACTORS[from];
  const toFactor = SPEED_FACTORS[to];
  if (fromFactor == null || toFactor == null) throw new Error(`Cannot convert from ${fromUnit} to ${toUnit} (speed)`);
  // Convert to m/s then to target
  return (value * fromFactor) / toFactor;
}
