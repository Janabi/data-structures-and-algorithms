'use strict';

const multiBracketValidation = input => {
    const openBrackets = ['(', '{', '['];
    const closeBrackets = [')', '}', ']'];

    let newInput = input.split('');
    if (newInput.length < 2) {
        return false;
    }
    let arr = [];
    newInput.forEach((value, index)=>{
        if(openBrackets.includes(value) || closeBrackets.includes(value)) {
            arr.push(value);
        }
    })

    if(arr.length % 2 === 0 && arr.length > 0) {
        let newArr = arr.filter((value,index)=>{
                if (openBrackets.includes(value)) {
                    if(openBrackets.indexOf(value) === openBrackets.indexOf(arr[index-1])) {
                        return true;
                    }
                    if(openBrackets.indexOf(value) === openBrackets.indexOf(arr[index+1])) {
                        return true;
                    }
                    if(openBrackets.indexOf(value) === closeBrackets.indexOf(arr[index+1])) {
                        return true;
                    }
                }
                if (closeBrackets.includes(value)) {
                    if(closeBrackets.indexOf(value) === closeBrackets.indexOf(arr[index-1])) {
                        return true;
                    }
                    if(closeBrackets.indexOf(value) === closeBrackets.indexOf(arr[index+1])) {
                        return true;
                    }
                    if(closeBrackets.indexOf(value) === openBrackets.indexOf(arr[index-1])) {
                        return true;
                    }
                }
            
        })
        
        if (newArr.length % 2 === 0 && newArr.length > 0) {
            return true;
        } 
        return false;
    } else {
        return false;
    }
}

// console.log(multiBracketValidation('{}'));
// console.log(multiBracketValidation('{}(){}'));
// console.log(multiBracketValidation('()[[Extra Characters]]'));
// console.log(multiBracketValidation('(){}[[]]'));
// console.log(multiBracketValidation('{}{Code}[Fellows](())'));
// console.log(multiBracketValidation('[({}]'));
// console.log(multiBracketValidation('(]('));
// console.log(multiBracketValidation('{(})'));

module.exports = multiBracketValidation;