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

    insert(value) {
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
// console.log(list)
// const data = list.insert(2);
// console.log(data.head)
// console.log(data.includes(10));
// console.log(data.toString());


module.exports = LinkedList;