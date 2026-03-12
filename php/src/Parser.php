<?php

namespace Uconv;

use Uconv\Exceptions\InvalidInputException;

/**
 * Parser for input strings containing value and unit
 */
class Parser
{
    /**
     * Parse input string like "10km", "5.5 lbs", "100 USD"
     * 
     * @param string $input
     * @return array{value: float, unit: string}|null
     */
    public static function parseInput(string $input): ?array
    {
        $input = trim($input);
        if (empty($input)) {
            return null;
        }
        
        // Regex: optional '-', digits + optional '.digits', spaces*, letters
        if (!preg_match('/^(-?\d+(?:\.\d+)?)\s*([a-zA-Z]+)$/u', $input, $matches)) {
            return null;
        }
        
        $valueStr = $matches[1];
        $unit = strtolower(trim($matches[2]));
        
        $value = (float) $valueStr;
        if (is_nan($value)) {
            return null;
        }
        
        return ['value' => $value, 'unit' => $unit];
    }
}

