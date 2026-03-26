import { describe, it, expect } from 'vitest';
import { convert } from '../src/index.js';

describe('Temperature conversions', () => {
  it('should convert Celsius to Fahrenheit', () => {
    expect(convert('0C', 'F')).toBeCloseTo(32);
    expect(convert('100C', 'F')).toBeCloseTo(212);
  });
  it('should convert Fahrenheit to Celsius', () => {
    expect(convert('32F', 'C')).toBeCloseTo(0);
    expect(convert('212F', 'C')).toBeCloseTo(100);
  });
  it('should convert Celsius to Kelvin', () => {
    expect(convert('0C', 'K')).toBeCloseTo(273.15);
  });
  it('should convert Kelvin to Celsius', () => {
    expect(convert('273.15K', 'C')).toBeCloseTo(0);
  });
  it('should convert Fahrenheit to Kelvin', () => {
    expect(convert('32F', 'K')).toBeCloseTo(273.15);
  });
  it('should convert Kelvin to Fahrenheit', () => {
    expect(convert('273.15K', 'F')).toBeCloseTo(32);
  });
});

describe('Speed conversions', () => {
  it('should convert km/h to m/s', () => {
    expect(convert('36km/h', 'm/s')).toBeCloseTo(10, 2);
  });
  it('should convert m/s to km/h', () => {
    expect(convert('10m/s', 'km/h')).toBeCloseTo(36, 2);
  });
  it('should convert mph to m/s', () => {
    expect(convert('22.3694mph', 'm/s')).toBeCloseTo(10, 2);
  });
  it('should convert knots to m/s', () => {
    expect(convert('19.4384kn', 'm/s')).toBeCloseTo(10, 2);
  });
});
