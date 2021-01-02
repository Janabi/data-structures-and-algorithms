'use strict';

const LinkList = require('../linked-list');

describe('Happy Results from the linked list class',()=>{
    it('Can successfully instantiate an empty linked list', ()=>{
        const ll = new LinkList();
        expect(ll.head).toBeNull();
    })
    
    it('Can properly insert into the linked list', ()=>{
        const ll = new LinkList();
        const data = ll.insert(2);
        expect(data).toEqual({"head": {"next": null, "value": 2}});
    })

    it('The head property will properly point to the first node in the linked list', ()=>{
        const ll = new LinkList();
        const data1 = ll.insert(2).insert(4);
        expect(data1.head.value).toEqual(2);
    })

    it('Can properly insert multiple nodes into the linked list', ()=>{
        const ll = new LinkList();
        const data2 = ll.insert(2).insert(4).insert(8);
        expect(data2).toEqual({"head": {"next": {"next": {"next": null, "value": 8}, "value": 4}, "value": 2}});
    })

    it('Will return true when finding a value within the linked list that exists', ()=>{
        const ll = new LinkList();
        const data3 = ll.insert(2).insert(4).insert(8);
        expect(data3.includes(4)).toEqual(true);
    })

    it('Can properly return a collection of all the values that exist in the linked list', ()=>{
        const ll = new LinkList();
        const data4 = ll.insert(2).insert(4).insert(8);
        expect(data4.toString()).toEqual(' { 2 } -> { 4 } -> { 8 } -> NULL ');
    })
});


describe('Bad Results from the linked list class',()=>{
    it('Will return false when searching for a value in the linked list that does not exist', ()=>{
        const ll = new LinkList();
        const data5 = ll.insert(2).insert(4).insert(8);
        expect(data5.includes(10)).toEqual(false);
    })
});