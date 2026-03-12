<?php

namespace Uconv\Converters;

use Uconv\Units;

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

        $baseValue = $value * $fromFactor;
        return $baseValue / $toFactor;
    }
}

