// I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.
//
//     P.S. Each array includes only integer numbers. Output is a number too.

const array1 = [1, 2, 3];
const array2 = [1, 2, 4];

function arrayPlusArray(arr1, arr2) {
    const newArray = [];
    newArray.push(...arr1, ...arr2);
    return newArray.reduce((a, b) => a + b);
}

console.log(arrayPlusArray(array1, array2));

// function arrayPlusArray(arr1, arr2) {
//     return arr1.concat(arr2).reduce((acc, cur) => acc + cur);
// }