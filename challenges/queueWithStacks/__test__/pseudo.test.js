'use strict';

const PseudoQueue = require('../queue-with-stacks');

describe('Happy path', ()=>{
    it('add a node by enqueue', ()=>{
        let data = new PseudoQueue();
        data.enqueue(1).enqueue(2)
        expect(data).toEqual({"data": {"top": {"next": {"next": null, "value": 1}, "value": 2}}})
    })

    it('remove a node by dequeue', ()=>{
        let data = new PseudoQueue();
        data.enqueue(1).enqueue(2).enqueue(3);
        data.dequeue();
        expect(data).toEqual({"data": {"top": {"next": {"next": null, "value": 2}, "value": 3}}})
    })
})

describe('Expected failure', ()=>{
    it('remove an empty list', ()=>{
        let data = new PseudoQueue();
        
        expect(data.dequeue()).toEqual('empty data')
    })
})