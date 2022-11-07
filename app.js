// 1.1. What is the difference between a parameter and an argument?

//Function Parameters are the placeholders after we call our function at the beginning,
// An argument is the real values that we pass into the parameters/ function

// 1.2. Within a function, what is the difference between return and console.log?

// Return statement will return a value to the function and end the function execution.
// Console.log is used for debugging and printing variables and data types to the console

// 1. 3. What are the implications of the ability of a function to return a value?

// A return value is found inside of a function and will return a value out of it.
// A function does not need the return value input to allow it to work. 
//


// 2. calculateCube

// function calculateCube(num) {
//     return Math.pow(num, 3);
// }
//  console.log(calculateCube(5));


// 3. isAVowel

// function isAVowel(letter) {
//     const vowels = ["A", "E", "I", "O", "U"];
//     for ( let i  = 0; i < vowels.length; i++ ) {
//       if (vowels[i] === letter.toLowerCase()) {
//         return true;
//       }
//     }
//     return false;
//   }
//         console.log(isAVowel("p"));



// 4. getTwoLengths

// function getTwoLengths(word1, word2) {
//     return[word1.length, word2.length]
// }
// console.log(getTwoLengths("Gabriel", "Cruz"));


// 5. sumArray

// function sumArray(arr) {
//     const lengths = [];
//     for (let i = 0; i < arr.length; i++ ){
//         lengths.push(arr[i].length);
//       }
//       return lengths;
// }
// console.log(sumArray([1, 2, 3, 4, 5, 6]));



// // 6.1 checkPrime

// function checkPrime(num) {
//     // YOUR CODE HERE
// }

// // 6.2 printPrimes

// function printPrimes(num) {
//     // YOUR CODE HERE
// }



// 7. printLongestWord

function printLongestWord(arr){
let longest = '';
for (var i= 0; i < arrayOfStrings.length; i++ ){
  if (arrayOfStrings[i].length > longest.length ){
    longest = arrayOfStrings[i];
  }
}
return longest;
}
console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));



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