'use strict';


const insertionSort = require('../index')

describe('Test the insertion sort function', ()=>{
    it('Can sort any array', ()=>{
        let arr = [8,4,23,42,16,15];
        const consoleSpy = jest.spyOn(console, 'log');
        console.log(insertionSort(arr));
        expect(consoleSpy).toHaveBeenCalledWith([ 4, 8, 15, 16, 23, 42 ])
    })
})

describe('Egde Cases', ()=>{
    it('Return a text if there was any element in the array rather than an integer', ()=>{
        let arr = [8,4,'23',42,16,15];
        const consoleSpy = jest.spyOn(console, 'log');
        console.log(insertionSort(arr));
        expect(consoleSpy).toHaveBeenCalledWith('Array should not include rather than number!')
    })
})