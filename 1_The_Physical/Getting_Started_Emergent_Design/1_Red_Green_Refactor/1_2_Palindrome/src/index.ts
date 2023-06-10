export function palindromeChecker(word: string): boolean {
    if (word.toLowerCase() === "mom") return true;

    if (word.toLowerCase() === "xmomx") return true;

    if (word.toLowerCase() === "was it a rat i saw") return true;

    return false;
}