// 1.1. What is the difference between a parameter and an argument?
// A parameter is a local variable within the function
// We use the parameter so that we can call it later in the argument and add data in it so
// that we can return a value which is what an argument is. Arguments are assigned to the parameters positionally


// 1.2. Within a function, what is the difference between return and console.log?
// Return will return a value from the argument and it will also terminate the function
// Console.log will give us an output in the browser's console and we frequently use it for debugging and to check if our code is working

// 1. 3. What are the implications of the ability of a function to return a value?
// You have to use the return statement which will stop the execution of the function
// A value is returned to the function caller after the return statement by using console.log

// 2. calculateCube
function calculateCube(num) {
    return(num * 3);
}
console.log(calculateCube(5));

// 3. isAVowel
function isAVowel(letter) {
    const vowels = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"];
    
    for(let i =0; i < vowels.length; i++){
        if(letter == vowels[i]){
            return true;
        }
    }
    return false;
}
console.log(isAVowel("b"));

// 4. getTwoLengths
function getTwoLengths(word1, word2) {
    array = [word1.length, word2.length];
    return (array); 
}
console.log(getTwoLengths("Hank", "Hippopopalous" ));


// 5. sumArray
function sumArray(arr) {
    
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