// 1.1. What is the difference between a parameter and an argument?

// 1.2. Within a function, what is the difference between return and console.log?
// console.log() checks if the function works. Return allows the function to be performed.
// 1. 3. What are the implications of the ability of a function to return a value?

// 2. calculateCube
function calculateCube(num) {
  return num ** 2
}
// console.log(calculateCube(2));

// 3. isAVowel
function isAVowel(letter) {
  if (
    letter === 'a' ||
    letter === 'e' ||
    letter === 'i' ||
    letter === 'o' ||
    letter === 'u'
  ) {
    // if vowel return true; else false
    return true
  } else {
    return false
  }
}
// console.log(isAVowel("i"));

console.log(isAVowel(''))

// 4. getTwoLengths
function getTwoLengths(shoeBrand1, shoeBrand2) {
  lengthArr = []
  lengthArr.push(shoeBrand1.length)
  lengthArr.push(shoeBrand2.length)
  return lengthArr
}
// console.log(getTwoLengths('Nike', 'Adidas'))

// 5. sumArray
function sumArray(arr) {
  let sum = 0

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
  }
  return sum
}
// console.log(sumArray([1, 2, 3, 4, 5, 6]))

// 6.1 checkPrime
function checkPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false
    }
  }
  return true
}

// 6.2 printPrimes
function printPrimes(num) {
  for (let i = 2; i <= num; i++) {
    if (checkPrime(i) === true) {
      console.log(i)
    }
  }
}
// printPrimes(97)

// 7. printLongestWord
function printLongestWord(arr) {
  let word = ''
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > word.length) {
      word = arr[i]
    }
  }
  return word
}
console.log()

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
}
