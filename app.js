// 1.1. What is the difference between a parameter and an argument?
//A parameter is a named variable passed into a function. And an Argument is the value that are declared within a function when the function is called. Parameter variables are used to import arguments into function.
// 1.2. Within a function, what is the difference between return and console.log?
// console. log is the equivalent of print in other languages. Whereas, return is used for returning values from a function.
// 1. 3. What are the implications of the ability of a function to return a value?
// The return statement stops the execution of a function and returns a value. When the function completes (finishes running), it returns a value, which is a new string with the replacement made. 
 "Commit 1 - Verbal questions"
// 2. calculateCube
//function calculateCube(num) {
//         let calculateCube= function(num){
//         return num*num*num;
//     }
// console.log(calculateCube(5));
 
// "Commit 2- Cube Calculation"


// 3. isAVowel
// let isAVowel= function(letter){
//     const vowel= ['a','e','i','o','u'];
//     for (let i = 0; i < vowel.length; i++) {
//     if (vowel[i]=== letter.toLowerCase()){
//         return true;
//     } 
// }
//         return false;
// }
// console.log(isAVowel("a"));
// "Commit 3 - is a Vowel"

// 4. getTwoLengths
    //function getTwoLengths(word1, word2) {
//     let getTwoLengths= (word1, word2) => {
//      return [word1.length, word2.length];
//     }
    
// console.log(getTwoLengths("Hank","Hippopopalous"))
// "Commit 4 - Two Length"


// 5. sumArray
    // function sumArray(arr) {
    // let sum=0;
    // for (let i = 0; i < arr.length; i++) {
    //     sum += arr[i];
    // }
    //     return sum;
    // }
    // console.log(sumArray([1,2,3,4,5,6]));
    // "commit 5 - Sum Array"


// 6.1 checkPrime
//     function checkPrime(num)  {
//     if (num===1){
//         return false;
//     }else if(num===2){
//         return true;
//     }else{
//     for (let i = 2; i<num; i++){
//         if(num%i===0){
//             return false;
//         }
        
//     }   
//     return true;
// }
// }
// console.log(checkPrime(18));


// // 6.2 printPrimes
// function printPrimes(num) {
//     for (let i = 2; i <=num; i++) {
//         if(checkPrime(i)===true){
//             console.log(i)
//         }
        
//     }
// }
// console.log(printPrimes(97));
// "Commit 6 - Prime Numbers"

// 7. printLongestWord
//     const printLongestWord=(arr) =>{
//     let longest=""; 
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i].length>longest.length){
//         longest=arr[i];
//     }
// }
//         return longest;
//     }
// console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "blob"]));
// // BONUS!
// "Commit 7 - Longest Word"

// BONUS!

// 8. eulerFibo
//      function eulerFibo(num){
//         addArr=[1,2]
//         for (let i = 2; i < num; i++) {
//             addArr[i]=addArr[i-1]+addArr[i-2]
//             while(addArr[i]<=num){
//                 console.log(addArr[i])
//                 break
//              }
//              }
//     }
//            console.log(eulerFibo(46));
        
// "Commit 8 - Euler Problem"

// 9. findNeedle
    //  function findNeedle(arr) {
    //          for (let i = 0; i < arr.length; i++) {
    //              if(arr[i]==="needle"){
    //              return "found the needle at position " + i
    //      }
    //          }
    //      }
    //     console.log(findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk']));
    //     "Commit 9 - Needle"


// 10. sumPositive
    function sumPositive(arr) {
    let sum=0;
    arr.forEach(num => num > 0 && (sum += num))
    return sum
}
console.log(sumPositive([1, -4, 7, 12]));
"Commit 10 - Sum the Postive"


// module.exports = {
//     calculateCube,
//     isAVowel,
//     getTwoLengths,
//     sumArray,
//     checkPrime,
//     printPrimes,
//     printLongestWord,
//     eulerFibo,
//     findNeedle,
//     sumPositive
// };