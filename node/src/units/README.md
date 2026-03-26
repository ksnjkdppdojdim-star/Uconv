# Dossier units

Ce dossier contient les définitions des unités de mesure et leurs facteurs de conversion pour chaque catégorie prise en charge par UConv.

## Structure

Chaque fichier correspond à une catégorie :
- `distance.js` : unités de distance (mètre, kilomètre, pied, etc.)
- `weight.js` : unités de masse/poids (gramme, kilogramme, livre, etc.)
- `time.js` : unités de temps (seconde, minute, heure, etc.)
- `currency.js` : devises (USD, EUR, etc.)
- `temperature.js` : unités de température (Celsius, Fahrenheit, Kelvin)
- `speed.js` : unités de vitesse (m/s, km/h, mph, etc.)
- `area.js` : unités de surface (m², km², acre, etc.)
- `volume.js` : unités de volume (m³, litre, gallon, etc.)
- `energy.js` : unités d’énergie (joule, calorie, kWh, etc.)
- `pressure.js` : unités de pression (pascal, bar, psi, etc.)
- `power.js` : unités de puissance (watt, kilowatt, cheval-vapeur, etc.)

## Format

Chaque fichier exporte un objet JS dont les clés sont les noms/abréviations d’unités (en minuscules), et les valeurs sont les facteurs de conversion vers l’unité de base de la catégorie.

Exemple (extrait de `distance.js`) :
```js
export default {
  'm': 1,
  'km': 1000,
  'cm': 0.01,
  'ft': 0.3048,
  // ...
};
```

## Ajout d’une unité

- Ajouter la clé (nom ou abréviation) et le facteur dans le fichier de la catégorie concernée.
- Pour les unités personnalisées, utiliser la fonction `registerUnit` de l’API.

## SI Prefixes

Les préfixes SI (kilo, méga, milli, etc.) sont générés dynamiquement pour les unités de base compatibles (distance, poids, etc.).

## Utilisation

Les fichiers sont importés dans `src/units.js` pour constituer le registre global des unités (`UNITS`).

## Exemple d’accès

```js
import { UNITS } from '../units.js';
const meterToKm = UNITS.distance.km; // 1000
```
