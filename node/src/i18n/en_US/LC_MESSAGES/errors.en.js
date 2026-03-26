// Localized error messages (English)
export default {
  unknownUnit: (unit) => `Unknown unit: ${unit}`,
  invalidInput: (input) => `Invalid input format: ${input}`,
  incompatibleUnits: (from, to) => `Cannot convert from ${from} to ${to}: incompatible unit types`,
  conversionFailed: (msg) => `Conversion failed: ${msg}`
};
