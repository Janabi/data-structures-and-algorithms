'use strict';

const binarySearch = require('../array-binary-search');

describe('Checking the binary funcrion', ()=>{
    it('unvalid array or number type', ()=>{
        return expect(binarySearch([1,2,4], "hi")).toEqual("This is not an array or a number type. Please try again!")
    })

    it('unvalid input number inside the array', ()=>{
        return expect(binarySearch([11,22,33,44,55,66,77], 90)).toEqual(-1)
    })

    it('returning an index of that given number inside the array', ()=>{
        return expect(binarySearch([4,8,15,16,23,42], 15)).toEqual(2)
    })
})