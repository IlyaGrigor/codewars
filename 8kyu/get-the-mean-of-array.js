// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.
//
//     Return the average of the given array rounded down to its nearest integer.
//
//     The array will never be empty.


const marksOfStudents = [2.2, 2, 2, 2];

function getAverage(marks){
    //TODO : calculate the downward rounded average of the marks array
    return marksAverage = Math.floor((marks.reduce((acc, curr) => acc + curr, 0)) / marks.length);
}

console.log(getAverage(marksOfStudents));