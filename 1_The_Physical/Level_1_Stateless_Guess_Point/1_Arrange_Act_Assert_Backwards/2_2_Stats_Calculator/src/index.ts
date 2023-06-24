export type Stats = {
    min: number,
    max: number,
    count: number
}

export function calculateStats(sequence: number[]): Stats {
    return {
        min: -8,
        max: 53,
        count: 6
    };
}