/**
 * Task 4: Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.

 Example Input: ([1, 3, 6, 8, 11, 15], 9) Example Output: [1, 2] (numbers at indices 1 and 2: 3 + 6 = 9)
 */
function findTwoNumbers(array, target) {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] + array[j] === target) {
                return [i, j];
            }
        }
    }
    return null;
}
const sortedArray = [1, 3, 6, 8, 11, 15];
const targetValue = 9;
const result = findTwoNumbers(sortedArray, targetValue);
console.log(result);
