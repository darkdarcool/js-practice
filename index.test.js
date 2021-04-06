const main = require('./index');
test('Returns proper list data', () => {
  mystuff = [
	'H', 'e', 'l', 'l',
	'o', '',  'W', 'o',
	'r', 'l', 'd', '!',
	''
  ]
  expect(main()).toBe(mystuff)
});