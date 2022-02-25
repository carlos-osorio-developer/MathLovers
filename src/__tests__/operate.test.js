import operate from '../logic/operate';

it('returns a string', () => {
  const result = operate(1, 2, '+');
  expect(typeof result).toBe('string');
});

it('should add two numbers', () => {
  const result = operate(1, 2, '+');
  expect(result).toBe('3');
});

it('should subtract two numbers', () => {
  const result = operate(1, 2, '-');
  expect(result).toBe('-1');
});

it('should multiply two numbers', () => {
  const result = operate(-3, 2, '*');
  expect(result).toBe('-6');
});

it('should divide two numbers', () => {
  const result = operate(1, 2, '/');
  expect(result).toBe('0.5');
});

it('should return the modulus of two numbers', () => {
  const result = operate(1, 2, '%');
  expect(result).toBe('1');
});
