/*
// 1.1. What is the difference between a parameter and an argument?
    A parameter is a variable/item defined when declaring a function and an argument are these objects/items 
    that are local within the function and can be used.

// 1.2. Within a function, what is the difference between return and console.log?
    Return is used for the output/result of a function and is not printed to the console.  When a return is
    called the function stops.
    console.log will print the output/result to the console and will allow the function to move forward.

// 1. 3. What are the implications of the ability of a function to return a value?
    A function will take input and/or perform a procedure to determine the relationship between the arguments
    and/or perform a specific procedure and output the desired result.  Functions can be called numerous times 
    throughout your code without the need to write the same procedure over and over.
*/

// 2. calculateCube
function calculateCube(num) {
    console.log(Math.pow(num, 3));
}

// 3. isAVowel
function isAVowel(letter) {
    let vowels = ['a', 'e', 'i','o', 'u'];
    console.log(vowels.includes(letter.toLowerCase()));
}

// 4. getTwoLengths
function getTwoLengths(word1, word2) {
    // YOUR CODE HERE
}

// 5. sumArray
function sumArray(arr) {
    // YOUR CODE HERE
}

// 6.1 checkPrime
function checkPrime(num) {
    // YOUR CODE HERE
}

// 6.2 printPrimes
function printPrimes(num) {
    // YOUR CODE HERE
}

// 7. printLongestWord
function printLongestWord(arr) {
    // YOUR CODE HERE
}

// BONUS!

// 8. eulerFibo
function eulerFibo(num) {
    // YOUR CODE HERE
}

// 9. findNeedle
function findNeedle(arr) {
    // YOUR CODE HERE
}

// 10. sumPositive
function sumPositive(arr) {
    // YOUR CODE HERE
}

module.exports = {
    calculateCube,
    isAVowel,
    getTwoLengths,
    sumArray,
    checkPrime,
    printPrimes,
    printLongestWord,
    eulerFibo,
    findNeedle,
    sumPositive
};