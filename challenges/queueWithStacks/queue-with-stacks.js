'use strict';

const {stack} = require('../stacksAndQueues/stacks-and-queues');

class PseudoQueue {
    constructor() {
        this.data = new stack();
    }

    enqueue(value){
        this.data.push(value);
        return this;
    }

    dequeue() {
        if(!this.data.top){
            return 'empty data';
        }
        let current = this.data.top;
        let arr = [];
        while(current.next) {
            arr.push(current.value);
            current = current.next;
        }
        let arrLen = arr.length;
        this.data = new stack();
        for (let i = arrLen-1; i >= 0; i--){
            this.data.push(arr[i]);
        }
        return this.data;
    }
}

// let data = new PseudoQueue();
// console.log(data.enqueue(1).enqueue(2).enqueue(4))
// console.log(data.dequeue())

module.exports = PseudoQueue;