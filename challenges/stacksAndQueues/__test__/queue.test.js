'use strict';

let {queue} = require('../stacks-and-queues')

describe('Queue Tests', ()=>{
    it('Can successfully enqueue into a queue', ()=>{
        let newNode = new queue();
        newNode.enqueue(1);
        expect(newNode.front.value).toEqual(1);
    });

    it('Can successfully enqueue multiple values into a queue', ()=>{
        let newNode = new queue();
        newNode.enqueue(1).enqueue(3);
        expect(newNode.front.value).toEqual(1);
    });

    it('Can successfully dequeue out of a queue the expected value', ()=>{
        let newNode = new queue();
        newNode.enqueue(1).enqueue(3);
        newNode.dequeue();
        expect(newNode.front.value).toEqual(3);
    });

    it('Can successfully peek into a queue, seeing the expected value', ()=>{
        let newNode = new queue();
        newNode.enqueue(1).enqueue(3);
        expect(newNode.peek()).toEqual(1);
    });

    it('Can successfully empty a queue after multiple dequeues', ()=>{
        let newNode = new queue();
        newNode.enqueue(1).enqueue(3);
        newNode.dequeue();
        newNode.dequeue();
        expect(newNode.front).toBeNull();
    });

    it('Can successfully instantiate an empty queue', ()=>{
        let newNode = new queue();
        expect(newNode.front).toBeNull();
    });

    it('Calling dequeue or peek on empty queue raises exception', ()=>{
        let newNode = new queue();
        newNode.enqueue(1).enqueue(3);
        newNode.dequeue();
        newNode.dequeue();
        expect(newNode.peek()).toEqual('This is an empty list');
    });
})