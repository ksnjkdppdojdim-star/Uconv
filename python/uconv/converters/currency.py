from ..units import get_conversion_factor


def convert_currency(value: float, from_unit: str, to_unit: str) -> float:
    """Convert currency: to base (USD) then to target.
    Note: Hardcoded rates; use API in prod.
    """
    from_factor = get_conversion_factor(from_unit)
    to_factor = get_conversion_factor(to_unit)
    
    if from_factor is None or to_factor is None:
        raise ValueError('Invalid currency')
    
    base_value = value * from_factor
    return base_value / to_factor

