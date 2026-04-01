# UConv - Universal Unit Converter

[![npm](https://img.shields.io/npm/v/@mahounou/uconv)](https://www.npmjs.com/package/@mahounou/uconv)
[![downloads](https://img.shields.io/npm/dm/@mahounou/uconv)](https://www.npmjs.com/package/@mahounou/uconv)
[![license](https://img.shields.io/github/license/ksnjkdppdojdim-star/Uconv)](https://github.com/ksnjkdppdojdim-star/Uconv/blob/main/LICENSE)
[![tests](https://img.shields.io/github/actions/workflow/status/ksnjkdppdojdim-star/Uconv/ci.yml?branch=main&label=tests)](https://github.com/ksnjkdppdojdim-star/Uconv/actions/workflows/ci.yml)


A lightweight, multi-language unit converter library supporting distance, weight, time, and currency conversions.

## Supported Languages

- **Node.js** ✅ [`@mahounou/uconv` on npm](https://www.npmjs.com/package/@mahounou/uconv)
- **Python** 🚧 Coming soon
- **PHP** 🚧 Coming soon

## API

All implementations follow the same API pattern:

### Node.js
```javascript
import { convert, convertCurrencyLive } from '@mahounou/uconv';

convert("10km", "m");      // 10000
convert("5lbs", "kg");     // 2.26796
convert("1hr", "min");     // 60
convert("100USD", "EUR");  // static rate

await convertCurrencyLive(100, "USD", "EUR"); // real-time rate
```

### Python
```python
from uconv import convert

convert("10km", "m")       # 10000
convert("5lbs", "kg")      # 2.26796
convert("1hr", "min")      # 60
convert("100USD", "EUR")   # static rate
```

### PHP
```php
use Uconv\Uconv;

Uconv::convert("10km", "m");      // 10000
Uconv::convert("5lbs", "kg");     // 2.26796
Uconv::convert("1hr", "min");     // 60
Uconv::convert("100USD", "EUR");  // static rate
```

## Input Format

Flexible input parsing across all languages:
```
"10km"    → no space
"10 km"   → with space
"10KM"    → case insensitive
"-10km"   → negative values
"1e3km"   → scientific notation
```

## Base Units

| Category | Base Unit |
|---|---|
| Distance | meter (m) |
| Weight | gram (g) |
| Time | second (s) |
| Currency | USD |

## Installation

### Node.js
```bash
npm install @mahounou/uconv
```

### Python
```bash
cd python && pip install -e .
```

### PHP
```bash
cd php && composer install
```

## Testing

### Node.js
```bash
cd node && npm test
```

### Python
```bash
cd python && pytest
```

### PHP
```bash
cd php && composer test
```