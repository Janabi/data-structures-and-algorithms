'use strict';

const repeatedWord = require('../repeated-word');

describe('Happy Result', ()=>{
    let consoleSpy;
    beforeEach(()=> {
        consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    });

    afterEach(()=> {
        consoleSpy.mockRestore();
    });
    it('getting the first repeated word', ()=>{
        let str = "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness";
        const consoleSpy = jest.spyOn(console, 'log');
        console.log(repeatedWord(str))
        expect(consoleSpy).toHaveBeenCalledWith('it');
    })
})


describe('Edge Case', ()=>{
    let consoleSpy;
    beforeEach(()=> {
        consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    });

    afterEach(()=> {
        consoleSpy.mockRestore();
    });
    it('getting a null if we passed a string with one word', ()=>{
        let str = 'hi';
        const consoleSpy = jest.spyOn(console, 'log');
        console.log(repeatedWord(str))
        expect(consoleSpy).toHaveBeenCalledWith(null);
    })

    it('getting a null if we passed an empty string', ()=>{
        let str = '';
        const consoleSpy = jest.spyOn(console, 'log');
        console.log(repeatedWord(str))
        expect(consoleSpy).toHaveBeenCalledWith(null);
    })
})