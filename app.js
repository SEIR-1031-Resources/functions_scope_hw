// 1.1. What is the difference between a parameter and an argument?
// a function parameter is the defintion of a function
//a function argument is the value which passes through a function
// 1.2. Within a function, what is the difference between return and console.log?
// return displays the value from a function, while console.log pri/nts variables and messages.
// 1. 3. What are the implications of the ability of a function to return a value?
// the implications are that the function has completed its task when returning a vlaue, allowing the computer to understand the argument. 

// 2. calculateCube
// i messed up sorry

function calculateCube(num) {
    // YOUR CODE HERE
   return num * num * num
 }
 console.log(calculateCube(5));
 
 
 
 // 3. isAVowel
 function isAVowel(letter) {
     // YOUR CODE HERE
     // let vowel = 'aeiouAEIOU';
     for(let x = 0; x < letter.length; x++) {
         if (letter === 'aeiouAEIOU') {
             return 'true';
         } else {
             return 'false';
         }
     }
 } 
             console.log(isAVowel("k"));
 
 
 // 4. getTwoLengths
 function getTwoLengths(word1, word2) {
     // YOUR CODE HERE
      return [word1.length, word2.length];
 
 }
 console.log(getTwoLengths("Hank", "Hippopopalous"));
 
        // over complicated extra code that works just not properly, want to keep to reference in the future.
         // for(let i = 0; i < word1.length; i++) {
     //     if (word1 === 'Hank') {
     //         return word1.length; 
     // for(let i = 0; i < word2.length; i++) {
     //     } if (word2 === 'Hippopopalous') {
     //         return word2.length;
     //         }
     //     }
     // }
 
 
         // function getTwoLengths(word1, word2) {
         //     // YOUR CODE HERE
         //     let words = 'Hank, Hippopopalous';
         //     for(let i = 0; i < words.length; x++) {
         //         if (word1 === 'Hank, Hippopopalous') {
         //             return words.length;
         //         } if (word2 === 'Hippopopalous') {
         //         return words.length;
         //        }
         //     }
         // }
         //         console.log(getTwoLengths("Hank", "Hippopopalous"));
 
 // 5. sumArray
 
 function sumArray(arr) {
     let sum = 0;
     for(let i = 0; i < arr.length; i++) {
         sum += arr[i]
     }
     return sum
 }
     console.log(sumArray([1, 2, 3, 4, 5, 6]));
 
 
 // 6.1 checkPrime
 function checkPrime(num) {
     // YOUR CODE HERE
     // use math.sqrt in a for loop
     for(let i = 2; i <= Math.sqrt(num); i++) {
         if(num % i === 0) 
         return false;
     } 
         return true;
 }
     console.log(checkPrime(13));
 
 
 
 // 6.2 printPrimes
 function printPrimes(num) {
     // YOUR code here
     for(let i = 2; i <= num; i++) {
         if(checkPrime(i)); console.log(i);
     }
 }
 printPrimes(12)
 
 // 7. printLongestWord
 function printLongestWord(arr) {
     // YOUR CODE HERE
     let longestString = 0;
     let longestWord = '';
     for(let i = 0; i < arr.length; i++) {
         if(arr[i].length > longestString) {
             longestString = arr[i].length;
             longestWord = arr[i];
         }
     }
     return longestWord;
 }
 
 console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "blob"]));
   
 
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
     // calculateCube,
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
 Footer
 © 2022 GitHub, Inc.
 Footer navigation
 Terms
 Privacy
 Security
 Status
 Docs
 Contact GitHub
 Pricing
 API
 Training
 Blog
 About
 