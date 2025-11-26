const pascelTriangle = require('../src/pattern3');

describe('pascelTriangle', () => {
  test('prints pattern for n=5', () => {

    const output = pascelTriangle(5);
    const lines = output.split("\n");

    expect((lines[2])).toBe("121");
    
  });
});