// Volume converter (base: m3)
export default function convertVolume(value, fromUnit, toUnit, units) {
  const fromFactor = units[fromUnit];
  const toFactor = units[toUnit];
  if (fromFactor == null || toFactor == null) throw new Error('Unknown volume unit');
  return (value * fromFactor) / toFactor;
}
