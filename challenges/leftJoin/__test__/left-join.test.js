'use strict';

const leftJoin = require('../left-join')
const {HashTable} = require('../../hashmap/hashtable')

describe('Happy Result', ()=>{
    let consoleSpy;
    beforeEach(()=> {
        consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    });

    afterEach(()=> {
        consoleSpy.mockRestore();
    });
    it('Returning an array of arrays with the common key and its values from both table', ()=>{
        const firstHashTable = new HashTable(20)
        const secondHashTable = new HashTable(20)

        firstHashTable.add("fond", "enamored");
        firstHashTable.add("wrath", "anger");
        firstHashTable.add("dilligent", "employed");
        firstHashTable.add("outift", "grab");
        firstHashTable.add("guide", "usher");
        secondHashTable.add("fond", "averse");
        secondHashTable.add("wrath", "delight");
        secondHashTable.add("dilligent", "idle");
        secondHashTable.add("guide", "follow");
        secondHashTable.add("flow", "jam");

        const consoleSpy = jest.spyOn(console, 'log');
        console.log(leftJoin(firstHashTable,secondHashTable))
        expect(consoleSpy).toHaveBeenCalledWith(
            [
                [ 'dilligent', 'employed', 'idle' ],
                [ 'wrath', 'anger', 'delight' ],
                [ 'outift', 'grab', null ],
                [ 'guide', 'usher', 'follow' ],
                [ 'fond', 'enamored', 'averse' ]
            ]
        )
    })
})
