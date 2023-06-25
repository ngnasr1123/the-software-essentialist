import { calculateStats } from './index';

describe('stats calculator', () => {
    it('it returns an object', () => {
        const output = calculateStats([1]);
        expect(typeof output).toBe('object');
    });

    it('it throws an error for an empty sequence', () => {
        expect(() => { calculateStats([]) }).toThrow("Sequence cannot be empty!");
    });

    describe.each([
        [[2, 4, 21, -8, 53, 40], { min: -8, max: 53, count: 6, avg: 18.666666666667 }],
        [[1000, 38, -88, 50], { min: -88, max: 1000, count: 4, avg: 250 }],
        [[300], { min: 300, max: 300, count: 1, avg: 300 }]
    ])('when the sequence is %s', (sequence, expected) => {
        const output = calculateStats(sequence);
        
        it(`knows ${expected.min} is the minimum value`, () => {
            expect(output.min).toEqual(expected.min);
        });

        it(`knows ${expected.max} is the maximum value`, () => {
            expect(output.max).toEqual(expected.max);
        });

        it(`knows the sequence has ${expected.count} numbers`, () => {
            expect(output.count).toEqual(expected.count);
        });

        it(`knows ${expected.avg} is the average`, () => {
            expect(output.avg).toEqual(expected.avg);
        });
    });
})