// 1.1. What is the difference between a parameter and an argument?
//  a parameter is used when writing the function and an argument is used when invoking the function.
// 1.2. Within a function, what is the difference between return and console.log? return will return the value the function gives while console.log will write what is happening in the console.

// 1. 3. What are the implications of the ability of a function to return a value? a return stops the function and returns what the function was intended to do.

// 2. calculateCube
// function calculateCube(num) {
//     return Math.pow(num, 3)
// }
// console.log(calculateCube(5))
// 3. isAVowel
// function isAVowel(letter) {
//     if(letter.toLowerCase() === "a" || letter.toLowerCase() === "e"){
//         return true;
//     }else if (letter.toLowerCase()=== "i" || letter.toLowerCase() === "o"){
//         return true;
//     }else if(letter.toLowerCase() ==="u"){
//         return true;
//     }else{
//         return "Not a Vowel"
//     }
// }
// console.log(isAVowel("b"))
// 4. getTwoLengths
// function getTwoLengths(word1, word2) {
//     let answer = [word1.length, word2.length]
//     return answer
// }
// console.log(getTwoLengths("Hank","Hippopopalous"))
// 5. sumArray
let stuff = [1,2,3,4,5,6]
function sumArray(arr) {
    for(i = 0;i<arr.length;i++){
        answer = arr[i]
        realAnswer = answer + i;
        return realAnswer
    };
};
console.log(sumArray(stuff))
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