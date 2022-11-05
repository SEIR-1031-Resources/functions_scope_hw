// // 1.1. What is the difference between a parameter and an argument?
// let parameter = 'parameters are listed in the functions definition and basically act as a method of declaration for the argument'

// let argument = 'arguments are the values that pass through the function when the function is invoked. This will follow the format of the parameter.'

// // 1.2. Within a function, what is the difference between return and console.log?
// let consoleLog = 'console.log will log the output, but will continue to execute the rest of the code until a return statement is ran'

// let return = 'return statements will log the output, stop the execution of the function code, and let other codes use the value passed by the return.'

// // 1. 3. What are the implications of the ability of a function to return a value?
// 'A function has the ability to return a value if you call the function outside of the function, and if your function provides an output.'

// 2. calculateCube
// function calculateCube(num) {
//        let cubed = num ** 3
//        return cubed
// }
// console.log(calculateCube(5));


// 3. isAVowel
// function isAVowel(letter){
//     let vowels = ['a', 'e', 'i', 'o', 'u']
//     if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter ==='u'){
//         return true
//         } else {return false}
//     }
// console.log(isAVowel('a'));

// 4. getTwoLengths
function getTwoLengths(word1, word2) {
    let length1 = word1.length;
    let length2 = word2.length;
    return [length1, length2]
}
console.log(getTwoLengths("Hank", "Hippopopalous"))

// // 5. sumArray
// function sumArray(arr) {
//     // YOUR CODE HERE
// }

// // 6.1 checkPrime
// function checkPrime(num) {
//     // YOUR CODE HERE
// }

// // 6.2 printPrimes
// function printPrimes(num) {
//     // YOUR CODE HERE
// }

// // 7. printLongestWord
// function printLongestWord(arr) {
//     // YOUR CODE HERE
// }

// // BONUS!

// // 8. eulerFibo
// function eulerFibo(num) {
//     // YOUR CODE HERE
// }

// // 9. findNeedle
// function findNeedle(arr) {
//     // YOUR CODE HERE
// }

// // 10. sumPositive
// function sumPositive(arr) {
//     // YOUR CODE HERE
// }

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