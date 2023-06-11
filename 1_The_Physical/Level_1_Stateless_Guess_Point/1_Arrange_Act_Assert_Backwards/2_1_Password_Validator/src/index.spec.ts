import PasswordValidator from './index';

describe('password validator', () => {
  it('returns an object', () => {
    const output = PasswordValidator.validate('maxwell1_c');
    expect(typeof output).toBe("object");
  })
})


