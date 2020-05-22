//I don't know if I did the code the way it was expected in the exercise, but I've got the expected results...
//creating the function logFive
function logFive(arr) {
    for(let i = 0; i < Math.min(5, arr.length); i++) {
        console.log(arr[i]);
    };
};

//creating class ArraySeq
class ArraySeq {
    constructor(arr) {
        return arr;
    }
};

//creating class RangeSeq
class RangeSeq {
    constructor(a, b) {
        return Array.from(Array(b + 1).keys()).slice(a)
        }
};

//tests
logFive(new ArraySeq([1, 2]));
// → 1
// → 2
logFive(new RangeSeq(100, 1000));
// → 100
// → 101
// → 102
// → 103
// → 104
