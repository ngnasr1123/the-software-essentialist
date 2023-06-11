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

  it('knows maxwellTheBe is missing digits', () => {
    const output = PasswordValidator.validate('maxwellTheBe');
    expect(output.result).toBeFalsy();
    expect(output.errors).toHaveLength(1);
    expect(output.errors[0]).toEqual("MissingDigits");
  });

  it('knows thePhysical1234567 exceeds 15 character limit', () => {
    const output = PasswordValidator.validate('thePhysical1234567');
    expect(output.result).toBeFalsy();
    expect(output.errors).toHaveLength(1);
    expect(output.errors[0]).toEqual("InvalidPasswordLength");
  });

  it('knows Maxwell1 is a valid password', () => {
    const output = PasswordValidator.validate('Maxwell1');
    expect(output.result).toBeTruthy();
    expect(output.errors).toHaveLength(0);
  });
})


