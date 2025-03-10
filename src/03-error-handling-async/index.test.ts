// Uncomment the code below and write your tests
import {
  throwError,
  throwCustomError,
  resolveValue,
  MyAwesomeError,
  rejectCustomError,
} from './index';

describe('resolveValue', () => {
  test('should resolve provided value', async () => {
    const res = await resolveValue(100);
    expect(res).toBe(100);
  });
});

describe('throwError', () => {
  test('should throw error with provided message', () => {
    expect(() => throwError('Some error message')).toThrowError(
      'Some error message',
    );
  });

  test('should throw error with default message if message is not provided', () => {
    expect(() => throwError()).toThrowError('Oops!');
  });
});

describe('throwCustomError', () => {
  test('should throw custom error', () => {
    expect(() => throwCustomError()).toThrowError(MyAwesomeError);
  });
});

describe('rejectCustomError', () => {
  test('should reject custom error', async () => {
    expect(rejectCustomError).rejects.toThrowError(MyAwesomeError);
  });
});
