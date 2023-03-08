const { MarkovMachine, getFileData,choice } = require('./markov');

describe('Markov machine test', () => {

    test('random number generated given a number', () => {
        let num = choice(10);
        // does it fall between the range of 0 and num
        expect(num).toBeGreaterThanOrEqual(0);
        expect(num).toBeLessThanOrEqual(10);
    })
})