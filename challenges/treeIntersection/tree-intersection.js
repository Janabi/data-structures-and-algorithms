'use strict';

const {node, binaryTree} = require('../tree/tree');
const {HashTable} = require('../hashmap/hashtable');
const tree = require('../tree/tree');



const tree_intersection = (firstTree, secondTree) =>{
    let tree1 = firstTree.breadthFirst(), tree2 = secondTree.breadthFirst();
    let size = tree1.length + tree2.length;
    
    let hashTable = new HashTable(size)
    let data = [];
    for (let i = 0; i < tree1.length; i++) {
        hashTable.add(tree1[i], tree1[i])
    }
    for (let i = 0; i < tree2.length; i++) {
        hashTable.add(tree2[i], tree2[i])
    }
    // console.log("hashTable.table>>>>>>", hashTable.table)
    for(let k = 0; k < hashTable.table.length; k++) {
        if (typeof hashTable.table[k] !== 'undefined' && hashTable.table[k].head.next !== null) {
            // console.log("length>>>>>", hashTable.table[k].head.next)
            data.push(Object.values(hashTable.table[k].head.value)[0])
        }
    }
    return data
}

// let one = new node(150)
// let two = new node(100)
// let three = new node(250)
// let four = new node(75)
// let five = new node(160)
// let six = new node(125)
// let seven = new node(175)
// let eight = new node(200)
// let nine = new node(350)
// let ten = new node(300)
// let eleven = new node(500)

// one.left = two;
// one.right = three;
// two.left = four;
// two.right = five;
// three.left = six;
// three.right = seven;
// five.left = eight;
// five.right = nine;
// seven.left = ten;
// seven.right = eleven;

// let tree1 = new binaryTree(one);

// one = new node(42)
// two = new node(100)
// three = new node(600)
// four = new node(15)
// five = new node(160)
// six = new node(125)
// seven = new node(175)
// eight = new node(200)
// nine = new node(350)
// ten = new node(4)
// eleven = new node(500)


// one.left = two;
// one.right = three;
// two.left = four;
// two.right = five;
// three.left = six;
// three.right = seven;
// five.left = eight;
// five.right = nine;
// seven.left = ten;
// seven.right = eleven;

// let tree2 = new binaryTree(one);

// console.log(tree_intersection(tree1, tree2))

module.exports = tree_intersection;