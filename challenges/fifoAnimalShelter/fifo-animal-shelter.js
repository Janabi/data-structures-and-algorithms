'use strict';

class Animal {
    constructor(type) {
        this.animalType = type;
    }
}

class AnimalShelter {
    constructor(){
        this.dog = [],
        this.cat = []
    }

    enqueue(animal) {
        let node = new Animal(animal);
        if(node.animalType === 'dog') {
            this.dog.unshift("dog")
            return this;
        } else if(node.animalType === 'cat'){
            this.cat.unshift('cat')
            return this;
        } else {
            return 'you did not insert a cat or dog.'
        }
    }

    dequeue(pref){
        if(pref !== 'dog' && pref !== 'cat') {
            return null;
        }
        if(pref === 'dog') {
            this.dog = this.dog.slice(1, this.dog.length);
            return this;
        }
        if(pref === 'cat') {
            this.cat = this.cat.slice(1, this.cat.length);
            return this;
        }
    }
}

// let data = new AnimalShelter();
// console.log(data.enqueue('dog').enqueue('dog').enqueue('cat'))
// console.log(data.dequeue('cat'))

module.exports = AnimalShelter;