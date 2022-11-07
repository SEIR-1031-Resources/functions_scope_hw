// 1.1. What is the difference between a parameter and an argument?
/* Parameters are the variables that you declare when writing a function
while the arguements are the values that you input*/
// 1.2. Within a function, what is the difference between return and console.log?
/*console.log is a function that simply tells java to display
something in the console while "return" will return the value of 
a function and store it  */
// 1. 3. What are the implications of the ability of a function to return a value? (I feel like I'm being pranked with this wording)
/* the implications of the ability of a funciton to return a value
is that all conditions to write a function in js must be met and 
written correctly for the function to work*/
// 2. calculateCube
function calculateCube(num) {
    // YOUR CODE HERE
 return num*num*num

}
// console.log(calculateCube(5));
// 3. isAVowel
function isAVowel(letter) {
    // YOUR CODE HERE
    if (letter == "a" || letter == "e" || letter == "i" || letter =="o" || letter == "u"){
    return true}
    else if (letter == "y"){
        return "sometimes"
    }
    else {
        return false}
}
console.log(isAVowel("a"));
// 4. getTwoLengths
function getTwoLengths(word1, word2) {
    // YOUR CODE HERE
    
    return ("[" + word1.length + "," + word2.length + "]")
    
}
// console.log(getTwoLengths("Hank", "Hippopopalous"));
// 5. sumArray
function sumArray(arr) {
    // YOUR CODE HERE
    var s=0;
    for(i=0;i<arr.length;i++){
        s=s+arr[i]
    }
    return s;

}
console.log(sumArray([1, 2, 3, 4, 5, 6]));
// 6.1 checkPrime
function checkPrime(num) {
    // YOUR CODE HERE
    let factors =0;
    for (i=2;i<=num;i++){
        if (num%i === 0){
            factors++
            
        }
    }
    if (factors >2){
        return false
    }
    else {
        return true
    }
   
}
console.log(checkPrime(17))

// 6.2 printPrimes
function printPrimes(num) {
    let factors =0;
    for (i=0;i<=num;i++){
        if (num%i === 0){
            factors++
            console.log(i)
        }
    }
    if (factors >2){
        return false
    }
    else {
        return true
        
        
    }

}
console.log(printPrimes(100))
// 7. printLongestWord
function printLongestWord(arr) {
    // YOUR CODE HERE
    console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "blob"]));
console.log(longestStringReduce(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "blob"]));

function printLongestWord(arr) {
  let word = "";
  for (let i = 0; i < arr.length; i++) {
    if (word.length < arr[i].length) {
      word = arr[i];
    }
  }
  return word;
}

function longestStringReduce(arr) {
  return arr.reduce((a, b) => a.length < b.length ? b : a, "");
}
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