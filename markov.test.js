const { MarkovMachine, getFileData,choice } = require('./markov');

describe('Markov machine test', () => {
    let num;
    let text;
    let mm;
    
    beforeEach(() => {
        num = 5;
        text = 'the cat in the hat'
        mm = new MarkovMachine(text);
    });

    afterEach(() => {
        num = null;
        text = null;
        mm = null;
    });
    
    test('random number generated between n', () => {
        num = choice(10);
        // does it fall between the range of 0 and num
        expect(num).toBeGreaterThanOrEqual(0);
        expect(num).toBeLessThanOrEqual(10);
    })

    test('length of initialized words', () => {
        expect(mm.words).toHaveLength(5);
    });

    test('regex filter of words when initialized', () => {
        text = 'the! cat! in.? (the) ?hat';
        mm = new MarkovMachine(text);
        text.split(' ').forEach((word, idx) => {
            expect(word).not.toBe(mm.words[idx]);
        });
    });

    test('makeChains should be an instance of Map', () => {
        expect(mm.mChains).toBeInstanceOf(Map);
    });

    test('makeChains map should have null for the last value', () => {
        expect(mm.mChains.get('hat')[0]).toBe(null);
    });

    test('makeText method should return markov chain Arrya and be < or = to n', () => {
        expect(mm.makeText(num)).toBeInstanceOf(Array);
        expect(mm.makeText(num).length).toBeLessThanOrEqual(num);
    })

    test('Contructor has no data must throw Error', () => {
        expect(() => {
            new MarkovMachine();
        }).toThrow();
    });
})