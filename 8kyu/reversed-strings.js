// Complete the solution so that it reverses the string passed into it.
//
// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

let someString = "world"

function solution(str){
    return str.split('').reverse().join('');
}

const string = solution(someString);
console.log(string);