'use strict';

let ktree = require('../fizz-buzz-tree')
let Node = ktree.node;
let KaryTree = ktree.karyTree;
let fizzBuzzTree = ktree.fizzBuzzTree;
let fizzbuzz = ktree.fizzbuzz;

describe('Testing the k-ary tree', ()=>{

    it('Given the same result', ()=>{
        let one = new Node(1);
        let two = new Node(2);
        let three = new Node(3);
        let four = new Node(4);
        let five = new Node(5);
        let six = new Node(6);

        one.children.push(three);
        one.children.push(two);
        one.children.push(four);
        three.children.push(five)
        three.children.push(six)
        let tree = new KaryTree(one);

        let karyTree = fizzBuzzTree(tree);
        expect(karyTree.root.children[0].value).toEqual(fizzbuzz(tree.root.children[0].value))
    })

    it('return a text if the tree is empty (Edge Case)', ()=>{
        let tree = new KaryTree();
        let karyTree = fizzBuzzTree(tree);
        expect(karyTree).toEqual('This k-ary tree is empty!');
    })
})