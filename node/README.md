## Custom Units

You can add your own units dynamically:
```javascript
import { convert, registerUnit } from '@mahounou/uconv';

// Register a custom distance unit: 1 foo = 123 meters
registerUnit('foo', { factor: 123, category: 'distance' });
convert('10foo', 'm'); // 1230
convert('246m', 'foo'); // 2
```

# @mahounou/uconv

![npm version](https://img.shields.io/npm/v/@mahounou/uconv)
![build](https://img.shields.io/github/actions/workflow/status/mahounou/uconv/nodejs.yml?branch=main)
![tests](https://img.shields.io/badge/tests-passing-brightgreen)
![license](https://img.shields.io/github/license/mahounou/uconv)

Universal unit converter for Node.js — zero runtime dependencies, multi-language API parity (Node.js, PHP, Python).

## Installation
```bash
npm install @mahounou/uconv
```

## Usage
```javascript
import { convert, convertCurrencyLive } from '@mahounou/uconv';

// Distance
convert("10km", "m");       // 10000
convert("5ft", "cm");       // 152.4

// Weight
convert("5lbs", "kg");      // 2.26796
convert("1kg", "g");        // 1000

// Time
convert("1hr", "min");      // 60
convert("30min", "s");      // 1800

// Area
convert("10m2", "ft2");      // 107.639
convert("1acre", "m2");      // 4046.86

// Volume
convert("5l", "m3");         // 0.005
convert("1gal", "l");        // 3.78541

// Energy
convert("1kwh", "j");        // 3600000
convert("100cal", "j");      // 418.4

// Pressure
convert("1bar", "pa");       // 100000
convert("1atm", "kpa");      // 101.325

// Power
convert("1kw", "w");         // 1000
convert("1hp", "w");         // 745.7

// Temperature
convert("0C", "F");          // 32
convert("32F", "C");         // 0

// Speed
convert("36km/h", "m/s");    // 10
convert("10m/s", "km/h");    // 36

// Currency — static rates
convert("100USD", "EUR");    // approximate

// Currency — live rates (async)
await convertCurrencyLive(100, "USD", "EUR"); // real-time rate
```


## Supported Units

### Distance
- Metric: `m`, `km`, `cm`, `mm`
- Imperial: `ft`, `in`, `yd`, `mi`

### Weight
- Metric: `g`, `kg`, `mg`, `t`
- Imperial: `lb`, `lbs`, `oz`, `st`

### Time
- `s`, `min`, `hr`, `day`, `week`, `month`, `year`

### Area
- Metric: `m2`, `km2`, `cm2`, `mm2`, `hectare`
- Imperial: `ft2`, `in2`, `yd2`, `acre`

### Volume
- Metric: `m3`, `l`, `ml`, `cm3`
- Imperial: `ft3`, `in3`, `gal`, `qt`, `pt`

### Energy
- `j`, `kj`, `mj`, `wh`, `kwh`, `cal`, `kcal`, `btu`

### Pressure
- `pa`, `kpa`, `mpa`, `bar`, `atm`, `psi`, `mmhg`, `torr`

### Power
- `w`, `kw`, `mw`, `hp`

### Temperature
- `C`, `F`, `K`

### Speed
- `m/s`, `km/h`, `mph`, `kn`

### Currency
- `USD`, `EUR`, `GBP`, `JPY`, `CAD`, `AUD`, `CHF`, `CNY`
- Static rates via `convert()` — use `convertCurrencyLive()` for real-time rates powered by [frankfurter.app](https://frankfurter.app)

## Input Format

Flexible input parsing:
```javascript
convert("10km", "m")     // no space
convert("10 km", "m")    // with space
convert("10KM", "m")     // case insensitive
convert("-10km", "m")    // negative values
convert("1e3km", "m")    // scientific notation
```


## Error Handling & Debugging

UConv lève toujours une erreur explicite et typée :

- `UnknownUnitError` : unité inconnue (ex : `convert("10xyz", "m")`)
- `InvalidInputError` : entrée mal formée (ex : `convert("10", "m")`, `convert("", "m")`)
- `IncompatibleUnitsError` : catégories incompatibles (ex : `convert("10km", "kg")`)

**Exemple de gestion robuste :**
```javascript
import { convert, UnknownUnitError, InvalidInputError, IncompatibleUnitsError } from '@mahounou/uconv';

try {
  convert("10km", "kg");
} catch (e) {
  if (e instanceof IncompatibleUnitsError) {
    console.error("Catégories incompatibles :", e.message);
  } else if (e instanceof UnknownUnitError) {
    console.error("Unité inconnue :", e.message);
  } else if (e instanceof InvalidInputError) {
    console.error("Entrée invalide :", e.message);
  } else {
    // Pour tout autre bug inattendu
    console.error("Erreur inattendue :", e);
  }
}
```

**Cas limites testés**
```javascript
convert("10", "m");        // InvalidInputError (pas d’unité)
convert("10xyz", "m");     // UnknownUnitError (unité inconnue)
convert("10km", "kg");     // IncompatibleUnitsError
convert("", "m");          // InvalidInputError (entrée vide)
convert(null, "m");        // InvalidInputError
convert("10km", "");       // InvalidInputError
convert("1e1000km", "m"); // InvalidInputError (valeur trop grande)
```

**Conseil debug**
- Utilisez toujours `instanceof` pour filtrer les erreurs UConv.
- Les messages d’erreur sont explicites pour faciliter le diagnostic.


## Base Units

| Category     | Base Unit         |
|--------------|------------------|
| Distance     | meter (m)        |
| Weight       | gram (g)         |
| Time         | second (s)       |
| Area         | square meter (m2)|
| Volume       | cubic meter (m3) |
| Energy       | joule (J)        |
| Pressure     | pascal (Pa)      |
| Power        | watt (W)         |
| Temperature  | celsius (C)      |
| Speed        | meter/sec (m/s)  |
| Currency     | USD              |
## Multi-language Compatibility

| Feature      | Node.js | PHP | Python |
|--------------|:-------:|:---:|:------:|
| Distance     |   ✔️    | ✔️  |   ✔️   |
| Weight       |   ✔️    | ✔️  |   ✔️   |
| Time         |   ✔️    | ✔️  |   ✔️   |
| Currency     |   ✔️    | ✔️  |   ✔️   |
| Temperature  |   ✔️    |     |        |
| Speed        |   ✔️    |     |        |
| Area         |   ✔️    |     |        |
| Volume       |   ✔️    |     |        |
| Energy       |   ✔️    |     |        |
| Pressure     |   ✔️    |     |        |
| Power        |   ✔️    |     |        |

> API identique dans chaque langage : `convert("10km", "m")`

---
See also: [PHP version](../php/README.md) | [Python version](../python/README.md)

## Testing
```bash
npm test
```