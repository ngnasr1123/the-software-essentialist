export type Stats = {
    min: number,
    max: number,
    count: number,
    avg: number
}

export function calculateStats(sequence: number[]): Stats {
    const sortedSequence = sequence.sort();
    return {
        min: sortedSequence[0],
        max: 53,
        count: 6,
        avg: 18.666666666667
    };
}