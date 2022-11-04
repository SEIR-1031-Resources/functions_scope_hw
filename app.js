// 1.1. What is the difference between a parameter and an argument?
    // a parameter is a function's local placeholder variable through which an argument is passed; 
    // and argument is the data that gets pushed into a function's parameter
    
    // it's like a caterpiller (argument) goes through the cocoon (parameter) to become the butterfly (result of the function)

// 1.2. Within a function, what is the difference between return and console.log?
    // return sends data out to whatever method invoked the function
    // console.log only writes it in the console -- doesn't store the info anywhere
    
// 1. 3. What are the implications of the ability of a function to return a value?
    // can store the data a function has transformed into a variable
    // and then you can do more things to/with that data
    // a la multiple functions manipulating data amongst themselves

// 2. calculateCube
function calculateCube(num) {
    return num**3
}
// console.log(calculateCube(5));

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