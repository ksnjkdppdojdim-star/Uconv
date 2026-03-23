<?php

namespace Uconv\Converters;

use Uconv\Units;
use Uconv\Utils\Convert;

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

        return Convert::factorConvert($value, $fromFactor, $toFactor);
    }
}

