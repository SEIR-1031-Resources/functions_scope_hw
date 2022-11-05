// 1.1. What is the difference between a parameter and an argument?
 //Parameter is the kind of data needed to be passed through the function, the data is the data being passed through
// 1.2. Within a function, what is the difference between return and console.log?
//a return statement stops the execution of the function code, and allows other code to use the value passed by the return
//console.log will log the return of the function***?
// 1. 3. What are the implications of the ability of a function to return a value?
//parameters are an implication, because they are place holders for future values.

// 2. calculateCube
function calculateCube(num) {
    let cube= num * num * num;
    return cube;
}
console.log(calculateCube(5));

// 3. isAVowel
function isAVowel(letter) {
    let vowels = 'aeiou' 
    console.log(vowels.indexOf('e'))
  
}
console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "blob"]));
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
    for (let i =2; i<= Math.sqrt(num); i++) {
        if (num % i === 0){
            return false;
    };
};

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