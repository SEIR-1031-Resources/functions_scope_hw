// 1.1. What is the difference between a parameter and an argument?
    // a parameter is what goes in the function and argument goes in the parameter
// 1.2. Within a function, what is the difference between return and console.log?
    // return doesnt print to the console console.log does
// 1. 3. What are the implications of the ability of a function to return a value?
    // a function could be call multiple times throughout your code.
// 2. calculateCube
function calculateCube(num) {
    // YOUR CODE HERE
    return num ** 3
}
//console.log(calculateCube(5))

// 3. isAVowel
function isAVowel(letter) {
    // YOUR CODE HERE
    let letter2 = letter.toLowerCase();
    if (letter2 === 'a'){
        return true
    }else if (letter2 === 'e'){
        return true
    }else if (letter2 === 'i'){
        return true 
    }else if (letter2 === 'o'){
        return true 
    }else if (letter2 === 'u'){
        return true
    }else {
        return false
    }
}
console.log(isAVowel('I'))
// 4. getTwoLengths
function getTwoLengths(word1, word2) {
    // YOUR CODE HERE
    let length1 = word1.length
    let length2 = word2.length
    let arr = []

    arr.push(length1, length2)
    console.log(arr)
}
getTwoLengths('hiqweqwe','helloqwew')
// 5. sumArray
function sumArray(arr) {
    // YOUR CODE HERE
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
         sum += arr[i]    
    }
    return sum
}

console.log(sumArray([10,15,10]))
// 6.1 checkPrime
function checkPrime(num) {
    // YOUR CODE HERE
    if (num <= 1) return false;
    if (num === 2) return true;

        for (let i = 2; i < num; i++){
            if (num % i === 0){
                return false;
            }
        }
        return true;
}
let randomNum = Math.floor(Math.random() * 10)
console.log(randomNum)
console.log(checkPrime(randomNum))
// 6.2 printPrimes
function printPrimes(num) {
    // YOUR CODE HERE
    for (let i = 0; i <= num; i++){
        if(checkPrime(i) === true){
            console.log(i)
        }
    }
}
printPrimes(randomNum)
// 7. printLongestWord
function printLongestWord(arr) {
    // YOUR CODE HERE
    let word = '';
    for (let i = 0; i < arr.length; i++){
        if(word.length < arr[i].length){
            word = arr[i];
        }
    }
    return word
}
console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "blob"]))

// BONUS!

// 8. eulerFibo
function eulerFibo(num) {
    // YOUR CODE HERE
    let n1 = 0;
    let n2 = 1;
    let nexTerm;
    for (let i = 0; i < num; i++){
        console.log(n1);
        nexTerm = n1 + n2;
        n1 = n2;
        n2 = nexTerm;
    }
}
eulerFibo(10)
// 9. findNeedle
function findNeedle(arr) {
    // YOUR CODE HERE
    for (let i = 0; i < arr.length; i++){
        if(arr[i] === 'needle'){
            let position = arr.indexOf('needle')
            console.log(`found the needle at position ${position}`)
        }
    }
}
findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'hi', 'randomJunk', 'needle', 'hello'])



// 10. sumPositive
function sumPositive(arr) {
    // YOUR CODE HERE
    let positive = 0;
    for (let i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            positive += parseInt(arr[i]);
        }
    }
    console.log(positive)
}
sumPositive(['1', '4', '8','-3', '-5', '7'])
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