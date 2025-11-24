const pyramidOne = require('../src/pattern1');

describe('pyramidOne', () => {
  test('prints pyramid for n=5', () => {
   const expected = `    1
   1 1
  1 1 1
 1 1 1 1
1 1 1 1 1`

    expect(pyramidOne(5)).toBe(expected);
  });

  test('prints pyramid for n=3', () => {
    const expected = `  1
 1 1
1 1 1`
    expect(pyramidOne(3)).toBe(expected);
  });
});