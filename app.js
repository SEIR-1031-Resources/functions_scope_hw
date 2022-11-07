// 1.1. What is the difference between a parameter and an argument?

//Parameters are placeholders for inputs of a function, and are assigned at the top of a function.
//Arguments are the values assigned when the function is called.

// 1.2. Within a function, what is the difference between return and console.log?

//'console.log' prints a value into the console, while 'return' sends a value to where the function is called.
//'console.log' is mainly for debugging.

// 1. 3. What are the implications of the ability of a function to return a value?

//'return' gives back a value from the function that can be used in the code.

// 2. calculateCube
function calculateCube(num) {
    return num * num * num
}
console.log(calculateCube(5));

// 3. isAVowel
function isAVowel(letter) {
    // YOUR CODE HERE
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