'use strict';

const mergesort = require('../index')

describe('Test the merge sort function', ()=>{
    it('Can sort any array', ()=>{
        let arr = [8,4,23,42,16,15];
        const consoleSpy = jest.spyOn(console, 'log');
        console.log(mergesort(arr));
        expect(consoleSpy).toHaveBeenCalledWith([ 4, 8, 15, 16, 23, 42 ])
    })
})

describe('Egde Cases', ()=>{
    it('Return the same array if the length of it is less than one', ()=>{
        let arr = [8];
        const consoleSpy = jest.spyOn(console, 'log');
        console.log(mergesort(arr));
        expect(consoleSpy).toHaveBeenCalledWith([8])
    })
})