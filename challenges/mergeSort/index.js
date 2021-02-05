'use strict';

const merge = (left, right, arr) =>{
    let i = 0, j = 0, k = 0;
    while(i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            arr[k] = left[i];
            i++;
        }else {
            arr[k] = right[j];
            j++;
        }    
        k++;
    }

    while(i < left.length){
        arr[k] = left[i];
        k++;
        i++;
    }
    while(j < right.length){
        arr[k] = right[j];
        k++;
        j++;
    }
    return arr;
}

const mergesort = (arr) => {
    console.log(arr)
    let n = arr.length;
    if(n < 2) return arr;

    if (n > 1) {
        let mid = Math.floor(n/2);
        let left = [], right = []
        for (let i = 0; i < mid; i++){
            left.push(arr[i])
        }
        for (let j = mid; j < n; j++){
            right.push(arr[j])
        }
        mergesort(left);
        mergesort(right);
        return merge(left, right, arr);
        
    }

}

// console.log(mergesort([8,4,23,42,16,15]));

module.exports = mergesort;