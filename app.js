/*
    1.1. What is the difference between a parameter and an argument?

    Parameters are defined along with a function. It's the elements that
the function is requesting to excecute it's code.
Arguments are the elements that we use to call for that function in 
a specific instance

    1.2. Within a function, what is the difference between return and console.log?

    console.log will simply 'print' certain information into the console.
return allows us to use the 'export' the result of the function so we
can acces it outside of the function in our code

    1. 3. What are the implications of the ability of a function to return a value?

    We could create or assign those values variables, pass them to other functions as
arguments and esencially use those values in our ConvolverNode
*/



// 2. calculateCube
function calculateCube(num) {
    return num*num*num
}
//console.log(calculateCube(5))

// 3. isAVowel
function isAVowel(letter) {
    const vowel = ['a','e','i','o','u']
    return vowel.includes(letter.toLowerCase())
}
//console.log(isAVowel('b'));

// 4. getTwoLengths
function getTwoLengths(word1, word2) {
    let twoLengths = [word1.length, word2.length]
    return twoLengths
}
// console.log(getTwoLengths('hello', 'goodbye'));

// 5. sumArray
function sumArray(arr) {
    let sum = 0
    for (let i = 0; i <arr.length; i ++){
        sum += arr[i]
    }
    return sum
}
//console.log(sumArray([1,6,3]));


// 6.1 checkPrime
function checkPrime(num) {
    if (num <= 1){
        return false
    } else if(num === 2){
        return true
    }
    for (let i = 2; Math.sqrt(num); i++){
        if (num % i === 0){
            return false
        } else {
            return true
        }
    }
}
// console.log(checkPrime(1))
// console.log(checkPrime(2))
// console.log(checkPrime(3))
// console.log(checkPrime(6))

// 6.2 printPrimes
function printPrimes(num) {
    let printPrimes = ''
    for (let i = 1; i<=num; i++){
        if (checkPrime(i)){
            printPrimes += `${i.toString()}\n`
        }
    }
    return printPrimes
}
//console.log(printPrimes(20));

// 7. printLongestWord
function printLongestWord(arr) {
   let longestWord = ''
   for (let i = 0; i< arr.length ; i++){
        if (arr[i].length > longestWord.length){
            longestWord = arr[i]
        }
   }
   return longestWord
}
//console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "blob"]));
// BONUS!

// 8. eulerFibo
function eulerFibo1(num) {
    let oldestNumber = 1
    let newestNumber = 2
    let numString = '1, 2'
    for (let i = 1; i<=num-2; i++){
        if(oldestNumber+newestNumber > num){
            return numString
        }
        let newSum = oldestNumber + newestNumber

        oldestNumber = newestNumber
        newestNumber = newSum 
        numString += `, ${newSum.toString()}`
    }
    return numString
}
//console.log(eulerFibo1(30))

function eulerFibo2(num) {
    let oldestNumber = 1
    let newestNumber = 2
    let numArr = [2]
    for (let i = 1; i<=num-2; i++){
        if(oldestNumber+newestNumber > num){
            return numArr
        }
        let newSum = oldestNumber + newestNumber

        oldestNumber = newestNumber
        newestNumber = newSum 
        if (newSum%2 ===0){
            numArr.push(newSum) 
        }
        
    }
    return numArr

}
//console.log(eulerFibo2(500))

function eulerFibo3(num) {
    let oldestNumber = 1
    let newestNumber = 2
    let numArr = [2]
    let arrSum = 0
    while( oldestNumber + newestNumber <= num){
        let newSum = oldestNumber + newestNumber
        oldestNumber = newestNumber
        newestNumber = newSum 
        if (newSum%2 ===0){
            numArr.push(newSum) 
        }
        
    }
    for (let i = 0; i<numArr.length; i++){
        arrSum += numArr[i]
    }
    return arrSum

}
//console.log(eulerFibo3(4000000000))

// 9. findNeedle
function findNeedle(arr) {
    for (let i = 0; i< arr.length; i++){
        if (arr[i]=== 'needle'){
            return `found the needle at position ${i}`
        }
    }
}
//console.log(findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk']))


// 10. sumPositive
function sumPositive(arr) {
    let arrSum = 0
    for (let i = 0; i<arr.length; i++){
        if(arr[i] > 0){
            arrSum += arr[i]
        }
    }
    return arrSum
}
//console.log(sumPositive([1,-4,7,12]));



/*
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
*/