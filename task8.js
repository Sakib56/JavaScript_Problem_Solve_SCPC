/**
 * Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.
 */

function findSecondSmallest(arr) {
    let smallest = Infinity;
    let secondSmallest = Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < smallest) {
            secondSmallest = smallest;
            smallest = arr[i];
        } else if (arr[i] < secondSmallest && arr[i] !== smallest) {
            secondSmallest = arr[i];
        }
    }

    return secondSmallest;
}

const numbers = [5, 2, 7, 1, 9, 3];
const secondSmallest = findSecondSmallest(numbers);
console.log(secondSmallest); 