const pascelTriangle = require('../src/pattern3');
describe('pascelTriangle', () => {
  test('prints pattern for n=5', () => {
   const expected = `1
1 1
1 2 1
1 3 3 1
1 4 6 4 1`

    expect(pascelTriangle(5)).toEqual(expected);
  });

  test('prints output for n=3', () => {
    const expected = `1
1 1
1 2 1`

    expect(pascelTriangle(3)).toEqual(expected);
  });
});