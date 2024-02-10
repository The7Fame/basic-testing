// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

describe('simpleCalculator tests', () => {
  test('should add two numbers', () => {
    const res = simpleCalculator({ a: 1, b: 2, action: Action.Add });
    expect(res).toBe(3);
  });

  test('should subtract two numbers', () => {
    const res = simpleCalculator({ a: 1, b: 2, action: Action.Subtract });
    expect(res).toBe(-1);
  });

  test('should multiply two numbers', () => {
    const res = simpleCalculator({ a: 1, b: 2, action: Action.Multiply });
    expect(res).toBe(2);
  });

  test('should divide two numbers', () => {
    const res = simpleCalculator({ a: 4, b: 2, action: Action.Divide });
    expect(res).toBe(2);
  });

  test('should exponentiate two numbers', () => {
    const res = simpleCalculator({ a: 2, b: 2, action: Action.Add });
    expect(res).toBe(4);
  });

  test('should return null for invalid action', () => {
    const res = simpleCalculator({ a: 1, b: 2, action: 'invalid' });
    expect(res).toBeNull();
  });

  test('should return null for invalid arguments', () => {
    const res = simpleCalculator({ a: '1', b: 2, action: Action.Add });
    expect(res).toBeNull();
  });
});
