'use strict';

const LinkList = require('../linked-list');

describe('Happy Results from the linked list class',()=>{
    it('Can successfully instantiate an empty linked list', ()=>{
        const ll = new LinkList();
        expect(ll.head).toBeNull();
    })
    
    it('Can properly insert into the linked list', ()=>{
        const ll = new LinkList();
        const data = ll.append(2);
        expect(data).toEqual({"head": {"next": null, "value": 2}});
    })

    it('The head property will properly point to the first node in the linked list', ()=>{
        const ll = new LinkList();
        const data1 = ll.append(2).append(4);
        expect(data1.head.value).toEqual(2);
    })

    it('Can properly append multiple nodes into the linked list', ()=>{
        const ll = new LinkList();
        const data2 = ll.append(2).append(4).append(8);
        expect(data2).toEqual({"head": {"next": {"next": {"next": null, "value": 8}, "value": 4}, "value": 2}});
    })

    it('Will return true when finding a value within the linked list that exists', ()=>{
        const ll = new LinkList();
        const data3 = ll.append(2).append(4).append(8);
        expect(data3.includes(4)).toEqual(true);
    })

    it('Can properly return a collection of all the values that exist in the linked list', ()=>{
        const ll = new LinkList();
        const data4 = ll.append(2).append(4).append(8);
        expect(data4.toString()).toEqual(' { 2 } -> { 4 } -> { 8 } -> NULL ');
    })

    it('Can successfully add a node to the end of the linked list', ()=>{
        const ll = new LinkList();
        const data = ll.insert(2);
        expect(data).toEqual({"head": {"next": null, "value": 2}});
    })

    it('Can successfully add multiple nodes to the end of a linked list', ()=>{
        const ll = new LinkList();
        const data1 = ll.insert(2).insert(4);
        expect(data1.head.value).toEqual(4);
    })

    it('Can successfully insert a node before a node located i the middle of a linked list', ()=>{
        const ll = new LinkList();
        const data4 = ll.append(2).append(4).append(8);
        expect(data4.insertBefore(4,6)).toEqual({"head": {"next": {"next": {"next": {"next": null, "value": 8}, "value": 4}, "value": 6}, "value": 2}});
    })

    it('Can successfully insert a node before the first node of a linked list', ()=>{
        const ll = new LinkList();
        const data4 = ll.append(2);
        expect(data4.insertBefore(2,6)).toEqual({"head": {"next": {"next": null, "value": 2}, "value": 6}});
    })

    it('Can successfully insert after a node in the middle of the linked list', ()=>{
        const ll = new LinkList();
        const data4 = ll.append(2).append(4).append(8);
        expect(data4.insertAfter(4,6)).toEqual({"head": {"next": {"next": {"next": {"next": null, "value": 8}, "value": 6}, "value": 4}, "value": 2}});
    })

    it('Can successfully insert a node after the last node of the linked list', ()=>{
        const ll = new LinkList();
        const data4 = ll.append(2);
        expect(data4.insertAfter(2,6)).toEqual({"head": {"next": {"next": null, "value": 6}, "value": 2}});
    })

    it('where k is not at the end, but somewhere in the middle of the linked list', ()=>{
        const ll = new LinkList();
        const data4 = ll.append(2).append(4).append(8);
        expect(data4.kthFromEnd(1)).toEqual(4);
    })
});


describe('Bad Results from the linked list class',()=>{
    it('Will return false when searching for a value in the linked list that does not exist', ()=>{
        const ll = new LinkList();
        const data5 = ll.append(2).append(4).append(8);
        expect(data5.includes(10)).toEqual(false);
    })

    it('Will return a string that said this value is not exist within the linked list', ()=>{
        const ll = new LinkList();
        const data5 = ll.append(2).append(4).append(8);
        expect(data5.insertBefore(10,8)).toEqual('There is no such this value 10 exist throughout the nodes in the linked list');
    })

    it('Where k is greater than the length of the linked list', ()=>{
        const ll = new LinkList();
        const data4 = ll.append(2).append(4).append(8);
        expect(data4.kthFromEnd(4)).toEqual("The given number is more than or equal to the length of linked list, or it has length of 1.");
    })

    it('Where k and the length of the list are the same', ()=>{
        const ll = new LinkList();
        const data4 = ll.append(2).append(4).append(8);
        expect(data4.kthFromEnd(3)).toEqual("The given number is more than or equal to the length of linked list, or it has length of 1.");
    })

    it('Where k is not a positive integer', ()=>{
        const ll = new LinkList();
        const data4 = ll.append(2).append(4).append(8);
        expect(data4.kthFromEnd(-3)).toEqual("it must be equal or more than zero");
    })

    it('Where the linked list is of a size 1', ()=>{
        const ll = new LinkList();
        const data4 = ll.append(2);
        expect(data4.kthFromEnd(0)).toEqual("The given number is more than or equal to the length of linked list, or it has length of 1.");
    })
});