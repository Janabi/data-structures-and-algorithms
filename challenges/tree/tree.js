'use strict';

class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor(root = null){
        this.root = root;
    }

    preOrder() {
        if(!this.root) {
            return 'There is no tree! Please tree again!'
        }

        const result = [];
        const _traverse = (root) =>{
            result.push(root.value);
            if(root.left) _traverse(root.left);
            if(root.right) _traverse(root.right);
        }
        _traverse(this.root)
        return result;
    }

    inOrder() {
        if(!this.root) {
            return 'There is no tree! Please tree again!'
        }

        const result = [];
        const _traverse = (root) =>{
            if(root.left) _traverse(root.left);
            result.push(root.value);
            if(root.right) _traverse(root.right);
        }
        _traverse(this.root)
        return result;
    }

    postOrder() {
        if(!this.root) {
            return 'There is no tree! Please tree again!'
        }

        const result = [];
        const _traverse = (root) =>{
            if(root.left) _traverse(root.left);
            if(root.right) _traverse(root.right);
            result.push(root.value);
        }
        _traverse(this.root)
        return result;
    }

    // getting a maximum value from the binary tree.
    find_maximum_value() {
        if(!this.root) {
            return 'There is no tree! Please tree again!'
        }

        let biggerValue = 0;
        const _traverse = (node) =>{
            if(node.left) _traverse(node.left);
            if(node.right) _traverse(node.right);
            if(node.value > biggerValue) {
                biggerValue = node.value
            }
        }
        _traverse(this.root)
        return biggerValue;
    }

    contains(value) {
        if(!this.root) return 'There is no tree! Please tree again!'
    
        return this.preOrder().includes(value);
    }

    add(value) {
        if(this.contains(value)) return `this value ${value} is already exist in the tree`
        let currentNode = this.root;
        if(!currentNode) {
            this.root = new Node(value);
            return this;
        } else {
            const _searchTree = (node) =>{
                if (value < node.value) {
                    if(!node.left) {
                        node.left = new Node(value);
                        return this;
                    } else if(node.left){
                        return _searchTree(node.left);
                    }
                }
                else if(value > node.value) {
                    if(!node.right) {
                        node.right = new Node(value);
                        return this;
                    } else if(node.right){
                        return _searchTree(node.right);
                    }
                }
            }
            _searchTree(currentNode);
            return this;
        }
    }
}

// const one = new Node(1);
// const two = new Node(2);
// const three = new Node(3);
// const four = new Node(4);
// const five = new Node(5);
// const six = new Node(6);
// const seven = new Node(7);
// const eight = new Node(8);
// const nine = new Node(9);
    
// one.left = two;
// one.right = three;
// three.left = four;
// three.right = five;

// two.left = six;
// six.right = seven;
// seven.left = eight;
// seven.right = nine;

// let binaryTree = new BinaryTree(one);
// console.log(binaryTree.preOrder())
// console.log(binaryTree.contains(3))
// console.log(binaryTree.contains(11))
// console.log(binaryTree.add(10))


module.exports = {
    node: Node,
    binaryTree: BinaryTree
}