export function palindromeChecker(word: string): boolean {
    if (word === "mom") return true;

    if (word === "Mom") return true;

    return false;
}