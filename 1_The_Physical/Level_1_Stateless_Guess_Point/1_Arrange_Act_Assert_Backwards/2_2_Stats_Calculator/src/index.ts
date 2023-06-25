export type Stats = {
    min: number,
    max: number,
    count: number,
    avg: number
}

export function calculateStats(sequence: number[]): Stats {
    if (!sequence?.length) throw new Error('Sequence cannot be empty!');

    const sortedSequence = sequence.sort((a, b) => a - b);
    const count = sortedSequence.length;
    const total = sequence.reduce((accumulator, curr) => accumulator + curr, 0);
    return {
        min: sortedSequence[0],
        max: sortedSequence[count - 1],
        count,
        avg: parseFloat((total/count).toFixed(12))
    };
}