# @mahounou/uconv

Lightweight unit converter for Node.js with zero runtime dependencies.

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

// Currency — static rates
convert("100USD", "EUR");   // approximate

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

## Error Handling
```javascript
import { convert, UnknownUnitError, InvalidInputError, IncompatibleUnitsError } from '@mahounou/uconv';

try {
  convert("10km", "kg");
} catch (e) {
  if (e instanceof IncompatibleUnitsError) { ... }
  if (e instanceof UnknownUnitError)       { ... }
  if (e instanceof InvalidInputError)      { ... }
}
```

## Base Units

| Category | Base Unit |
|---|---|
| Distance | meter (m) |
| Weight | gram (g) |
| Time | second (s) |
| Currency | USD |

## Testing
```bash
npm test
```