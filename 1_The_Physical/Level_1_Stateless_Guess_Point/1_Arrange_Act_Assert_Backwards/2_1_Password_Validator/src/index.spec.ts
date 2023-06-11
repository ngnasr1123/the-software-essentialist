import PasswordValidator from './index';

describe('password validator', () => {
  it('returns an object', () => {
    const output = PasswordValidator.validate('maxwell1_c');
    expect(typeof output).toBe("object");
  });

  it.each([
    'maxwell1_c',
    'great_course1',
    'to_mastery100'
  ])('Knows %p is missing uppercase letters', (text) => {
      const output = PasswordValidator.validate(text);
      expect(output.result).toBeFalsy();
      expect(output.errors).toHaveLength(1);
      expect(output.errors[0]).toEqual("MissingUppercase");
  });

  it.each([
    'maxwellTheBe',
    'Spider-man',
    'myPassword'
  ])('Knows %p is missing digits', (text) => {
      const output = PasswordValidator.validate(text);
      expect(output.result).toBeFalsy();
      expect(output.errors).toHaveLength(1);
      expect(output.errors[0]).toEqual("MissingDigits");
  });

  it.each([
    'thePhysical1234567',
    'T1ny',
    'the1stMatrixisthebest'
  ])('Knows %p is less than 5 or greater than 15 characters', (text) => {
      const output = PasswordValidator.validate(text);
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


