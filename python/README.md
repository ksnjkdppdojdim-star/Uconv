# UConv Python

Lightweight zero-dep unit converter.

## Installation

```bash
cd python
python -m venv .venv
.venv/Scripts/activate  # Windows
# source .venv/bin/activate  # Unix

pip install -e .[dev]
```

## Usage

```python
from uconv import convert

convert("10km", "m")     # 10000
convert("5lbs", "kg")    # ~2.26796
convert("1hr", "min")    # 60
convert("100USD", "EUR") # ~85 (hardcoded rates)
```

## Testing

```bash
pytest tests/
# or
python tests/test_convert.py
```

## Features

- Parse flexible: "10 km", "5.5lbs", negatives
- Categories: distance/weight/time/currency
- Custom exceptions
- Exact Node.js API parity

See root README for full docs.

