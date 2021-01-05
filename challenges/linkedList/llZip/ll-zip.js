'use strict';

const linkedlist = require('../linked-list');
// const list1 = new linkedlist();
// const list2 = new linkedlist();

// const ll1 = list1.append(1).append(5).append(9).append(11).append(12);
// const ll2 = list2.append(2).append(6).append(10);


function zipLists(ll1, ll2) {
    let current1 = ll1.head;
    let current2 = ll2.head;

    if(!current1 || !current2) {
        return "This is an empty object! please try again!";
    }
    let length1 = 0, length2 = 0;
    while(current1) {
        length1++;
        current1 = current1.next;
    }
    while(current2) {
        length2++;
        current2 = current2.next;
    }

    let newNode = new linkedlist();
    current1 = ll1.head;
    current2 = ll2.head;
    let total = length1 >= length2 ? length1 : length2; 
    for (let i = 1; i <= total; i++){
        if (i <= length1) {
            newNode.append(current1.value);
            current1 = current1.next;
        }
        if (i <= length2) {
            newNode.append(current2.value);
            current2 = current2.next;
        }
    }

    return newNode.toString();
}

// console.log(zipLists(ll1, ll2))

module.exports = zipLists;