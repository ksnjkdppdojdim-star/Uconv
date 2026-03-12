from ..units import get_conversion_factor


def convert_distance(value: float, from_unit: str, to_unit: str) -> float:
    """Convert distance: to base (m) then to target.

    Args:
        value: Value in from_unit
        from_unit, to_unit: Units

    Raises:
        ValueError if invalid units
    """
    from_factor = get_conversion_factor(from_unit)
    to_factor = get_conversion_factor(to_unit)
    
    if from_factor is None or to_factor is None:
        raise ValueError('Invalid distance unit')
    
    base_value = value * from_factor
    return base_value / to_factor

