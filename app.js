// 1.1. What is the difference between a parameter and an argument?
// Parameters are variables that are used within a function, Arguments are values that are passed into Function's parameters. 
// 1.2. Within a function, what is the difference between return and console.log?
// Return will return what is defined and end the execution of a function. Console.log will print the value within the terminal or browser console.
// 1. 3. What are the implications of the ability of a function to return a value?
// Return will exit the function and return the value 

// 2. calculateCube
function calculateCube(num) {
    let volume = num ** 3
    return volume
}

console.log(`\n 2. calculateCube`);
console.log(calculateCube(5));

// 3. isAVowel
function isAVowel(letter) {
    const vowels = ['a', 'e', 'i', 'o', 'u',]
    let check = vowels.includes(letter)
    return check
}

console.log(`\n 3. isAVowel`);
console.log(isAVowel('e'))

// 4. getTwoLengths
function getTwoLengths(word1, word2) {
    const wordLengths = []
    let length1 = word1.length
    wordLengths.push(length1)
    let length2 = word2.length
    wordLengths.push(length2)
    return wordLengths
}
console.log(`\n 4. getTwoLen`);
console.log(getTwoLengths('hi', 'bye'))

// 5. sumArray
function sumArray(arr) {
    let sumOfArray = 0;
    for (let i = 0; i < arr.length; i++){
        sumOfArray += arr[i]
    }
    return sumOfArray
}

console.log(`\n 5. sumArray`);
console.log(sumArray([1, 2, 3, 4, 5, 6]))

// 6.1 checkPrime
function checkPrime(num) {
    if (num === 1 || num === 0){
        return false
    } else if (num > 1) {
        for (let i = 2; i < num; i++){
            if (num % i !== 0) {
                return true
            } else {
                return false 
            }
        }
    }
}

// 6.2 printPrimes
function printPrimes(num) {
    let primeNumbers = []
    for(let j = 1; j <= num; j++) {
    if(checkPrime(j)){
        primeNumbers.push(j)
        // console.log(j)
    } 
  }
  return primeNumbers
}

console.log(`\n 6.1 & 6.2 checkPrime`);
console.log(checkPrime(11))
console.log(printPrimes(11))

// 7. printLongestWord
function printLongestWord(arr) {
    arr.sort((a,b) => a.length - b.length)
    let longestWord = arr.pop()
    return longestWord
}

console.log(`\n 7. printLongestWord`);
console.log(printLongestWord(["BoJack", "Princess", "TheQuickBrownFoxJumps", "Diane", "a", "Max", "Peanutbutter", "big", "blob"]));

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