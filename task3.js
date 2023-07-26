/**
 * Write a JavaScript program to find the most frequent element in an array and return it. 
Example Input: [3, 5, 2, 5, 3, 3, 1, 4, 5] Example Output: 3
 */

function findMostFrequentElement(inputArray) {
    const frequencyMap = {};
    let maxFrequency = 0;
    let mostFrequentElement;

    for (let i = 0; i < inputArray.length; i++) {
        const element = inputArray[i];
        frequencyMap[element] = (frequencyMap[element] || 0) + 1;

        if (frequencyMap[element] > maxFrequency) {
            maxFrequency = frequencyMap[element];
            mostFrequentElement = element;
        }
    }

    return mostFrequentElement;
}

const numbers = [3, 2, 5, 5, 3, 3, 1, 4, 5];
const result = findMostFrequentElement(numbers);
console.log(result);
