<?php

namespace Uconv;

/**
 * Units definitions and validation
 */
class Units
{
    private const BASE_UNITS = [
        'distance' => 'm',
        'weight' => 'g',
        'time' => 's',
        'currency' => 'usd'
    ];

    private const UNITS = [
        'distance' => [
            'm' => 1, 'meter' => 1, 'metre' => 1,
            'km' => 1000, 'kilometer' => 1000, 'kilometre' => 1000,
            'cm' => 0.01, 'centimeter' => 0.01, 'centimetre' => 0.01,
            'mm' => 0.001, 'millimeter' => 0.001, 'millimetre' => 0.001,
            'ft' => 0.3048, 'foot' => 0.3048, 'feet' => 0.3048,
            'in' => 0.0254, 'inch' => 0.0254,
            'yd' => 0.9144, 'yard' => 0.9144,
            'mi' => 1609.344, 'mile' => 1609.344
        ],
        'weight' => [
            'g' => 1, 'gram' => 1,
            'kg' => 1000, 'kilogram' => 1000,
            'mg' => 0.001, 'milligram' => 0.001,
            't' => 1000000, 'ton' => 1000000, 'tonne' => 1000000,
            'lb' => 453.592, 'lbs' => 453.592, 'pound' => 453.592,
            'oz' => 28.3495, 'ounce' => 28.3495,
            'st' => 6350.29, 'stone' => 6350.29
        ],
        'time' => [
            's' => 1, 'sec' => 1, 'second' => 1,
            'min' => 60, 'minute' => 60,
            'hr' => 3600, 'hour' => 3600,
            'day' => 86400,
            'week' => 604800,
            'month' => 2629746,  # average
            'year' => 31556952   # average
        ],
        'currency' => [
            'usd' => 1,
            'eur' => 0.85,
            'gbp' => 0.75,
            'jpy' => 110,
            'cad' => 1.25,
            'aud' => 1.35,
            'chf' => 0.92,
            'cny' => 6.45
        ]
    ];

    public static function getUnitCategory(string $unit): ?string
    {
        $normalized = strtolower($unit);
        foreach (self::UNITS as $category => $units) {
            if (array_key_exists($normalized, $units)) {
                return $category;
            }
        }
        return null;
    }

    public static function isValidUnit(string $unit): bool
    {
        return self::getUnitCategory($unit) !== null;
    }

    public static function getConversionFactor(string $unit): ?float
    {
        $category = self::getUnitCategory($unit);
        if ($category === null) {
            return null;
        }
        $normalized = strtolower($unit);
        return self::UNITS[$category][$normalized] ?? null;
    }
}

