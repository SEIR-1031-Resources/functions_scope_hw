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
        if (letter = 'a') {
            return true
        } else if (letter = 'e') {
            return true
        } else if (letter = 'i') {
            return true
        } else if (letter = 'o') {
            return true
        } else if (letter = 'u') {
            return true
        } else {
            return false
        }
    }
    console.log(isAVowel('a'))

// 4. getTwoLengths
function getTwoLengths(word1, word2) {
    return [word1.length, word2.length]
}
console.log(getTwoLengths('Hank', "California"))
// 5. sumArray
function sumArray(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
          sum += arr[i]
     }
     return sum
 }
    console.log(sumArray([1, 2, 3, 4, 5, 6]))

// 6.1 checkPrime
function checkPrime(num) {
    if (num < 2) return false
    let sqRoot = Math.sqrt(num)
    for (let i = 2; i <= sqRoot; i++) {
        if (num % i === 0) {
            return false
        }
    }
    return true
}
console.log(checkPrime())

// 6.2 printPrimes
function printPrimes(num) {
    for (let i= 2; i <= num; i++) {
        if (checkPrime(i)) console.log(i)
    }
}
console.log(printPrimes(97))

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