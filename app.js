// 1.1. What is the difference between a parameter and an argument?
// argument is the value declared within a function {HERE} whereas the parameter is the variable(s) defined when the function is declared function myParameter(PARAMETER GOES HERE)
// 1.2. Within a function, what is the difference between return and console.log?
// return will move the argument or contents within the curly braces out of the function so it can be console.log'd. console.log will print what is returned from the function.
// 1. 3. What are the implications of the ability of a function to return a value?
// once the function has run, it will return a value, typically pushed outside of the function so it can be called upon with a console.log
// 2. calculateCube

function calculateCube(num) {
    // YOUR CODE HERE
    return num*num*num
}
console.log(calculateCube(5));

// 3. isAVowel
function isAVowel(letter) {
    // YOUR CODE HERE

    let vowels = letter.toLowerCase();
    if (vowels === "a" || vowels === "e" || vowels === "i" || vowels === "o" || vowels === "u") {
        console.log(true)
    } else {
        console.log(false)
    }
}
console.log(isAVowel("a"));

// 4. getTwoLengths
function getTwoLengths(word1, word2) {
    // YOUR CODE HERE
    for (i =0; i<=word1.length; i++){
    } 
    for (j=0; j<=word2.length; j++){
    } 
    return [word1.length, word2.length]
}
console.log(getTwoLengths("Hank", "Hippopopalous"));

// 5. sumArray
function sumArray(arr) {
    // YOUR CODE HERE
    let sum = 0
    for (let i = 0; i < arr.length; i++){
        sum += arr[i]
    }
    return sum
}
console.log(sumArray([1, 2, 3, 4, 5, 6]));

// 6.1 checkPrime
function checkPrime(num) {
    for(let i = 2; i < num; i++){
        if(num % 2 === 0){
            return false;
            }
        }
        return true;
    }
console.log(checkPrime(37))

// 6.2 printPrimes
function printPrimes(n){
    for (let i = 0; i <= n; i++) {
        if (checkPrime(i))
            console.log(i);
    }
}
console.log(printPrimes(97))


// 7. printLongestWord
function printLongestWord(arr) {
    // YOUR CODE HERE
    return arr.sort(function(a, b) {return b.length - a.length})[0];
}
console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "blob"]));

// BONUS!

// 8. eulerFibo
function eulerFibo(fibNum) {
    // YOUR CODE HERE
    const number = fibNum;
    let n1 = 0, n2 = 2, nextTerm;
    
    console.log('Fibonacci Series:');
    console.log(n1); 
    console.log(n2); 
    
    nextTerm = n1 + n2;
    
    while (nextTerm <= number) {
    
        console.log(nextTerm);
    
        n1 = n2;
        n2 = nextTerm;
        nextTerm = n1 + n2;
    }
}
console.log(eulerFibo(100))

// 9. findNeedle
function findNeedle(arr) {
    // YOUR CODE HERE
//     let sum = 0
//     for (let i = 0; i < arr.length; i++){
//         sum += arr[i]
//     }
//     if ([i] == "needle"){
//         console.log("found the needle at position " + [i])
//     } return sum
// }
// console.log(findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk']))

// 10. sumPositive
function sumPositive(arr) {
    let numbers = [1, -4, 7, 12];
    let sum = 0;

for (let i = 0; i < numbers.length; ++i) {
    if (numbers[i] > 0) {
        sum += numbers[i];
    }
}
}
console.log(sum);    
    
    // let sum = 0;
    //     for(let i = 0; i < arr.length; i++) {
    //         if(arr[i] > 0) sum += arr[i]
    //     }
    //     return sum
    // }
// console.log(sumPositive([1, -4, 7, 12]))

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