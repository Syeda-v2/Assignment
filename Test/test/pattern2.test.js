const {spaces,numbers,pattern2} = require('../src/pattern2');

describe('pattern2', () => {
  test('prints pattern for n=5', () => {

    expect((spaces(2-1))).toBe(" ");
    expect((numbers(2))).toBe("232");
});
});