# UConv PHP

Lightweight PHP unit converter (PSR-4).

## Installation

```bash
cd php
composer install
```

## Usage

```php
<?php
require 'vendor/autoload.php';

use Uconv\Uconv;

echo Uconv::convert("10km", "m");      // 10000
echo Uconv::convert("5lbs", "kg");     // 2.26796
echo Uconv::convert("1hr", "min");     // 60
echo Uconv::convert("100USD", "EUR");  // ~85
```

## Testing

```bash
./vendor/bin/phpunit tests/
```

## Features

- PSR-4 namespaces
- Static API `Uconv::convert()`
- Custom exceptions
- Exact Node.js/Python parity

See root README.

