'use strict';

const {node, binaryTree} = require('../../tree/tree');
const tree_intersection = require('../tree-intersection')

describe('Happy Result', ()=>{
    let consoleSpy;
    beforeEach(()=> {
        consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    });

    afterEach(()=> {
        consoleSpy.mockRestore();
    });
    it('Returning a values that are the same among the both binary trees', ()=>{
        let one = new node(150)
        let two = new node(100)
        let three = new node(250)
        let four = new node(75)
        let five = new node(160)
        let six = new node(125)
        let seven = new node(175)
        let eight = new node(200)
        let nine = new node(350)
        let ten = new node(300)
        let eleven = new node(500)

        one.left = two;
        one.right = three;
        two.left = four;
        two.right = five;
        three.left = six;
        three.right = seven;
        five.left = eight;
        five.right = nine;
        seven.left = ten;
        seven.right = eleven;

        let tree1 = new binaryTree(one);

        one = new node(42)
        two = new node(100)
        three = new node(600)
        four = new node(15)
        five = new node(160)
        six = new node(125)
        seven = new node(175)
        eight = new node(200)
        nine = new node(350)
        ten = new node(4)
        eleven = new node(500)


        one.left = two;
        one.right = three;
        two.left = four;
        two.right = five;
        three.left = six;
        three.right = seven;
        five.left = eight;
        five.right = nine;
        seven.left = ten;
        seven.right = eleven;

        let tree2 = new binaryTree(one);
        const consoleSpy = jest.spyOn(console, 'log');
        console.log(tree_intersection(tree1, tree2));
        expect(consoleSpy).toHaveBeenCalledWith([175, 160, 350,100, 200, 500,125])
    })
})

describe('Edge Case', ()=>{
    let consoleSpy;
    beforeEach(()=> {
        consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    });

    afterEach(()=> {
        consoleSpy.mockRestore();
    });
    it('Returning an empty array if there is no matching between a one node of trees', ()=>{
        let one = new node(153)

        let tree1 = new binaryTree(one);
        one = new node(42)

        let tree2 = new binaryTree(one);
        const consoleSpy = jest.spyOn(console, 'log');
        console.log(tree_intersection(tree1, tree2));
        expect(consoleSpy).toHaveBeenCalledWith([])
    })
})