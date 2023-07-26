/* Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method. 
Example Input: "hello world" Example Output: "dlrow olleh"*/


function reverseString(inputString) {
    let reversedStr = '';
    for (let i = inputString.length - 1; i >= 0; i--) {
        reversedStr += inputString[i];
    }
    return reversedStr;
}
const input = "Programming Hero";
const result = reverseString(input);
console.log(result); 