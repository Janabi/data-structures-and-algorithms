'use strict';

class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    add(value) {
        const node = new Node(value);
        if(!this.head) {
            this.head = node;
            return;
        }
        let current = this.head;
        while(current.next) {
            current = current.next;
        }
        current.next = node;
    }

    getValues() {
        const values = [];
        let current = this.head;
        while(current) {
            values.push(current.value);
            current = current.next;
        }
        return values;
    }
}

class HashTable {
    constructor(size){
        this.size = size;
        this.table = new Array(size);
    }

    hash(key) {
        const sumCharCode = key.split('').reduce((acc, char)=>{
            return acc + char.charCodeAt(0)
        }, 0)
        return (sumCharCode * 19) % this.size;
    }

    add(key, value){
        const hashed = this.hash(key);
        if(!this.table[hashed]) this.table[hashed] = new LinkedList();

        const entry = {[key]: value};
        this.table[hashed].add(entry);
    }

    get(key) {
        const hashed = this.hash(key);
        const data = this.table[hashed];
        return data ? data.getValues() : null;
    }

    contain(key) {
        return this.get(key) ? true : false;
    }
}

// const hashTable = new HashTable(950);
// console.log(hashTable.hash('act'));
// hashTable.add('cat', 'Candy');
// hashTable.add('act', 'Christian Bale');
// hashTable.add('name', 'Husam');
// hashTable.add('act', 'Husam');
// hashTable.add('city', 'Aqaba');
// hashTable.add('name', 'Hanaa');
// hashTable.table.forEach((data, i)=> {
//     console.log(i, '==================>');
//     if (data) {
//         console.log(data.getValues());
//     }
// })

// console.log(hashTable.get('nam'));

module.exports = {
    Node: Node,
    LinkedList: LinkedList,
    HashTable: HashTable
}