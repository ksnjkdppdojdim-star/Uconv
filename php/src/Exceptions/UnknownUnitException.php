<?php

namespace Uconv\Exceptions;

/**
 * Exception thrown when a unit is not recognized
 */
class UnknownUnitException extends \Exception
{
    public function __construct(string $unit, int $code = 0, \Throwable $previous = null)
    {
        parent::__construct("Unknown unit: {$unit}", $code, $previous);
    }
}