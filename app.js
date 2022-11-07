// 1.1. What is the difference between a parameter and an argument?
//  - Parameter are numbers or names in function definition
//  - Arguments is the array of values(num or string) of parameter inside the function.

// 1.2. Within a function, what is the difference between return and console.log?
//  - return: get the value(s) from function back to where it is called. When return appears, it runs the function
//  - console.log: likes System.out.println() in Java. It just prints out a text and/or values of a variables so as to help the programmer check
// 1. 3. What are the implications of the ability of a function to return a value?
//  - 1) It helps not to repeat the bunch of codes
//  - 2) Its keeps the program organised 
//  - 3) Function can do a task (running a bunch of code to solve problem)
// 2. calculateCube
console.log("2. Calculate the Cube") //Starting commit 2
function calculateCube(num) {
    // YOUR CODE HERE
    // call a is the edge of a cube
    return `The volume of a cube make from that ${num} is: ${num*num*num}`
}
console.log(calculateCube(5))
// 3. isAVowel

function isAVowel(letter) { //Starting commit 3
    // YOUR CODE HERE
    console.log(`3. Is a Vowel? Is this ${letter} a vowel:`)
    if (letter.toLowerCase() === "a" || letter.toLowerCase() === "e" || letter.toLowerCase() === "i" || letter.toLowerCase() === "o" || letter.toLowerCase() === "u") {
        return true
    } else {
        return false
    }
}
console.log(isAVowel("R"))
// 4. getTwoLengths
console.log("4. Get Two Lengths: ") //Starting commit 4
function getTwoLengths(word1, word2) {
    // YOUR CODE HERE
    return `The length of ${word1} and ${word2} are: ${word1.length} and ${word2.length} respectivelly`
}
console.log(getTwoLengths("Hank", "Hippopopalous"))
// 5. sumArray
console.log("5. Sum Array: ")// Starting commit 5
function sumArray(arr) {
    // YOUR CODE HERE
    let sumArray = 0;
    for (let i = 0; i<arr.length; i++) {
        sumArray += arr[i]
    }
    return `The sum array of ${arr} is: ${sumArray}`
}
console.log(sumArray([1, 2, 3, 4, 5, 6]))

// 6.1 checkPrime
console.log("6. Prime numbers: ") //Starting commit 6
let a = 0
function checkPrime(num) {
    // YOUR CODE HERE
    a = num
    let store = 0;//store i value if second for loop
    let arr = []
    let countHowManyNumIsDivisile = 0;
    for (let i=1; i<=num; i++){
        for (j=1; j <= i; j++){
            if (i % j === 0) {
                countHowManyNumIsDivisile++
            }  
            store = i 
        }   
        if (countHowManyNumIsDivisile === 2 || countHowManyNumIsDivisile === 1 ) {
            arr.push(store)
        } 
        countHowManyNumIsDivisile = 0
    }
    return arr
    
}

// 6.2 printPrimes
function printPrimes(num) {
    // YOUR CODE HERE
    // arrPrimes.push(num)
    return `The new array of Prime Numbers from 1 to ${a} is: ${num}`
}
console.log(printPrimes(checkPrime(10)))
// 7. printLongestWord 
console.log("7. Print Longest word:")// Starting commit 7
function printLongestWord(arr) {
    // YOUR CODE HERE
    let store = "";
    for (i=0; i < arr.length; i++) {
        if (store.length < arr[i].length) {
            store = arr[i]
        }
    }
    return `The Longest Word in ${arr} is: ${store}`
}
console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "blob"]));
// BONUS!

// 8. eulerFibo
console.log("Project Euler Problem: ") // Starting commit Project Euler Problem
function eulerFibo(num) {
    // YOUR CODE HERE
    const arr =[]
    for (i=0; i <= num; i++) {
        if (i === 0) {
            arr.push(i)
        } else if (i>1) {
            if (arr[i-1] + arr[i-2] <= num) {
                arr.push(arr[i-1]+arr[i-2])
            } else {
                i = i + num + 10
            }
        } else if (i ===1) {
            arr.push(i)
        } 
    }
    return `The array of Fibonacci sequence up to ${num} is : ${arr}`
}
console.log(eulerFibo(55))
// 9. findNeedle
console.log("A Needle in the Haystack:") //Starting commit A Needle in the Haystack
function findNeedle(arr) {
    // YOUR CODE HERE
    let checkString = ""
    for (i=0; i<arr.length; i++) {
        if (arr[i] === "needle") {
            return `Found the needle at position ${i}`
        }
    }
}
console.log(findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk']))

// 10. sumPositive
console.log("Sum the Positive:") // Commit Sum the Positive
function sumPositive(arr) {
    // YOUR CODE HERE
    let sumPositive = 0
    const positive = []
    for (i=0; i < arr.length; i++) {
        if (arr[i] > 0) {
            sumPositive+=arr[i]
            positive.push(arr[i])
        }

    }
    return `The sum of ${positive.join(' + ')} is: ${sumPositive}`
}
console.log(sumPositive([1, -4, 7, 12]))
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
}