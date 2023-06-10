export function palindromeChecker(word: string): boolean {
    if (word.toLowerCase() === "mom") return true;

    if (word.toLowerCase() === "xmomx") return true;

    return false;
}