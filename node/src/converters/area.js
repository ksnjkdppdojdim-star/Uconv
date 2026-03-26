// Area converter (base: m2)
export default function convertArea(value, fromUnit, toUnit, units) {
  const fromFactor = units[fromUnit];
  const toFactor = units[toUnit];
  if (fromFactor == null || toFactor == null) throw new Error('Unknown area unit');
  return (value * fromFactor) / toFactor;
}
