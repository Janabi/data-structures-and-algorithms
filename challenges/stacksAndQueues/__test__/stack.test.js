'use strict';

let {stack} = require('../stacks-and-queues')

describe('Stack Tests', ()=>{
    it('Can successfully push onto a stack', ()=>{
        let newNode = new stack();
        newNode.push(1);
        expect(newNode.top.value).toEqual(1);
    });

    it('Can successfully push multiple values onto a stack', ()=>{
        let newNode = new stack();
        newNode.push(1).push(3);
        expect(newNode.top.value).toEqual(3);
    });

    it('Can successfully pop off the stack', ()=>{
        let newNode = new stack();
        newNode.push(1).push(3);
        newNode.pop();
        expect(newNode.top.value).toEqual(1);
    });

    it('Can successfully pop off the stack', ()=>{
        let newNode = new stack();
        newNode.push(1).push(3);
        newNode.pop();
        newNode.pop();
        expect(newNode.top).toBeNull();
    });

    it('Can successfully instantiate an empty stack', ()=>{
        let newNode = new stack();
        expect(newNode.top).toBeNull();
    });

    it('Calling pop or peek on empty stack raises exception', ()=>{
        let newNode = new stack();
        newNode.push(1);
        newNode.pop();
        expect(newNode.peek()).toEqual('This is an empty list');
    });
})