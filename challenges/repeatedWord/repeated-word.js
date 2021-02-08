'use strict';

const {HashTable} = require('../hashmap/hashtable')

const repeatedWord = (str) =>{
    const strArr = [];
    let len = 0;
    let word = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] === " ") {
            len++;
            word = "";
            continue;
        }
        word += str[i].toLowerCase();
        strArr[len] = word;
    }
    if(strArr.length < 2) return null;
    let hashtable = new HashTable(strArr.length);
    for (let i =0; i < strArr.length; i++) {
        hashtable.add(strArr[i], strArr[i]);
        if(hashtable.get(strArr[i]).length > 1) return strArr[i];
    }
    return null;
}


// console.log(repeatedWord("It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness,"));

module.exports = repeatedWord;