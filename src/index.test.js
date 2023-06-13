import { sum, mult } from './index.js';

xdescribe("коллекция", () => {
    it('mult 1 * 0 to equal 0', () => {
        expect(mult(1, 0)).toBe(0);
    }),

    it('mult 1 * 1 to equal 1', () => {
        expect(mult(1, 1)).toBe(1);
    }),

    it('mult 1 * 10 to equal 10', () => {
        expect(mult(1, 10)).toBe(10);
    })
})

xdescribe("k2", () => {
    it('sum 2 + 3 to equal 5', () => {
        expect(sum(2, 3)).toBe(5);
    })
})