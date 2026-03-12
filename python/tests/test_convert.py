import pytest
from uconv import convert, UnknownUnitError, InvalidInputError, IncompatibleUnitsError


class TestUnitConverter:
    def test_distance_km_to_m(self):
        assert convert('10km', 'm') == 10000
    
    def test_distance_ft_to_m(self):
        assert abs(convert('10ft', 'm') - 3.048) < 0.001
    
    def test_distance_in_to_cm(self):
        assert abs(convert('12in', 'cm') - 30.48) < 0.001
    
    def test_distance_decimal(self):
        assert convert('5.5km', 'm') == 5500
    
    def test_weight_lbs_to_kg(self):
        assert abs(convert('5lbs', 'kg') - 2.26796) < 0.00001
    
    def test_weight_oz_to_g(self):
        assert abs(convert('16oz', 'g') - 453.592) < 0.001
    
    def test_weight_kg_to_lb(self):
        assert abs(convert('1kg', 'lb') - 2.20462) < 0.00001
    
    def test_time_hr_to_min(self):
        assert convert('1hr', 'min') == 60
    
    def test_time_day_to_hr(self):
        assert convert('1day', 'hr') == 24
    
    def test_time_min_to_s(self):
        assert convert('5min', 's') == 300
    
    def test_currency_usd_to_eur(self):
        # Approx due to hardcoded
        result = convert('100usd', 'eur')
        assert abs(result - 85) < 1  # tolerance
    
    def test_currency_eur_to_gbp(self):
        result = convert('100eur', 'gbp')
        assert isinstance(result, float)
    
    def test_unknown_unit_error(self):
        with pytest.raises(UnknownUnitError):
            convert('10xyz', 'm')
        with pytest.raises(UnknownUnitError):
            convert('10m', 'xyz')
    
    def test_invalid_input_error(self):
        with pytest.raises(InvalidInputError):
            convert('invalid', 'm')
        with pytest.raises(InvalidInputError):
            convert('', 'm')
        with pytest.raises(InvalidInputError):
            convert('10', 'm')
    
    def test_incompatible_units_error(self):
        with pytest.raises(IncompatibleUnitsError):
            convert('10km', 'kg')
        with pytest.raises(IncompatibleUnitsError):
            convert('5lbs', 'hr')
        with pytest.raises(IncompatibleUnitsError):
            convert('100usd', 'm')
    
    def test_parse_variants(self):
        assert convert('10 km', 'm') == 10000
        assert convert('10.5km', 'm') == 10500
        assert convert(' 10km ', 'm') == 10000
        assert convert('-10km', 'm') == -10000


if __name__ == '__main__':
    pytest.main([__file__])

