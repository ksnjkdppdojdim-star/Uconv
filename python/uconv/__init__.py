from .parser import parse_input
from .units import get_unit_category, is_valid_unit
from .converters.distance import convert_distance
from .converters.weight import convert_weight
from .converters.time import convert_time
from .converters.currency import convert_currency


class UnknownUnitError(Exception):
    """Raised when unit is unknown."""
    def __init__(self, unit):
        self.message = f'Unknown unit: {unit}'
        super().__init__(self.message)


class InvalidInputError(Exception):
    """Raised when input format is invalid."""
    def __init__(self, input_str):
        self.message = f'Invalid input format: {input_str}'
        super().__init__(self.message)


class IncompatibleUnitsError(Exception):
    """Raised when units are incompatible types."""
    def __init__(self, from_unit, to_unit):
        self.message = f'Cannot convert from {from_unit} to {to_unit}: incompatible unit types'
        super().__init__(self.message)


_converters = {
    'distance': convert_distance,
    'weight': convert_weight,
    'time': convert_time,
    'currency': convert_currency
}


def convert(from_str: str, to_unit: str) -> float:
    """Convert between units.
    
    Args:
        from_str: Source value and unit (e.g., '10km')
        to_unit: Target unit (e.g., 'm')
    
    Returns:
        Converted value as float
    
    Raises:
        UnknownUnitError, InvalidInputError, IncompatibleUnitsError
    """
    try:
        # Parse input
        parsed = parse_input(from_str)
        if parsed is None:
            raise InvalidInputError(from_str)
        
        value, from_unit = parsed
        
        # Validate units
        if not is_valid_unit(from_unit):
            raise UnknownUnitError(from_unit)
        
        if not is_valid_unit(to_unit):
            raise UnknownUnitError(to_unit)
        
        # Get categories
        from_category = get_unit_category(from_unit)
        to_category = get_unit_category(to_unit)
        
        # Check compatibility
        if from_category != to_category:
            raise IncompatibleUnitsError(from_unit, to_unit)
        
        # Get converter
        converter = _converters.get(from_category)
        if converter is None:
            raise ValueError(f'No converter for category: {from_category}')
        
        # Convert
        return converter(value, from_unit, to_unit)
    
    except (UnknownUnitError, InvalidInputError, IncompatibleUnitsError) as e:
        raise e
    except Exception as e:
        raise ValueError(f'Conversion failed: {str(e)}') from e

