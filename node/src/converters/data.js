// Generic converter for data units (bit, byte, prefixes)
// Conversion factorielle : tout est basé sur le bit
export default function convertData(value, fromUnit, toUnit, units) {
  // Normalisation des clés
  const from = fromUnit;
  const to = toUnit;
  const fromLower = fromUnit.toLowerCase();
  const toLower = toUnit.toLowerCase();
  if (!(from in units) && !(fromLower in units)) throw new Error('Unknown data unit');
  if (!(to in units) && !(toLower in units)) throw new Error('Unknown data unit');
  const fromKey = (from in units) ? from : fromLower;
  const toKey = (to in units) ? to : toLower;

  // Détection du type (bit ou byte)
  const isBit = (u) => u === 'b' || u === 'bit' || (u.endsWith('b') && !u.endsWith('B'));
  const isByte = (u) => u === 'B' || u === 'byte' || (u.endsWith('B'));

  // Toujours convertir la valeur source en bits
  let valueInBits;
  if (isBit(fromKey)) {
    valueInBits = value * units[fromKey];
  } else if (isByte(fromKey)) {
    valueInBits = value * units[fromKey] * 8;
  } else {
    valueInBits = value * units[fromKey];
  }

  // Conversion vers la cible
  let result;
  if (isBit(toKey)) {
    result = valueInBits / units[toKey];
  } else if (isByte(toKey)) {
    result = valueInBits / (units[toKey] * 8);
  } else {
    result = valueInBits / units[toKey];
  }
  return result;
}
