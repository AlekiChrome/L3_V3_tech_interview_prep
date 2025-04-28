// Reverse a string
    // Attempt 1:
    // Initialize an empty string. I can use this to build the reversed string.
    // Using a for of loop I can iterate through the string, getting the individual elements/characters (looping over every individual character)
    // Using the reversed variable, I can now prepend each character as the loop executes
    // On each iteration, the current character (elem) is added to the front of the reversed string, reversing the string as it goes    
function reverseString(str) {
    let reverseChars = "";
    for (let elem of str) {
        reverseChars = elem + reverseChars;
    }
    return reverseChars;
}

// Attempt 2: 
    // Change the type of str to an array using the split method (this allows me to manipulate the argument using built in functions for an array data type)
    // Now that the argument is an array, I can use the reverse method to to swap the order of elements from the outside in
    // The order should now be where I want it, so I can revert the argument back to its orgignal data type of string and return it
// function reverseString(str) {
//     return str.split('').reverse().join('') 
// }


  
// Find max in array

// Attempt 1:
    // I can use the Math object to access the max function/method
    // Using the max method I can input a value(s) and get the max number from the selction of arguments/values
    // Using the spread operator it spreads the elems out in the array into individual values. This allows me to pass multiple arguments instead of an array to Math.max
function findMax(arr) {
    return Math.max(...arr)
}


// Attempt 2:
    // In the case the numbers are a huge amount and exceed the input for Math.max by itself
    // Initialize a variable to hold the result
    // USing the reduce method process the array one element at a time (reducing the value to a single value)
    // While it compare, it will return the larger of ultimately what will be two final compared numbers

// function findMax(arr) {
//     const max = arr.reduce((c, i) => Math.max(c, i), -Infinity);
//     return max
// }

// Check if palindrome

// Attempt 1:
    // Break string into an array of characters
    // reverse the order of elements in the array 
    // join the array back into a string
    // check if the original string is equal to the reversed version
// function isPalindrome(word) {
//     const reverse = word.split('').reverse().join('');
//     return word == reverse;
// }

// Attempt 2:
    // Create two pointers (initialize two variables)
    // One pointer starting at the beginning of the string (left)
    // One pointer starting at the end of the string (right)
    // create a loop to run as long as the left pointer is before the right pointer.
    // Inside the loop checks if the characters at the two pointers are different. If they are, we immediately return false because that means it’s not a palindrome.
    // If the loop finishes without finding any mismatches, that means every pair matched. Making it true

 
function isPalindrome(word) {
    let left = 0;
    let right = word.length - 1;
    while (left < right) {
        if (word[left] !== word[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}
    

module.exports = { reverseString, findMax, isPalindrome };