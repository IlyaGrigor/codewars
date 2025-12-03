// We need a function that can transform a string into a number. What ways of achieving this do you know?
//
//     Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.

// "1234" --> 1234
// "605"  --> 605
// "1405" --> 1405
// "-7" --> -7

// const stringToConvert = "-1234";

// const stringToNumber = function(str){
//     let result = 0;
//     let isNegative = false;
//     if (str[0] === "-") {
//         isNegative = true;
//         for (let i = 1; i < str.length; i++) {
//             let num = str[i];
//             num = Number(num);
//             result = (result * 10) + num;
//         }
//     } else {
//         for (let i = 0; i < str.length; i++) {
//             let num = str[i];
//             num = Number(num);
//             result = (result * 10) + num;
//         }
//     }
//     if (isNegative) {
//         return result * (-1)
//     } else {
//         return result;
//     }
// }

// const test = stringToNumber(stringToConvert);
// console.log(test);



const stringToConvert = "1234";


const stringToNumber = function (str) {
    let result = 0;
    let isNegative = false;
    let startIndex = 0;

    if (str[0] === "-") {
        isNegative = true;
        startIndex = 1;
    }

    for (let i = startIndex; i < str.length; i++) {
        let num = str[i];
        num = Number(num);
        result = (result * 10) + num;
    }

    if (isNegative) {
        return result * (-1)
    } else {
        return result;
    }
}

const test = stringToNumber(stringToConvert);
console.log(test);


// const stringToNumber = function (str) {
//     return parseInt(str)
// }
//
// const test = stringToNumber(stringToConvert);
// console.log(test);
