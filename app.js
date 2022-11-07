// 1.1. What is the difference between a parameter and an argument?
//the parameter is defined by a variable and the argument is the information supplied/passed to the parameter.

// 1.2. Within a function, what is the difference between return and console.log?
//console.log prints the results in the console for testing purposes - return ends the function and returns a value to the call/initializer
// 1. 3. What are the implications of the ability of a function to return a value?
// not sure that I understand the question. 
// - it means that a funtion can be used over and over in your code.
// - it means you can DO SOMETHING with the returned value - like, use it ( instead of  just console.loggin' it)

// 2. calculateCube
function calculateCube(num) {
    // YOUR CODE HERE
    let cubeCal = num * num * num
    return (cubeCal)
}
console.log(calculateCube(5))

// 3. isAVowel
function isAVowel(letter) {
    // YOUR CODE HERE
    if (letter == "a" || "e" || "i" || "o" || "u") {
        return true
    } else {
        return false
    }
}
console.log(isAVowel("A"))

// 4. getTwoLengths
function getTwoLengths(word1, word2) {
    // YOUR CODE HERE
    let newArray = [word1.length, word2.length]
    return newArray
}
console.log(getTwoLengths("Hank", "Hippopopalous"))

// 5. sumArray
function sumArray(arr) {
    // YOUR CODE HERE
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum
}
console.log(sumArray([1, 2, 3, 4, 5, 6]))

// 6.1 checkPrime
// Step One
// Write a function called checkPrime that will test whether a number is Prime. The function will return true (Boolean) if Prime, false if not. Hint: Check every number up to the square root. To do this, try a for loop.

function checkPrime(num) {
    // YOUR CODE HERE
    if (num === 1) {
        return ("pick another number")

    } else if (num > 1) {
        for (let i = 2; i < num; i++) {
            if (num % i == 0) {
                return false
            } else {
                return true
            }
        }
    }
}
console.log(checkPrime(1))


// 6.2 printPrimes
// Step Two
// Write another function called printPrimes that will print (console log) all the Primes up to an arbitrary limit. For example, if you invoke your function with printPrimes(97), it will print all the Prime numbers up to and including 97. This function can call on the previous checkPrime function.

function printPrimes(num) {
    // YOUR CODE HERE
    let topEnd = num
    for (let i = 1; i <= topEnd; i++) {
        let isPrime = checkPrime(i)

        if (isPrime) {
            console.log("i is here", i)
        }

    }

}
// i want to print only the prime numbers
printPrimes(97)



// 7. printLongestWord
function printLongestWord(arr) {
    // YOUR CODE HERE
    let longestWord = ""
    arr.forEach(function (word) {
        if (word.length > longestWord.length) {
            longestWord = word
        }
    })
    return longestWord
}


console.log(printLongestWord(["BoJackel", "Princess", "Diane", "a", "Max", "big", "blob"]))

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

// module.exports = {
//     calculateCube,
//     isAVowel,
//     getTwoLengths,
//     sumArray,
//     checkPrime,
//     printPrimes,
//     printLongestWord,
//     eulerFibo,
//     findNeedle,
//     sumPositive
// };