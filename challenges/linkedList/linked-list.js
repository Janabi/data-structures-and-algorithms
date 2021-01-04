'use strict';

class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
      this.head = null;
    }

    append(value) {
      const node = new Node(value);
      
      if (!this.head) {
        // only if the head is null
        this.head = node;
        return this;
      }
  
      let currentNode = this.head;
  
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = node;
      return this;
    }

    insert(value) {
      const node = new Node(value);
      node.next = this.head;
      this.head = node;
      return this;
    }

    insertBefore(value, newVal) {
      const node = new Node(newVal);

      if(!this.head) {
        return 'There is no linked list exists';
      }

      let previous = null;
      let current = this.head;

      while(current) {
        if (current.value === value){
          if(!previous) {
            this.head = node;
          } else {
            previous.next = node;
          }
          node.next = current;
          return this;
        } else {
          previous = current;
          current = current.next;
        }
      }

      return `There is no such this value ${value} exist throughout the nodes in the linked list`;
    }

    insertAfter(value, newVal) {
      const node = new Node(newVal);

      if(!this.head) {
        return 'There is no linked list exists';
      }

      let current = this.head;
      while(current) {
        if (current.value === value) {
          node.next = current.next;
          current.next = node;
          return this;
        }
        current = current.next;
      }

      return `There is no such this value ${value} exist throughout the nodes in the linked list`;
    }

    kthFromEnd(k) {
      if (k < 0) {
        return 'it must be equal or more than zero'
      }

      let current = this.head;
      let length = 0;
      while(current) {
        length++;
        current = current.next;
      }

      if (k >= length || length === 1) {
        return "The given number is more than or equal to the length of linked list, or it has length of 1."
      }
      current = this.head;
      for (let i = length -1; i >= 0; i--) {
        if (i === k) {
          return current.value;
        }
        current = current.next;
      }
    }

    includes(value) {
        let current = this.head;
        if (current.value === value) {
            return true;
        }
        while(current.next) {
            current = current.next;
            if (current.value === value) {
                return true;
            }
        }
        return false;
    }

    toString() {
        let current = this.head;
        let val = '';
        while(current.next) {
            val += ' { ' + current.value.toString() + ' } ->'; 
            current = current.next;
            if (current.next === null) {
                val += ' { ' + current.value.toString() + ' } ->';
            }
        }
        val += ' NULL '

        return val;
    }
  }

// const list = new LinkedList();
// const data = list.insert(2).insert(4).insert(8);
// console.log(data)
// console.log(data.kthFromEnd(2))



module.exports = LinkedList;