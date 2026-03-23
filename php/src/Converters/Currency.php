<?php

namespace Uconv\Converters;

use Uconv\Units;
use Uconv\Utils\Convert;

/**
 * Currency converter (base: USD)
 * Note: Hardcoded rates - use API in production
 */
class Currency
{
    public static function convert(float $value, string $fromUnit, string $toUnit): float
    {
        $fromFactor = Units::getConversionFactor($fromUnit);
        $toFactor = Units::getConversionFactor($toUnit);

        if ($fromFactor === null || $toFactor === null) {
            throw new \InvalidArgumentException('Invalid currency');
        }

        // Conversion via USD : value → USD → target
        $inUsd = $value * $fromFactor;
        return $inUsd * $toFactor;
    }
}

