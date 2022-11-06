// 1.1. What is the difference between a parameter and an argument?
/* Parameters are like a place holder for the argument. The arguements are the actual values
 for example: 
 function mathIsHard(num1, num2){
    return num1 * num2
 }
 console.log(mathIsHard(20,53))

 the parameter is (num1,num2) && the arguement is mathIsHard(20,53)
 */
// 1.2. Within a function, what is the difference between return and console.log?
/* console.log is a funciton that logs the arguments you pass to the browser && a return is like a set of intructions for the function. */
// 1. 3. What are the implications of the ability of a function to return a value?
/* I am not sure I fully understood the question, but I believe when a function returns a value the return statement has been executed.*/
// 2. calculateCube
function calculateCube(num) {
    // YOUR CODE HERE
    return (num*num*num)
}
console.log(calculateCube(5))
// 3. isAVowel
function isAVowel(letter) {
    // YOUR CODE HERE
    if (letter==='a'||letter === 'e' || letter==='i' || letter === 'o' || letter === 'u') {
        return true
    } else {
        return false
    }
}
console.log(isAVowel('a'))

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