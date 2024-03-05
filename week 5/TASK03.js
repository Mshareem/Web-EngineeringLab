function applyFunction(array, func) {
    let resultArray = [];
    for (let i = 0; i < array.length; i++) {
        resultArray.push(func(array[i]));
    }
    return resultArray;
}

// Example usage:
let numbers = [1, 2, 3];
let doubleNumbers = applyFunction(numbers, function(x) {
    return x * 2;
});

console.log(doubleNumbers); // Output: [2, 4, 6]
