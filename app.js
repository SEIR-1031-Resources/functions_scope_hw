// 1.1. What is the difference between a parameter and an argument?
    // a parameter is a function's local placeholder variable through which an argument is passed; 
    // and argument is the data that gets pushed into a function's parameter
    
    // it's like a caterpiller (argument) goes through the cocoon (parameter) to become the butterfly (result of the function)

// 1.2. Within a function, what is the difference between return and console.log?
    // return sends data out to whatever method invoked the function
    // console.log only writes it in the console -- doesn't store the info anywhere
    
// 1. 3. What are the implications of the ability of a function to return a value?
    // can store the data a function has transformed into a variable
    // and then you can do more things to/with that data
    // a la multiple functions manipulating data amongst themselves

// 2. calculateCube
function calculateCube(num) {
    return num**3
}
// console.log(calculateCube(5));

// 3. isAVowel
function isAVowel(letter) {
    vowels = ['a','e','i','o','u','y']
    if (vowels.indexOf(letter) > -1) {
        return true
    } else {
        return false
    }
    }
// console.log(isAVowel("a"));

// 4. getTwoLengths
function getTwoLengths(word1, word2) {
    return [word1.length,word2.length]
}
// console.log(getTwoLengths("Hank", "Hippopopalous"));

// 5. sumArray
function sumArray(arr) {
    let result = 0
    for (i in arr) {
      result += arr[i]
    } return result
}

// 6.1 checkPrime
function checkPrime (num) {
    let sqrt= Math.floor(Math.sqrt(num))
    let divisibles = []
      for (let i=0; i<=sqrt; i++) {
        if (num % i === 0) {
        divisibles.push(i)
        }
    } if (divisibles.length > 1) {
        return false
      } else {return true}
    }

// 6.2 printPrimes

function printPrimes (num) {
    for (let i=0; i <= num ; i++) {
        if (checkPrime(i)) {
        console.log(i)
        }
    }
    }

// 7. printLongestWord
function printLongestWord(arr) {
    winnerIndex = 0;
    for (let i in arr) {
    if (arr[i].length === winnerIndex) {
        continue 
    }
        else if (arr[i].length > winnerIndex) {
        winnerIndex = i
    } 
    } return arr[winnerIndex]
}

// BONUS!

// 8. eulerFibo
function eulerFibo(num) {
    result=[0, 1] // including 0, 1 in the opening array so the Fibo sequence has a first pattern with which to start adding once the for loop begins
    for (let i=1;i<=num;i++){
      if (i+result[i-1] > num) {
        // ^^^ stops the loop if the next Fibo-number is greater than the entered number-limit (num).
      return result  
      } else {
        result.push(i+result[i-1])
      }
        // push into the result array of even Fibo numbers 
    }
}

// 9. findNeedle
function findNeedle(arr) {
    let result = arr.indexOf("needle")
    return console.log(`found the needle at position ${result}`)
}
// console.log (findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk']))

// 10. sumPositive
function sumPositive(arr) {
    for (i in arr) {
        if ((arr[i]>0)) {
            result += arr[i]
        }
        } return result
    }
// console.log (sumPositive([-1,-2,-5,1,-100]))

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