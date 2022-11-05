// 1.1. What is the difference between a parameter and an argument?
 //Parameter is a placeholder for data needed to run the function, the argument is the data that is inputed.
// 1.2. Within a function, what is the difference between return and console.log?
//a return statement stops the execution of the function code, and allows other code to use the value passed by the return
//console.log will log the return of the function***?
// 1. 3. What are the implications of the ability of a function to return a value?
//parameters are an implication, because they are place holders for future values.

// 2. calculateCube
function calculateCube(num) {
    let cube= num * num * num;
    return cube;
}
console.log(calculateCube(5));

// 3. isAVowel
function isAVowel(letter) {
    let vowels = 'aeiou' 
    if(vowels.indexOf(letter) !== -1 ){
        return true
    }
    return false;  
}
console.log(isAVowel('a'))

// 4. getTwoLengths


function getTwoLengths(word1, word2) {
   
   return [word1.length, word2.length]
};
console.log(getTwoLengths("Hank", "Hippopopalous"));
// 5. sumArray
//Write a function `sumArray` that takes an **array** as an argument.
//The array should contain numbers. The function should return the sum of the numbers in the array. **Do not use `.reduce()`**.

function sumArray(arr) {
    
    let sum= 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum;
}
console.log(sumArray([1, 2, 3, 4, 5, 6]));



// 6.1 checkPrime ****
//A Prime number is a number that is not evenly divisible by another number except 1 and itself. If you want to read more deeply about it, [go here](https://en.wikipedia.org/wiki/Prime_number).
//To test whether a number is Prime, you only need to test as far as the **square root** of that number. This is advisable for optimization and testing large numbers.
// ### Step One
// Write a function called `checkPrime` that will test whether a number is Prime. The function will return true (Boolean) if Prime, false if not.
// _Hint:_ Check every number up to the square root. To do this, try a _for loop_.

// ### Step Two
// Write another function called `printPrimes` that will print (console log) all the Primes up to an arbitrary limit. For example, if you invoke your function with `printPrimes(97)`, it will print all the Prime numbers up to and including 97.
// This function can **call on** the previous `checkPrime` function.
// </details>
function checkPrime(num) {
    let sqRoot = Math.sqrt(num)
    for (let i = 2; i <= sqRoot; i++) {
        if (num % i === 0){
            return false;
        };

    }; return true;

};
console.log(checkPrime([58]))
// 6.2 printPrimes
function printPrimes(num) {
    let prntPrime= null
    for(let i = 3; i < num; i+=2) {
        if(checkPrime(i) ){
            prntPrime(i)
        }
    }

}
console.log(printPrimes(95));
// 7. printLongestWord *****
// Write a function `printLongestWord` that accepts a single argument, an **array of strings**. The method should return the longest word in the array. In case of a tie, the method should return the word that appears first in the array.

// ```javascript
// console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "blob"]));
// so i want to write a for loop, that takes each element and tests it against the other elements to check the length of the word, then an if statement to check if the condition for the current index is greater than i, to continue running. once the i is greater than all of the other elements in the array, return.
//

function printLongestWord(arr) {
   let word = '';
    for(let i = 0; i < newArr.length; i++){
       if( newArr[i].length > word){
           word = newArr[i];
    };
   };
   return word;
};

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