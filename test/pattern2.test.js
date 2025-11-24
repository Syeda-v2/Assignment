const pattern2 = require('../src/pattern2');

describe('pattern2', () => {
  test('prints pattern for n=5', () => {
   const expected = `    1
   232
  34543
 4567654
567898765`

    expect(pattern2(5)).toBe(expected);
  });

  test('prints output for n=3', () => {
    const expected = `  1
 232
34543`

    expect(pattern2(3)).toBe(expected);
  });
});