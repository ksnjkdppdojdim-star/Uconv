# Dossier i18n (internationalisation)

Ce dossier contient toutes les ressources de traduction et de localisation pour l’API UConv Node.js.

## Structure

- `fr_FR/LC_MESSAGES/` : ressources pour le français (France)
  - `units.fr.js` : noms localisés des unités (toutes catégories)
  - `errors.fr.js` : messages d’erreur localisés
  - (optionnel) fichiers .po/.mo pour compatibilité gettext
- `en_US/LC_MESSAGES/` : ressources pour l’anglais (États-Unis)
  - `units.en.js` : noms localisés des unités (toutes catégories)
  - `errors.en.js` : messages d’erreur localisés
- (ajouter d’autres langues/régions au besoin, ex : `es_ES`, `de_DE`...)

## Utilisation dans l’API

- Les fichiers sont importés dynamiquement selon la langue passée à l’API (`fr`, `fr_FR`, `en`, `en_US`, etc.).
- Les noms d’unités sont utilisés via `getUnitDisplayName(unit, lang)`.
- Les messages d’erreur sont utilisés via `getErrorMessages(lang)`.
- Le formatage des nombres utilise la locale (`Intl.NumberFormat`).

## Extension

- Pour ajouter une langue, créer un dossier `xx_XX/LC_MESSAGES/` et y placer les fichiers `units.xx.js` et `errors.xx.js`.
- Pour la compatibilité gettext, placer les fichiers `.po`/`.mo` dans le même dossier.

## Exemple

```js
import { getUnitDisplayName } from '../units.js';
getUnitDisplayName('km', 'fr_FR'); // "kilomètre"

import { getErrorMessages } from '../index.js';
const errors = getErrorMessages('en_US');
throw new Error(errors.unknownUnit('foo'));
```
