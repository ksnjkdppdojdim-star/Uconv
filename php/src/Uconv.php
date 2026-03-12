<?php

namespace Uconv;

use Uconv\Exceptions\UnknownUnitException;
use Uconv\Exceptions\InvalidInputException;
use Uconv\Exceptions\IncompatibleUnitsException;

/**
 * Main UConv class - API entry point
 */
class Uconv
{
    private const CONVERTERS = [
        'distance' => Converters\Distance::class,
        'weight' => Converters\Weight::class,
        'time' => Converters\Time::class,
        'currency' => Converters\Currency::class
    ];

    /**
     * Convert units (main API)
     */
    public static function convert(string $from, string $to): float
    {
        try {
            $parsed = Parser::parseInput($from);
            if ($parsed === null) {
                throw new InvalidInputException($from);
            }

            ['value' => $value, 'unit' => $fromUnit] = $parsed;

            if (!Units::isValidUnit($fromUnit)) {
                throw new UnknownUnitException($fromUnit);
            }

            if (!Units::isValidUnit($to)) {
                throw new UnknownUnitException($to);
            }

            $fromCategory = Units::getUnitCategory($fromUnit);
            $toCategory = Units::getUnitCategory($to);

            if ($fromCategory !== $toCategory) {
                throw new IncompatibleUnitsException($fromUnit, $to);
            }

            $converterClass = self::CONVERTERS[$fromCategory];
            return $converterClass::convert($value, $fromUnit, $to);

        } catch (UnknownUnitException | InvalidInputException | IncompatibleUnitsException $e) {
            throw $e;
        } catch (\Throwable $e) {
            throw new \RuntimeException('Conversion failed: ' . $e->getMessage(), 0, $e);
        }
    }
}

