# Dossier converters

Ce dossier contient les fonctions de conversion spécialisées pour chaque catégorie d’unités.

## Structure

- Un fichier par catégorie :
  - `distance.js` : conversion de distances
  - `weight.js` : conversion de poids
  - `time.js` : conversion de temps
  - `currency.js` : conversion de devises
  - `temperature.js` : conversion de températures
  - `speed.js` : conversion de vitesses
  - `area.js` : conversion de surfaces
  - `volume.js` : conversion de volumes
  - `energy.js` : conversion d’énergie
  - `pressure.js` : conversion de pression
  - `power.js` : conversion de puissance

## Rôle

- Chaque fichier exporte une fonction principale (ex : `convertDistance`, `convertWeight`, etc.)
- Ces fonctions sont utilisées par l’API principale (`convert`) pour effectuer les conversions selon la catégorie.
- Elles gèrent les cas particuliers (ex : température, devises, conversions non linéaires).

## Exemple

```js
import { convertDistance } from './distance.js';
const meters = convertDistance(5, 'km', 'm'); // 5000
```
