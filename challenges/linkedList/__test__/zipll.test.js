'use strict';

const LinkList = require('../linked-list');

const zipLists = require('../llZip/ll-zip')

describe('Happy Results from the zip list class',()=>{
    it('Can successfully zip two link list', ()=>{
        const ll1 = new LinkList();
        const ll2 = new LinkList();
        ll1.append(1).append(5).append(9).append(11).append(12);
        ll2.append(2).append(6).append(10);
        expect(zipLists(ll1, ll2)).toEqual(" { 1 } -> { 2 } -> { 5 } -> { 6 } -> { 9 } -> { 10 } -> { 11 } -> { 12 } -> NULL ");
    })
})

describe('Bad Results from the zip list class',()=>{
    it('Can successfully return a text if there was empty object', ()=>{
        const ll1 = new LinkList();
        const ll2 = new LinkList();

        expect(zipLists(ll1, ll2)).toEqual("This is an empty object! please try again!");
    })
})