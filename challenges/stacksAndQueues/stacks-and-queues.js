'use strict';

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack{
    constructor(){
        this.top = null;
    }

    push(value) {
        const node = new Node(value);
        if(!this.top) {
            this.top = node;
        }
        else {
            node.next = this.top;
            this.top = node;
        }
        return this;
    }

    pop() {
        if(!this.top) {
            return 'This is an empty list';
        } else {
            this.top = this.top.next;
            return this;
        }
    }

    peek(){
        if(!this.top) {
            return 'This is an empty list'
        }
        return this.top.value;
    }

    isEmpty(){
        return !this.top ? true : false;
    }

}

class Queue {
    constructor() {
        this.front = null;
    }

    enqueue(value) {
        const node = new Node(value);
        if(!this.front) {
            this.front = node;
        }
        else {
            let currentNode = this.front;
            while(currentNode.next) {
                currentNode = currentNode.next;
            }
            currentNode.next = node;
        }
        return this;
    }

    dequeue(){
        if(!this.front) return 'This is an empty list';
        if(!this.front.next) return this.front = null;
        this.front = this.front.next;
        return this;
    }

    peek(){
        if(!this.front) return 'This is an empty list';
        return this.front.value;
    }

    isEmpty(){
        return !this.front ? true : false;
    }
}

// let stack = new Stack();
// console.log(stack.push(1).push(4));
// console.log(stack.pop())
// console.log(stack.isEmpty())

// let queue = new Queue();
// console.log(queue.enqueue(1).enqueue(3));
// console.log(queue.dequeue());

module.exports = {
    stack: Stack,
    queue: Queue
}