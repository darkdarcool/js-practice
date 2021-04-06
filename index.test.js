const main = require('./index');

test('wants list', () => {
  expect(main()).toBe("Hello World!")
});