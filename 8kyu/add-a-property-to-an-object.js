// Write a function that adds a named property to an object. It must be possible to set the property to a new value. If the property already exists on the object, and error should be thrown.


let testObject = {
    property1: "someValue1",
    property2: "someValue2",
    property3: "someValue3"
}

function addProperty (obj, prop, value) {
    if (obj.hasOwnProperty(prop)) {
        throw new Error(`Property "${prop}" already exists`);
    } else {
        obj[prop] = value;
    }
    return obj;
}

try {
    const result = addProperty(testObject, "property1", "someValue4");
    console.log(result);
} catch (error) {
    console.log("Error!", error.message);
}


// console.log("Program continue execution");
//
// testObject.propertyNew = "someValueTest";
// console.log(testObject);


//РЕШЕНИЕ НА ЗАЦЕН:
// function addProperty(obj, prop, value) {
//     if (prop in obj) throw new Error()
//     obj[prop] = value