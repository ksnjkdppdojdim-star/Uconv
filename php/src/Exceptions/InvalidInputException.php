<?php

namespace Uconv\Exceptions;

/**
 * Exception thrown when input format is invalid
 */
class InvalidInputException extends \Exception
{
    public function __construct(string $input, int $code = 0, \Throwable $previous = null)
    {
        parent::__construct("Invalid input format: {$input}", $code, $previous);
    }
}