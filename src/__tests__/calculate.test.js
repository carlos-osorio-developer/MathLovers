import calculate from '../logic/calculate';

it('clear display if buttonName=AC', () => {
  const obj = {
    total: 473,
    next: null,
    operation: null,
  };
  const result = calculate(obj, 'AC');
  expect(result).toEqual({ total: null, next: null, operation: null });
});

it('add number if operation is already there', () => {
  const obj = {
    total: null,
    next: '43+',
    operation: '+',
  };
  const result = calculate(obj, '9');
  expect(result).toEqual({ total: null, next: '43+9', operation: '+' });
});

it('add operation symbol with next value present', () => {
  const obj = {
    total: null,
    next: '473',
    operation: null,
  };
  const result = calculate(obj, '/');
  expect(result).toEqual({ total: '473', next: null, operation: '/' });
});

it('add a dot to next value', () => {
  const obj = {
    total: null,
    next: '473',
    operation: null,
  };
  const result = calculate(obj, '.');
  expect(result).toEqual({ total: null, next: '473.', operation: null });
});

it('returns the result when input is =', () => {
  const obj = {
    total: '473',
    next: '11',
    operation: '/',
  };
  const result = calculate(obj, '=');
  expect(result).toEqual({ total: '43', next: null, operation: null });
});
