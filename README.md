# UConv - Universal Unit Converter

A lightweight, multi-language unit converter library supporting distance, weight, time, and currency conversions.

## Supported Languages

- **Node.js** ✅ Fully implemented
- **Python** ✅ Fully implemented (tests pass)
- **PHP** ✅ Fully implemented (tests pass)


## API

All implementations follow the same API pattern:

### Node.js
```javascript
import { convert } from './node/src/index.js';

convert("10km", "m");      // 10000
convert("5lbs", "kg");     // 2.26796
convert("1hr", "min");     // 60
convert("100USD", "EUR");  // Implementation varies
```

### Python
```python
from uconv import convert

convert("10km", "m")       # 10000
convert("5lbs", "kg")      # 2.26796
convert("1hr", "min")      # 60
convert("100USD", "EUR")   # Implementation varies
```

### PHP
```php
use Uconv\Uconv;

Uconv::convert("10km", "m");      // 10000
Uconv::convert("5lbs", "kg");     // 2.26796
Uconv::convert("1hr", "min");     // 60
Uconv::convert("100USD", "EUR");  // Implementation varies
```

## Base Units

- **Distance**: meter (m)
- **Weight**: gram (g)
- **Time**: second (s)
- **Currency**: USD

## Installation

### Node.js
```bash
cd node && npm install
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