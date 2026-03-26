// Energy converter (base: J)
export default function convertEnergy(value, fromUnit, toUnit, units) {
  const fromFactor = units[fromUnit];
  const toFactor = units[toUnit];
  if (fromFactor == null || toFactor == null) throw new Error('Unknown energy unit');
  return (value * fromFactor) / toFactor;
}
