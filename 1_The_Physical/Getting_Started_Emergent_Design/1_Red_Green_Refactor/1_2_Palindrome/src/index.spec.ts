import { palindromeChecker } from './index';

describe('palindrome checker', () => {
    it('knows "mom" is a palindrome', () => {
        expect(palindromeChecker("mom")).toEqual(true);
    });

    it('knows "Mom" is a palindrome', () => {
        expect(palindromeChecker("Mom")).toEqual(true);
    });

    it('knows "MoM" is a palindrome', () => {
        expect(palindromeChecker("MoM")).toEqual(true);
    });

    it('knows "Momx" is a palindrome', () => {
        expect(palindromeChecker("Momx")).toEqual(false);
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