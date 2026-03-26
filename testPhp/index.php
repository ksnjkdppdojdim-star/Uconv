<?php
require __DIR__ . '/vendor/autoload.php';

use Uconv\Uconv;

echo Uconv::convert("10km", "m") . "\n";      // 10000
echo Uconv::convert("5lbs", "kg") . "\n";     // 2.26796
echo Uconv::convert("1hr", "min") . "\n";     // 60
echo Uconv::convert("100USD", "EUR") . "\n";  // ~85
