// You are going to be given a non-empty string. Your job is to return the middle character(s) of the string.
//
//     If the string's length is odd, return the middle character.
// If the string's length is even, return the middle 2 characters.

// "test" --> "es"
// "testing" --> "t"
// "middle" --> "dd"
// "A" --> "A"

//1. разложить буквы строки на массив
//2. проверить четность/нечетность (%2), если четное => вернуть 2 средних символа, нечетное => вернуть средний (тернарник ?)
//3.



const inputString = "test";

function getMiddle(s) {
    const inputStringMid = Math.floor(s.length / 2);
    return s.length % 2 === 0 ? s[inputStringMid - 1] + s[inputStringMid] : s[inputStringMid];
}

const result = getMiddle(inputString);
console.log(result);