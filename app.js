// 1.1. What is the difference between a parameter and an argument?
    //  Parameters are defined along with a function. It's the elements that
    // the function is requesting to excecute it's code.
    // Arguments are the elements that we use to call for that specific function.
// 1.2. Within a function, what is the difference between return and console.log?
    // return stop the function from running after. but console.log is logging into the console
// 1. 3. What are the implications of the ability of a function to return a value?
    //  We could create or assign those values variables, pass them to other functions as
    //arguments 
// 2. calculateCube
function calculateCube(num) {
    // YOUR CODE HERE
    return num * num * num 
}

console.log(calculateCube(5));


// 3. isAVowel
function isAVowel(letter) {
    // YOUR CODE HERE
    if (letter === "a") {
        return true 
    } else if ( letter === "e") { 
        return true 
    } else if ( letter === "i") {
        return true 
    } else if ( letter === "o") {
        return true 
    } else if ( letter === "u") {
        return true 
    } else { 
        return false 
    }
}

console.log(isAVowel("a"));


// 4. getTwoLengths

    function getTwoLengths(word1, word2) {
        // YOUR CODE HERE
        return [word1.length, word2.length] 
    
    }
    
    console.log(getTwoLengths("Hank", "Hippopopalous"));


// 5. sumArray

    // YOUR CODE HERE
    function sumArray(array) {

        let sum = 0 
        
        for ( let i = 0; i < array.length; i++) {
             sum += array[i];
        }
        return sum
        }
        
        console.log(sumArray([1, 2, 3, 4, 5, 6]));


// 6.1 checkPrime
function checkPrime(num) {
    // YOUR CODE HERE
    if (num < 2) return false;
    
    for (let i = 2; i < num; i++) {
        if (num % i === 0) 
            return false;
        
    }
    return true;
}


// 6.2 printPrimes
function printPrimes(num) {
    // YOUR CODE HERE
        let newArr = [];
        for (let i = 0; i < num; i++) {
            if (checkPrime(i)) {
                newArr.push(i);
            }
        }
        return newArr;
    }
    
    console.log(printPrimes(97))


// 7. printLongestWord
function printLongestWord(arr) {
    // YOUR CODE HERE
    let word = "";
    for (let i = 0; i < arr.length; i++) {
      if (word.length < arr[i].length) {
        word = arr[i];
      }
    }
    return word;
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