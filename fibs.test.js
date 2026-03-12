const fibs = require('./fibs');

it('fibonacci iteration test 1', () => {
  expect(fibs(8)).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
});
it('fibonacci iteration test 2', () => {
  expect(fibs(4)).toEqual([0, 1, 1, 2]);
});
it('fibonacci iteration test 3', () => {
  expect(fibs(10)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
});
