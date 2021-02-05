'use strict';

const insertionSort = (arr) =>{
    for (let i = 0; i < arr.length; i++){
        let j = i -1; 
        let temp = arr[i]; 
        if (typeof temp !== 'number') return 'Array should not include rather than number!';

        while(j >= 0 && temp < arr[j]){
            arr[j + 1] = arr[j]
            j = j - 1
        }
        arr[j+1] = temp;
    }
    return arr;
}

// let arr = [8,4,23,42,16,15];
// console.log(insertionSort(arr));

module.exports = insertionSort;
