// Messages d’erreur localisés (français)
export default {
  unknownUnit: (unit) => `Unité inconnue : ${unit}`,
  invalidInput: (input) => `Format d’entrée invalide : ${input}`,
  incompatibleUnits: (from, to) => `Conversion impossible de ${from} vers ${to} : types incompatibles`,
  conversionFailed: (msg) => `Échec de la conversion : ${msg}`
};
