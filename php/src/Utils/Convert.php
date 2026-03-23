<?php

namespace Uconv\Utils;

/**
 * Utility for factor-based conversion (like Node.js factorConvert)
 */
class Convert
{
    /**
     * Convert value using from/to factors
     * @param float $value
     * @param float $fromFactor
     * @param float $toFactor
     * @return float
     */
    public static function factorConvert(float $value, float $fromFactor, float $toFactor): float
    {
        return ($value * $fromFactor) / $toFactor;
    }
}
