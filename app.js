// 1.1. What is the difference between a parameter and an argument?
// A parameter is the variables that are defined inside a function. 
// An arguement is the value that gets tossed into the function().
// 1.2. Within a function, what is the difference between return and console.log?
//console.log prints to the console/terminal. Return Holds the value after the function 
//has ended and breaks away from the function once the code hits return. 
//Returning doesnt mean it will print to the console.
// 1. 3. What are the implications of the ability of a function to return a value?
//the function will ceast to run anymore and the value that
// was return will live outside the function.

// 2. calculateCube
function calculateCube(num) {
    // YOUR CODE HERE
    let volume = num * num * num
    return volume
}
//console.log(calculateCube(5));
// 3. isAVowel
function isAVowel(letter) {
    
    let is_Vowel = false 

    if ( letter === 'a'){
        console.log('yeah it works.')
        is_Vowel = true
        return is_Vowel
    }else if( letter ==='e'){
        console.log('its a vowel')
        is_Vowel = true
        return is_Vowel
    } else if (letter ==='i'){
        console.log("its a vowel")
        is_Vowel = true
        return is_Vowel
    } else if(letter === 'o'){
        console.log("it's a vowel")
        is_Vowel = true
        return is_Vowel
    }else if(letter === 'u'){
        console.log("its a vowel")
        is_Vowel = true
        return is_Vowel
    }else{
        console.log("its not a vowel")
        is_Vowel = false
        return is_Vowel
    }
    
    }
    
   // console.log(isAVowel("a"));
    // YOUR CODE HERE



// 4. getTwoLengths
function getTwoLengths(word1, word2) {
    
    // YOUR CODE HERE
    let word_length = []
    word_length.push(word1.length)
    console.log(word_length)
    word_length.push(word2.length)
    console.log(word_length)
    return word_length
}
//console.log(getTwoLengths("Hank", "Hippopopalous"));
// 5. sumArray
function sumArray(arr) {
    // YOUR CODE HERE
    let sum = 0
    for (i = 0; i < arr.length; i++){
        sum+= arr[i]
        console.log(sum)
    }
    return sum
}
//console.log(sumArray([1, 2, 3, 4, 5, 6]))

// 6.1 checkPrime
    function checkPrime(num) {
        if(num === 1){
            return false
        }
        if(num < 4){
            return true
        }
        for( let i = 2; i < num; i++){
            console.log(num) //just testing
            console.log(i)  //testing
            
            if( num % i === 0){
                console.log('a') // checking which if statement is running
                return false
        
                
            }
            return true
            }
    // YOUR CODE HERE
    
        }
   // console.log(checkPrime(9))
// 6.2 printPrimes
function printPrimes(num) {

    let prime = []
   for ( j = 0;  j <= num; j++){
    console.log(j)
    console.log(checkPrime(num))
    console.log(num)
   
    if (checkPrime(num) === true){ 
        console.log(j)
        prime.push(j)
        console.log(prime)
    }
    }

    return prime   
    
    }

//console.log(printPrimes(3))
// 7. printLongestWord

function printLongestWord(array) {
    // YOUR CODE HERE
    let longestWord = "";
for ( i = 0; i < array.length; i++){
   // console.log("a")
    if ( array[i].length > longestWord.length){
       // console.log("b")
        longestWord = array[i]
        console.log(longestWord)
    }
    else if (array[i].length == longestWord.length ){
        console.log("nope")
    }
}
   // console.log("c")
   // console.log(longestWord)
    return longestWord



}
console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "bigaaaaaaaaa", "blob"]));
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