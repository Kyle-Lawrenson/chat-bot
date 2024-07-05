// hello ChatGPT, imagine you are a beginner programmer. How would you swap the head with the tail of an array whilst keeping the middle element as the same, if it exists. then return the new array only using javascript

function swapHeadAndTail(arr) {
    // Check if the array has at least two elements
    if (arr.length <= 1) {
        return arr;
    }

    // Swap the first and last elements
    let temp = arr[0];
    arr[0] = arr[arr.length - 1];
    arr[arr.length - 1] = temp;

    return arr;
}

// Example usage:
console.log(swapHeadAndTail([1, 2, 3, 4, 5])); // Output: [5, 2, 3, 4, 1]
console.log(swapHeadAndTail([1, 2, 3, 4]));    // Output: [4, 2, 3, 1]
console.log(swapHeadAndTail([1]));             // Output: [1]
console.log(swapHeadAndTail([]));              // Output: []
