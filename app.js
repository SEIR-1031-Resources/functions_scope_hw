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
    throughout your code without the need to write the same procedure over and over.  When return is used 
    within a function the function is stopped and the result is provided to where it is called in the code.
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
    return [word1.length, word2.length];
}

// 5. sumArray
function sumArray(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum = arr[i] + sum;
    }

    return sum;
}

// 6.1 checkPrime
function checkPrime(num) {
    if (num === 1) {
        return false;
    } else if (num > 0) {
        for (let i = 2; i < num; i++) {
            if (num % i == 0) {
                return false;
            }
        }
    } else {
        return false;
    }

    return true;
}
console.log(checkPrime(2)); // true
console.log(checkPrime(1)); // false
console.log(checkPrime(-5)); // false
console.log(checkPrime(22)); // false
console.log(checkPrime(27)); // false
console.log(checkPrime(21)); // false
console.log(checkPrime(200)); // false
console.log(checkPrime(2199)); // false
console.log(checkPrime(47)); // true
console.log(checkPrime(43)); // true

// 6.2 printPrimes
function printPrimes(num) {
    for (i = 2; i <= num; i++) {
        if (checkPrime(i)) {
            console.log(i);
        }
    }
}

printPrimes(101);

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