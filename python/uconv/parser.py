import re


def parse_input(input_str: str):
    """Parse input string to value, unit.
    
    Examples:
        '10km' → (10.0, 'km')
        '5.5 lbs' → (5.5, 'lbs')
        '100 USD' → (100.0, 'usd')
        '-3.14m' → (-3.14, 'm')
    
    Returns None if invalid.
    """
    if not isinstance(input_str, str):
        return None
    
    clean = input_str.strip()
    if not clean:
        return None
    
    # Regex: optional '-', digits + optional '.digits', spaces*, alpha+
    match = re.match(r'^(-?d+(?:.d+)?)s*([a-zA-Z]+)$', clean)
    
    if not match:
        return None
    
    value_str, unit = match.groups()
    try:
        value = float(value_str)
    except ValueError:
        return None
    
    return value, unit.lower()

