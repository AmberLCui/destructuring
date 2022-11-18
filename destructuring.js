// Es2015 Object Destructuring
let obj = {
    numbers: {
        a: 1,
        b: 2
    }
};
const { a, b } = obj.numbers;

//ES2015 One-Line Array Swap with Destructuring
let arr = [1, 2];
[arr[0], arr[1]] = [arr[1], arr[0]];

//raceResults
const raceResults = ([first, second, third, ...more]) => ({ first, second, third, more });