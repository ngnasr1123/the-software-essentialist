import PasswordValidator from './index';

describe('password validator', () => {
  it('returns an object', () => {
    const output = PasswordValidator.validate('maxwell1_c');
    expect(typeof output).toBe("object");
  });

  it('knows maxwell1_c is missing uppercase letters', () => {
    const output = PasswordValidator.validate('maxwell1_c');
    expect(output.result).toBeFalsy();
    expect(output.errors).toHaveLength(1);
    expect(output.errors[0]).toEqual("MissingUppercase");
  });
})


