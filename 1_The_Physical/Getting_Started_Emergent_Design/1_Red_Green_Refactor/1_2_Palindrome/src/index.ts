export function palindromeChecker(phrase: string): boolean {
    const noSpacePhrase = phrase.toLowerCase().replace(/\s+/g, '');
    const charArray = noSpacePhrase.split('');

    return charArray.reverse().join("") === noSpacePhrase;
}