<?php

namespace Uconv\Converters;

use Uconv\Units;

/**
 * Time converter (base: second)
 */
class Time
{
    public static function convert(float $value, string $fromUnit, string $toUnit): float
    {
        $fromFactor = Units::getConversionFactor($fromUnit);
        $toFactor = Units::getConversionFactor($toUnit);

        if ($fromFactor === null || $toFactor === null) {
            throw new \InvalidArgumentException('Invalid time unit');
        }

        $baseValue = $value * $fromFactor;
        return $baseValue / $toFactor;
    }
}

