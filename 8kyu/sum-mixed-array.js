// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
//
//     Return your answer as a number.

const mixedArray = [1, "2", 3, "4", 5, "6"];

function sumMix(x){
   const numArray = [];
   for (let i = 0; i < x.length; i++) {
       if (typeof x[i] === "number" ) {
           numArray.push(x[i]);
       } else {
           if (typeof x[i] === "string") {
               x[i] = Number(x[i])
               numArray.push(x[i]);
           }
       }
   }
    return sum = numArray.reduce((acc, curr) => acc + curr, 0);
}

const returnedArray = sumMix(mixedArray);
console.log(returnedArray)



// function sumMix(x){
//     let sum;
//     return sum = +(x.reduce((acc, curr) => acc + curr, 0));
// }
//
// const returnedArray = sumMix(mixedArray);
// console.log(returnedArray)

