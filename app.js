


// 1.1. What is the difference between a parameter and an argument?

//a paramter is is the variable that is defined when the function is declared
//a value is declared within a function

// 1.2. Within a function, what is the difference between return and console.log?

//console.log just prints out the value of a function
//return returns the values


// 1. 3. What are the implications of the ability of a function to return a value?
//if the value can be placed in the function when invokes


// 2. calculateCube
function calculateCube(num) {
    // YOUR CODE HERE
return num ** 3; }
{

console.log(calculateCube(5))
    
}

// 3. isAVowel
function isAVowel(letter) {
    // YOUR CODE HERE
    const vowel = ('a'||'e'||'i'||'o'||'u');
    if (letter == vowel) {
       // console.log('vowel is true -->', true);
        return true 
    } if (letter != vowel) {
        return false
    } 
   
} {console.log(isAVowel('a'))
}
//4. getTwoLengths 
function getTwoLengths(word1, word2) {
    // YOUR CODE HERE
// const map1 = [word1.length.map, word2.length.map]
  return [(word1).length , word2.length]//(function(str) {
//     return str.length;
//     })
 } console.log(getTwoLengths("Hank", "Hippopopalous"));
 
// 5. sumArray
function sumArray(arr) {
    // YOUR CODE HERE
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];}
    return sum
   
}
console.log(sumArray([1, 2, 3, 4, 5, 6]));

// 6.1 checkPrime
function checkPrime(num) {
    // YOUR CODE HERE
let prime = true;
for (let i = 2; i <num; i++) {
    if (num % i === 0){
 prime = false;
    }
    return prime
}
} console.log(checkPrime(13))

// 6.2 printPrimes
function printPrimes(num) {
    // YOUR CODE HERE
    let prime = true;
    var arr = [2];
    for (let i = 3; i < num; i++){
        if (num % i !== 0){
            prime === i;
        } if  (i === prime ) {
            arr.push[i];   
    
        }
        return arr
    }

} console.log(printPrimes(81))

// 7. printLongestWord
function printLongestWord(arr) {
    // YOUR CODE HERE
//     //return [(word1).length , word2.length]
for (let i = 0; i < arr.length; i++) {
    arr.push[i]
}

return [arr]

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
    console.log(sumPositive(1))
}
console.log('outside any functions + at end of code')
// module.exports = {
//    calculateCube,
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