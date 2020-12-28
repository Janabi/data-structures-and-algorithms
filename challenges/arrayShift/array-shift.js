function insertShiftArray(arr, num) {
    if(!Array.isArray(arr) || typeof num !== "number"){
        return "This is not a data type of array or number"
    } else {
        let checkStr = arr.reduce((acc,val)=>{
            if(typeof val !== "number") {
                acc = false;
            }
            return acc;
        }, true)
        if(checkStr) {
            let newArr = [];
            arr.forEach((value, index)=>{
                newArr.push(value);
                if(num > value && num < arr[index+1]){
                    newArr.push(num)
                }
            })
            return newArr;
        } else {
            return "the array should not include data type other than numbers";
        }
    }
}

console.log(insertShiftArray([2,4,6,8], 5))
console.log(insertShiftArray([4,8,15,23,42], 16))
console.log(insertShiftArray([1, "hi"], 12))
console.log(insertShiftArray([1,2,3], "hi"))