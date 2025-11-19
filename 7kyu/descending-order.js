// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
//
//     Examples:
// Input: 42145 Output: 54421
//
// Input: 145263 Output: 654321
//
// Input: 123456789 Output: 987654321


function descendingOrder(n){
    const digits = n.toString().split("");
    const maxDigit = digits.reduce ((maxDigit, digit) => digit > maxDigit ? digit : maxDigit, "0");
    const maxDigits = digits.filter (digit => digit === maxDigit);
    const restDigits = digits.filter (digit => digit !== maxDigit).sort ((a, b) => b - a);
    const result = [...maxDigits, ...restDigits].join("");
    return Number(result);
}

