<?php

namespace Uconv\Converters;

use Uconv\Units;

/**
 * Weight converter (base: gram)
 */
class Weight
{
    public static function convert(float $value, string $fromUnit, string $toUnit): float
    {
        $fromFactor = Units::getConversionFactor($fromUnit);
        $toFactor = Units::getConversionFactor($toUnit);

        if ($fromFactor === null || $toFactor === null) {
            throw new \InvalidArgumentException('Invalid weight unit');
        }

        $baseValue = $value * $fromFactor;
        return $baseValue / $toFactor;
    }
}

