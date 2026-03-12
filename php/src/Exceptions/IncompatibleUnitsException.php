<?php

namespace Uconv\Exceptions;

/**
 * Exception thrown when trying to convert between incompatible unit types
 */
class IncompatibleUnitsException extends \Exception
{
    public function __construct(string $fromUnit, string $toUnit, int $code = 0, \Throwable $previous = null)
    {
        parent::__construct("Cannot convert from {$fromUnit} to {$toUnit}: incompatible unit types", $code, $previous);
    }
}