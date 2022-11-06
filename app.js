// 1.1. What is the difference between a parameter and an argument?
// A parameter is what is getting passed within the function definition. 
// A argument is what gets passed when the the function is actually called. 
// 1.2. Within a function, what is the difference between return and console.log?
// return will store the data from the function 
// console.log will just log the outcome to the console. 
// 1. 3. What are the implications of the ability of a function to return a value?
// This means that we can use functions to find values and then store them and then use these values in other areas of the code.


// 2. calculateCube
function calculateCube(num) {
  let numCubed = (num * num * num);
  return numCubed
}

//console.log(calculateCube(5))

// 3. isAVowel
function isAVowel(letter) {
newLetter = letter.toUpperCase();
if (newLetter === "A" || newLetter === "E" || newLetter === "I" || newLetter === "O" || newLetter == "U"){
return true
} else {
    return false
}
}
//console.log(isAVowel("io"));

// 4. getTwoLengths
function getTwoLengths(word1, word2) {
   const stringLengths = [];
    stringLengths[0] = word1.length;
    stringLengths[1] = word2.length;
    return stringLengths
}

//console.log(getTwoLengths("two","theufjkuihgyjurythgu"));

// 5. sumArray
function sumArray(arr) {
   let sumOfArray = 0;
    for (i = 0; i <arr.length; i++){
        sumOfArray = (sumOfArray + arr[i]);      
}
return sumOfArray
}
//console.log(sumArray([1,2,3,4,5,6]));






// 6.1 checkPrime
function checkPrime(num) {
    let isPrime = true;
     if (num <= 1) {
        isPrime = false;
        return isPrime
    }else {
         for (let i = 2; i < num; i++) {
                if (num % i == 0) {
                    isPrime = false;
                    break;
                }
            }
            return isPrime;
    }
}
//console.log(checkPrime(7));


// 6.2 printPrimes
function printPrimes(num) {
   const primeArray = [];
    let count = 0;
    let primeNumber = 0;
    for (i = 0; i <= num; i++){
        if (checkPrime(primeNumber) === true) {
            primeArray[count] = primeNumber;
            count++;
        }
        primeNumber++;
    }
        return primeArray
}
// console.log(printPrimes(3433));

// 7. printLongestWord
function printLongestWord(arr) {
const wordLengthArray = []   
let biggestNumber = null;

for (i = 0; i <arr.length; i++){
    wordLengthArray[i] = arr[i].length;
}
for (j = 0; j <arr.length; j++){
    if (wordLengthArray[j] > biggestNumber){
        biggestNumber = wordLengthArray[j];
        biggestWord = arr[j]
    }
}
return biggestWord
}



//console.log(printLongestWord([ "Peanutbutter","BoJack", "Princess", "Diane", "a", "Max", "big", "blob"]));

// BONUS!

// 8. eulerFibo
function eulerFibo(num) {
const arr = [1];
let currentNum = 1;
let previousNum = 0;
let totalEven = 0;
    if ( num <=1){
        return 0
    } 
    while (num > 0){
        currentNum += previousNum;
        previousNum = currentNum - previousNum;
        if (currentNum % 2 === 0){
        arr.push(currentNum);
        }
        num -= 1;
    }
    for (i = 2; i <= arr.length; i++){
        totalEven = totalEven + arr[(i-1)];
    }
    if (totalEven <= 4000000){
    return totalEven
    }else 
        return (`The number is too high - (${totalEven})`)
    } 

console.log(eulerFibo(31));

// ***** The answer is 31 **** //


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