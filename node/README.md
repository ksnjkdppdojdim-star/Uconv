# UConv Node.js

Lightweight unit converter for Node.js with zero runtime dependencies.

## Installation

```bash
npm install
```

## Usage

```javascript
import { convert } from './src/index.js';

// Distance conversions
convert("10km", "m");      // 10000
convert("5ft", "cm");      // 152.4

// Weight conversions
convert("5lbs", "kg");     // 2.26796
convert("1kg", "g");       // 1000

// Time conversions
convert("1hr", "min");     // 60
convert("30min", "s");     // 1800

// Currency conversions (example rates)
convert("100USD", "EUR");  // ~85
```

## Supported Units

### Distance
- Metric: m, km, cm, mm
- Imperial: ft, in, yd, mi

### Weight
- Metric: g, kg, mg, t
- Imperial: lb, oz, st

### Time
- s, min, hr, day, week, month, year

### Currency
- USD, EUR, GBP, JPY, CAD, AUD, CHF, CNY

## Error Handling

The library throws specific errors for different failure cases:

- `UnknownUnitError`: When a unit is not recognized
- `InvalidInputError`: When input format is invalid
- `IncompatibleUnitsError`: When trying to convert between different unit types

## Testing

```bash
npm test
```

## Base Units

- Distance: meter (m)
- Weight: gram (g)  
- Time: second (s)
- Currency: USD