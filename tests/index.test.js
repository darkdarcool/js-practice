const getelem = require('../src/index');
test('Returns proper list data', () => {
  mystuff = [
	'H', 'i'
  ]
  expect(getelem(mystuff)).toBe(2)
});