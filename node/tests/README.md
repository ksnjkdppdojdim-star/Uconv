# Dossier tests

Ce dossier contient tous les tests unitaires et d’intégration pour la librairie UConv (Node.js).

## Structure

- Un fichier de test par fonctionnalité ou catégorie d’unités (ex : `distance.test.js`, `area_volume_energy_pressure_power.test.js`, `composed_units.test.js`, etc.)
- Les tests sont écrits avec Vitest (ou compatible Jest/Mocha).
- Les fichiers `.test.mjs` sont utilisés pour les tests ESM modernes.

## Bonnes pratiques

- Chaque test doit être indépendant et reproductible.
- Les tests couvrent la conversion, le parsing, l’i18n, les erreurs, les cas limites, etc.
- Pour ajouter un test, créer un fichier `xxx.test.js` ou `xxx.test.mjs` et suivre l’exemple des tests existants.

## Exécution

Lancer tous les tests :
```sh
npm run test
```
Lancer un test spécifique :
```sh
npm run test tests/area_volume_energy_pressure_power.test.js
```
