import { palindromeChecker } from './index';

describe('palindrome checker', () => {
    it('knows "mom" is a palindrome', () => {
        expect(palindromeChecker("mom")).toEqual(true);
    });
})

/*
"mom" returns true
"Mom" returns true
"MoM" returns true
"Momx" returns false
"xMomx" returns true
"Was It A Rat I Saw" returns true
"Never Odd or Even" returns true
"Never Odd or Even1" returns false 
"1Never Odd or Even1" returns true
*/