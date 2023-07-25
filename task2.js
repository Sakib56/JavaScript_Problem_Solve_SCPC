/*Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array. 
Example Input: [2, -5, 10, -3, 7] Example Output: 19  */


function sumOfPositiveNumbers(inputArray) {
    let sum = 0;
    
    for (let i = 0; i < inputArray.length; i++) {
      if (inputArray[i] > 0) {
        sum += inputArray[i];
      }
    }    
    return sum;
  }
  
  const numbers = [2, -5, 10, -3, 7];
  const result = sumOfPositiveNumbers(numbers);
  console.log(result); 
  