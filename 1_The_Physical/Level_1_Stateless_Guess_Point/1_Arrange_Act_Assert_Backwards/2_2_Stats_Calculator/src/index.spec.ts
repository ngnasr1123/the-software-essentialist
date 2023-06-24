import { calculateStats } from './index';

describe('stats calculator', () => {
    it('it returns an object', () => {
        const output = calculateStats([]);
        expect(typeof output).toBe('object');
    });
})