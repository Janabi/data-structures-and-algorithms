'use strict';

const AnimalShelter = require('../fifo-animal-shelter');

describe('Testing the animal shalter class', ()=>{
    it('Can successfully add a dog in the list', ()=>{
        let data = new AnimalShelter();
        data.enqueue('dog').enqueue('cat').enqueue('dog');
        expect(data).toEqual({"cat": ["cat"], "dog": ["dog", "dog"]});
    })

    it('Can successfully remove a dog or a cat from the list', ()=>{
        let data = new AnimalShelter();
        data.enqueue('dog').enqueue('cat').enqueue('dog');
        data.dequeue('dog').dequeue('cat');
        expect(data).toEqual({"cat": [], "dog": ["dog"]});
    })
})

describe('Edge Cases', ()=>{
    it('Can successfully return null if we passed a wrong param in the dequeue method', ()=>{
        let data = new AnimalShelter();
        data.enqueue('dog').enqueue('cat').enqueue('dog');
        expect(data.dequeue('d')).toBeNull();
    })
})