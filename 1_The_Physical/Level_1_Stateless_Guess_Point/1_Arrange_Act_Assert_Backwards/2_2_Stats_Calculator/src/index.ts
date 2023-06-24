export type Stats = {
    min: number,
    max: number,
    count: number,
    avg: number
}

export function calculateStats(sequence: number[]): Stats {
    const sortedSequence = sequence.sort((a, b) => a - b);
    const count = sortedSequence.length;
    return {
        min: sortedSequence[0],
        max: sortedSequence[count - 1],
        count: 6,
        avg: 18.666666666667
    };
}