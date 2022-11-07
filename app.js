// 1.1. What is the difference between a parameter and an argument?
//A parameter is a named variable passed into a function. And an Argument is the value that are declared within a function when the function is called. Parameter variables are used to import arguments into function.
// 1.2. Within a function, what is the difference between return and console.log?
// console. log is the equivalent of print in other languages. Whereas, return is used for returning values from a function.
// 1. 3. What are the implications of the ability of a function to return a value?
// The return statement stops the execution of a function and returns a value. When the function completes (finishes running), it returns a value, which is a new string with the replacement made. 
 "Commit 1 - Verbal questions"
// 2. calculateCube
//function calculateCube(num) {
        let calculateCube= function(num){
        return num*num*num;
    }
console.log(calculateCube(5));
 
"Commit 2- Cube Calculation"


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