'use strict';

const tree = require('../tree');
let Node = tree.node;
let BinaryTree = tree.binaryTree;

describe('traversing throughout the binary search tree', ()=>{
    let binaryTree = null;

    beforeAll(()=>{
        const one = new Node(1);
        const two = new Node(2);
        const three = new Node(3);
        const four = new Node(4);
        const five = new Node(5);
        const six = new Node(6);
        const seven = new Node(7);
        const eight = new Node(8);
        const nine = new Node(9);
         
        one.left = two;
        one.right = three;
        three.left = four;
        three.right = five;

        two.left = six;
        six.right = seven;
        seven.left = eight;
        seven.right = nine;

        binaryTree = new BinaryTree(one);
    })

    it('Can successfully return a collection from a preorder traversal', () => {
        expect(binaryTree.preOrder()).toEqual([1,2,6,7,8,9,3,4,5]);
    });
    it('Can successfully return a collection from an inorder traversal', () => {
        expect(binaryTree.inOrder()).toEqual([6,8,7,9,2,1,4,3,5]);
    });
    it('Can successfully return a collection from a postorder traversal', () => {
        expect(binaryTree.postOrder()).toEqual([8,9,7,6,2,4,5,3,1]);
    });
    it('Can successfully return a max value of the binary tree', () => {
        expect(binaryTree.find_maximum_value()).toEqual(9);
    });
    
})

describe(('Creating a new binary search tree'), ()=>{
    it('Can successfully instantiate an empty tree', () => {
        let binaryTree = new BinaryTree();
        expect(binaryTree.contains(1)).toEqual('There is no tree! Please tree again!');
    });

    it('Can successfully instantiate a tree with a single root node', () => {
        const three = new Node(3);
        let binaryTree = new BinaryTree(three);
        expect(binaryTree.root.value).toEqual(3);
    });

    it('Can successfully add a left child and right child to a single root node', () => {
        const three = new Node(3);
        let binaryTree = new BinaryTree(three);
        binaryTree.add(4).add(5);
        expect(binaryTree.contains(4)).toBeTruthy();
        expect(binaryTree.contains(5)).toBeTruthy();
    });
})