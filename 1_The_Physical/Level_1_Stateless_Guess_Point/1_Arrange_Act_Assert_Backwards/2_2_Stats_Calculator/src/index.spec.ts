import { calculateStats } from './index';

describe('stats calculator', () => {
    it('it returns an object', () => {
        const output = calculateStats([]);
        expect(typeof output).toBe('object');
    });

    describe('when the sequence is 2, 4, 21, -8, 53, and 40', () => {
        it('knows -8 is the minimum value', () => {
            const output = calculateStats([2, 4, 21, -8, 53, 40]);
            expect(output.min).toEqual(-8);
        });

        it('knows 53 is the maximum value', () => {
            const output = calculateStats([2, 4, 21, -8, 53, 40]);
            expect(output.max).toEqual(53);
        });

        it('knows the sequence has 6 numbers', () => {
            const output = calculateStats([2, 4, 21, -8, 53, 40]);
            expect(output.count).toEqual(6);
        });
    });
})