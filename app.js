// 1.1. What is the difference between a parameter and an argument?
// ans - parameters are what is listed when defining a function. arguments are the actual values that is entered to the function when it is executing it self.
// 1.2. Within a function, what is the difference between return and console.log?
// ans return is an output value that is stays in the system while console.log is just print info to the console

// 1. 3. What are the implications of the ability of a function to return a value?
// return finds a output value of a function and then stores it 
// 2. calculateCube
function calculateCube(num) {
    // YOUR CODE HERE
    let calculateC = num * num * num;
    return calculateC
}
console.log(calculateCube(3));



// 3. isAVowel
function isAVowel(letter) {
    // YOUR CODE HERE
    let vowelArray = ["a", "e", "i", "o", "u"]
    for ( let i = 0; i < vowelArray.length; i++) {
        if (letter === vowelArray[i]) {
            return `${letter} is a vowel`
        } else {
            return `${letter} is not a vowel`
        }
    }
}
console.log(isAVowel("a"));

// 4. getTwoLengths
let wordArray = [];
function getTwoLengths(word1, word2) {
    return wordArray = [word1.length, word2.length]
}

console.log(getTwoLengths("love", "crazy"))

// 5. sumArray
let myArray = [1, 2, 3, 7]
let sum = 0;
function sumArray(arr) {
    // YOUR CODE HERE
     for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i]
        console.log(sum)
    }
    return `Total sum of the array is ${sum}`
}
console.log(sumArray(myArray))

// 6.1 checkPrime
function checkPrime(num) {
    // YOUR CODE HERE
    if (num === 2) {
        return `true`
    } else if (num <= 1){
        return `false`
    } else if (num % 2 === 0) {
        return `false`
    } else {
        return `true`
    }
}

console.log(checkPrime(12))

// 6.2 printPrimes
function printPrimes(num) {
    // YOUR CODE HERE
    let primeArray = [2]
    for (let i = 3; i < num; i++){
       if (checkPrime(i)){
        myArray.push(i)
       }
    }
}
console.log(printPrimes(19))

// 7. printLongestWord
let newArray3 = ["banana", "porshi", "crazy", "Incomprehensibility"]
function printLongestWord(arr) {
    let result = '';
    for (let i = 0; i < arr.length; i++){
        let currentItem = arr[i];
        if (currentItem.length > result.length) {
            result = arr[i];
        }
        return result
    }
    // YOUR CODE HERE

}
console.log(printLongestWord(newArray3))

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