'use strict';

function binarySearch(arr, key) {
    if (!Array.isArray(arr) || typeof key !== "number") {
        return "This is not an array or a number type. Please try again!"
    } else {
        let search = arr.reduce((acc, val, ind)=>{
            if(key === val) {
                acc[0] = true;
                acc[1] = ind;
            }
            return acc;
        }, [false, -1])
        return search[1];
    }
}

console.log(binarySearch([4,8,15,16,23,42], 15))
console.log(binarySearch([11,22,33,44,55,66,77], 90))
console.log(binarySearch([1,2,4], "hi"))
console.log(binarySearch([1,2,3], 4))

module.exports = binarySearch;