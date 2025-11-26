const {spaces,numbers,pyramidOne} = require('../src/pattern1');
describe('pyramidOne', () => {
  test('prints pyramid for n=5', () => {
    
    expect((spaces(5-1))).toBe("    ");
    expect((numbers(5))).toBe("1 1 1 1 1 ");
});
});