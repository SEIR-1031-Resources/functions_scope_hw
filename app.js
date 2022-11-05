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
    vowels = ['a','e','i','o','u','y']
    if (vowels.indexOf(letter) > -1) {
        return true
    } else {
        return false
    }
    }
// console.log(isAVowel("a"));

// 4. getTwoLengths
function getTwoLengths(word1, word2) {
    return [word1.length,word2.length]
}
// console.log(getTwoLengths("Hank", "Hippopopalous"));

// 5. sumArray
function sumArray(arr) {
    let result = 0
    for (i in arr) {
      result += arr[i]
    } return result
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
    winnerIndex = 0;
    for (let i in arr) {
    if (arr[i].length === winnerIndex) {
        continue 
    }
        else if (arr[i].length > winnerIndex) {
        winnerIndex = i
    } 
    } return arr[winnerIndex]
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