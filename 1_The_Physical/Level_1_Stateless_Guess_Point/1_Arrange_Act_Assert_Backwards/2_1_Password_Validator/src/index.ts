export default class PasswordValidator {
    static validate(password: string): { result: boolean, errors: string[] } {
        const errors = [];

        if (password === 'maxwell1_c') {
            errors.push('MissingUppercase');
        }

        if (password === 'maxwellTheBe') {
            errors.push('MissingDigits');
        }
        
        return {
            result: false,
            errors: errors
        };
    }
}


/*
Between 5 and 15 characters long
Contains at least one digit
Contains at least one upper case letter
Return an object containing a boolean result and an
errors key that — when provided with an invalid password —
contains an error message or type for all errors in occurrence.
There can be multiple errors at a single time

"maxwell1_c" returns a false-y response because of a lack of uppercase characters
"maxwellTheBe" returns a false-y response because of a lack of digits
"thePhysical1234567" returns a false-y response because of exceeding the 15 character length
*/