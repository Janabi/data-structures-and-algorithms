'use strict';

const quickSort = require('../index');

describe(('Happy Path'), ()=>{
    it('getting the array sorted', ()=>{
        let arr = [8,4,23,42,16,15];
        quickSort(arr, 0, arr.length-1)
        const consoleSpy = jest.spyOn(console, 'log');
        console.log(arr);
        expect(consoleSpy).toHaveBeenCalledWith([ 4, 8, 15, 16, 23, 42 ]);
    })
})

describe(('Edge Case'), ()=>{
    it('getting the array unsorted', ()=>{
        let arr = [8,4,23,42,16,15];
        quickSort(arr, arr.length-1,0)
        const consoleSpy = jest.spyOn(console, 'log');
        console.log(arr);
        expect(consoleSpy).toHaveBeenCalledWith([ 8, 4, 23, 42, 16, 15 ]);
    })
})