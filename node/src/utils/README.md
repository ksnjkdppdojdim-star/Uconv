# Dossier utils

Ce dossier contient les fonctions utilitaires partagées par les modules de conversion, parsing et i18n.

## Structure

- `convert.js` : utilitaires pour la conversion factorielle, gestion des unités composées, etc.
- (ajouter d’autres utilitaires au besoin)

## Rôle

- Fournir des fonctions réutilisables pour le parsing, la validation, la manipulation des unités et des valeurs.
- Centraliser la logique commune pour éviter la duplication de code.

## Exemple

```js
import { parseComposedUnit } from './convert.js';
const parsed = parseComposedUnit('kg*m2/s2');
// { numerator: [['kg',1],['m',2]], denominator: [['s',2]] }
```
