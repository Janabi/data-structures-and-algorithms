function arrayReverse(arr) {
    if (!Array.isArray(arr)) {
        return 'This is not an array! Please try again';
    } else {
        let arrReversed = [];
        arr.forEach((value, index)=>{
            arrReversed.push(arr[arr.length - 1 - index]);
        });
        return arrReversed;
    }
}

arrayReverse([1, 2, 3, 4, 5, 6]);
arrayReverse([89, 2354, 3546, 23, 10, -923, 823, -12]);
arrayReverse([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199]);
arrayReverse(null);
arrayReverse({'Car': 'BMW'});