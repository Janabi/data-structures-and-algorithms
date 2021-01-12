'use strict';

let multiBracketValidation = require('../multi-bracket-validation');

describe('Happy Path', ()=>{
    it('will return a truthy value if all of the brackets have an opening and closing one', ()=>{
        expect(multiBracketValidation('{}(){}')).toBeTruthy();
    })

    it('will return a truthy value if all of the brackets have an opening and closing one with some characters between them', ()=>{
        expect(multiBracketValidation('{}{Code}[Fellows](())')).toBeTruthy();
    })
})

describe('Edge cases', ()=>{
    it('passing an empty array or less than 2', ()=>{
        expect(multiBracketValidation('{')).toBeFalsy();
    })

    it('will return false if the opening and closing are passing randomly', ()=>{
        expect(multiBracketValidation('{(})')).toBeFalsy();
    })

    it('will return false if one of opening or closing is not exist', ()=>{
        expect(multiBracketValidation('[({}]')).toBeFalsy();
    })
})