// Given: a sequence of different type of values (number, string, boolean). You should return an object with a separate properties for each of types presented in input. Each property should contain an array of corresponding values.
//
//     keep order of values like in input array
// if type is not presented in input, no corresponding property are expected
// So, for this input:

// ['a', 1, 2, false, 'b']

// expected output is:
//
// {
//     number: [1, 2],
//         string: ['a', 'b'],
//     boolean: [false]
// }

function separateTypes(input) {
    const outputObj = {
        number: [],
        string: [],
        boolean: []
    };
    for (let i = 0; i < input.length; i++) {
        typeof input[i] === "number" ? outputObj.number.push(input[i]) :
            typeof input[i] === "string" ? outputObj.string.push(input[i]) : outputObj.boolean.push(input[i]);
    }
    for (let key in outputObj) {
        if (outputObj[key].length === 0) {
            delete outputObj[key];
        }
    }
    return outputObj;
}