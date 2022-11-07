// 1.1. What is the difference between a parameter and an argument?
//  A parameter is what you can choose to input into a function, and an argument is the actual value you give the parameter.

// 1.2. Within a function, what is the difference between return and console.log?
// `return` returns a result, but doesn't log it in the console unless that's also part of the function. `Console.log` prints whatever you'd like to the console, but conversely doesn't do any calculating or actually return a result.

// 1. 3. What are the implications of the ability of a function to return a value?
// You can make a function for a process that will need to be done many times, rather than having to re-write the same code each time.

// 2. calculateCube
function calculateCube(num) {
    // YOUR CODE HERE
    return Math.pow(num, 3)
}

// 3. isAVowel
function isAVowel(letter) {
    // YOUR CODE HERE
    if(letter.toLowerCase() === "a" || letter.toLowerCase() === "e" || letter.toLowerCase() === "i" || letter.toLowerCase() === "o" || letter.toLowerCase() === "u") {
        return true
    }
    else {
        return false
    }
}

// 4. getTwoLengths
function getTwoLengths(word1, word2) {
    // YOUR CODE HERE
    let results = [];
    results.push(word1.length);
    results.push(word2.length);
    return results
}

// 5. sumArray
function sumArray(arr) {
    // YOUR CODE HERE
    let result = 0;
    for(i=0;i<arr.length;i++) {
        result = result + arr[i]
    }
    return result
}

// 6.1 checkPrime
function checkPrime(num) {
    // YOUR CODE HERE
    let result = true;
    for(i=2;i<=Math.sqrt(num);i++) {
        if(num%i === 0) {
            result = false;
            break;
        }
    }
    return result
}

// 6.2 printPrimes
function printPrimes(num) {
    // YOUR CODE HERE
    let primes = [];
    for(i=2;i<=num;i++) {
        let primeCheck;
        for(j=2;j<=Math.sqrt(i);j++) {
            if(i%j === 0) {
                primeCheck = false;
                break;
            }
            else {
                primeCheck = true;
            }
        }
        if(primeCheck) {
            primes.push(i);
        }
    }
    return primes
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

console.log(checkPrime(73));
console.log(checkPrime(77));
console.log(printPrimes(97));

/*
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
*/