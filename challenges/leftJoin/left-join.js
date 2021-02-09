'use strict';
const {HashTable} = require('../hashmap/hashtable')

const leftJoin = (leftHashMap, rightHashMap)=>{
    // console.log("leftHashMap>>>>>", leftHashMap)
    // console.log("rightHashMap>>>>>", rightHashMap)
    for (let i = 0; i < rightHashMap.table.length; i++){
        if(typeof rightHashMap.table[i] !== 'undefined'){
            if(leftHashMap.get(Object.keys(rightHashMap.table[i].head.value)[0])) {
                leftHashMap.add(
                    Object.keys(rightHashMap.table[i].head.value)[0],
                    Object.values(rightHashMap.table[i].head.value)[0]
                );
            }
        }
    }
    const data = [];

    for(let i =0; i < leftHashMap.table.length; i++) {
        if (typeof leftHashMap.table[i] !== 'undefined') {
            let current = leftHashMap.table[i].head;
            let row = [];
            row.push(Object.keys(current.value)[0])
            while(current) {
                row.push(Object.values(current.value)[0])
                current = current.next;
            }
            if (row.length ===2) {
                row.push(null)
            }
            data.push(row);
        }
    }
    return data;
}

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

console.log(leftJoin(firstHashTable,secondHashTable))

module.exports = leftJoin;
