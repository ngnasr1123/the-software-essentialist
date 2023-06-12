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

  it('knows max is too short, missing uppercase letters, and missing digits', () => {
    const output = PasswordValidator.validate('max');
    expect(output.result).toBeFalsy();
    expect(output.errors).toHaveLength(3);
  });

  it.each([
    'Maxwell1',
    'validPwd897',
    '12threeFour'
  ])('Knows %p is less than 5 or greater than 15 characters', (text) => {
    const output = PasswordValidator.validate(text);
    expect(output.result).toBeTruthy();
    expect(output.errors).toHaveLength(0);
  });
})


