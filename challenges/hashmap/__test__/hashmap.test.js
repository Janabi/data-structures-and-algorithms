'use strict';

const {Node, LinkedList, HashTable} = require('../hashtable');

describe('Happy Result', ()=>{
    let consoleSpy;
    beforeEach(()=> {
        consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    });

    afterEach(()=> {
        consoleSpy.mockRestore();
    });
    it('Adding a key/value to your hashtable results in the value being in the data structure', ()=>{
        const hashTable = new HashTable(950);
        hashTable.add('dog', 'Nex');
        const consoleSpy = jest.spyOn(console, 'log');
        console.log(hashTable.contain('dog'));
        expect(consoleSpy).toHaveBeenCalledWith(true);
    })

    it('Retrieving based on a key returns the value stored', ()=>{
        const hashTable = new HashTable(950);
        hashTable.add('dog', 'Nex');
        const consoleSpy = jest.spyOn(console, 'log');
        console.log(hashTable.get('dog'));
        expect(consoleSpy).toHaveBeenCalledWith([ { dog: 'Nex' } ]);
    })

    it('Successfully handle a collision within the hashtable', ()=>{
        const hashTable = new HashTable(950);
        hashTable.add('city', 'Amman');
        hashTable.add('city', 'Aqaba');
        const consoleSpy = jest.spyOn(console, 'log');
        console.log(hashTable.contain('city'));
        expect(consoleSpy).toHaveBeenCalledWith(true);
    })

    it('Successfully retrieve a value from a bucket within the hashtable that has a collision', ()=>{
        const hashTable = new HashTable(950);
        hashTable.add('city', 'Amman');
        hashTable.add('city', 'Aqaba');
        const consoleSpy = jest.spyOn(console, 'log');
        console.log(hashTable.get('city'));
        expect(consoleSpy).toHaveBeenCalledWith([{city: 'Amman'}, {city: 'Aqaba'}]);
    })

    it('Successfully hash a key to an in-range value', ()=>{
        const hashTable = new HashTable(950);
        const consoleSpy = jest.spyOn(console, 'log');
        console.log(hashTable.hash('act'));
        expect(consoleSpy).toHaveBeenCalledWith(228);
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
    it('Successfully returns null for a key that does not exist in the hashtable', ()=>{
        const hashTable = new HashTable(950);
        hashTable.add('city', 'Amman');
        hashTable.add('city', 'Aqaba');
        const consoleSpy = jest.spyOn(console, 'log');
        console.log(hashTable.get('cit'));
        expect(consoleSpy).toHaveBeenCalledWith(null);
    }) 
})