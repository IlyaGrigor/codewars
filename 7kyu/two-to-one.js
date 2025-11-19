// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string (alphabetical ascending), the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.
//
//     Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"
//
// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"

function longest(s1, s2) {
    let newString= [];
    let twoStringArray = (s1 + s2).split("")
    console.log(twoStringArray);
    for (let i = 0; i < twoStringArray.length; i++) {
        if (!newString.includes(twoStringArray[i])) {
            newString.push(twoStringArray[i]);
        }
    }
    return newString.sort().join("");
}

let result = longest(a, b);
console.log(result)










// function litres(time) {
//     return Math.floor(time * 0.5)
// }
//
// const resultin = litres(3);
// console.log(resultin);









// const reverseSeq = n => {
//     if (n < 0) {
//         for (i = 5; i >= 1; i--) {
//             newArray.push(i)
//         }
//     }
//     return newArray;
}