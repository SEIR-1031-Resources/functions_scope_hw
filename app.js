// 1.1. What is the difference between a parameter and an argument?
//ANSWER: The parameter is a value for the funciton and the argument is what goes into the parameter so the function and run.
// 1.2. Within a function, what is the difference between return and console.log?
//ANSWER: Functions ALWAYS return something 100% of the time so every funciton needs it to push out the value of the funciton. While console log shows you the out put of the code and acts to test it but shouldnt stay in your final code.
// 1. 3. What are the implications of the ability of a function to return a value?
//ANSWER: I think its because we can reuse a function multiple times.
// 2. calculateCube
function calculateCube(num) {
   return num * num * num
}
console.log(calculateCube(5))
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