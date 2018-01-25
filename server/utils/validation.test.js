const expect = require('expect');

const isRealString = require('./validation');

describe('isRealString', () => {
  it('it should return true if is string', () => {
    const res = isRealString(90);
    expect(res).toBe(false);
  });

  it('should reject string with only spaces', () => {
    const res = isRealString('    ');
    expect(res).toBe(false);
  })

  it('allow string with non-spce charaters', () => {
    const res = isRealString('  Arif  ');
    expect(res).toBe(true);
  })
})