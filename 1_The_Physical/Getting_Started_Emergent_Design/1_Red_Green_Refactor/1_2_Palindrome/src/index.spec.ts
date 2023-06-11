import { palindromeChecker } from './index';

describe('palindrome checker', () => {
    it.each([
        'mom',
        'Mom',
        'MoM',
        'xMomx',
        'Was It A Rat I Saw',
        'Never Odd or Even',
        '1Never Odd or Even1'
    ])('Knows %p is a palindrome', (text) => {
        expect(palindromeChecker(text)).toBeTruthy();
    });

    it.each([
        'Momx',
        'Never Odd or Even1'
    ])('Knows %p is not a palindrome', (text) => {
        expect(palindromeChecker(text)).toBeFalsy();
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