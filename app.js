// 1.1. What is the difference between a parameter and an argument?
// A paramter serves as a placeholder; the argument is the value the parameter assumes.
// 1.2. Within a function, what is the difference between return and console.log?
// return returns the value of the function; console.log logs a value to the console.
// 1. 3. What are the implications of the ability of a function to return a value?
// We can hold functions in variables.

// 2. calculateCube
function calculateCube(num) {
	return num ** 3;
}

console.log(`Problem 2:\n${calculateCube(5)}`);

// 3. isAVowel
function isAVowel(letter) {
	let vowels = ['a', 'e', 'i', 'o', 'u'];
	if (vowels.indexOf(letter) === -1) return false;
	return true;
}
console.log('Problem 3:')
console.log(isAVowel('a'));
console.log(isAVowel('e'));
console.log(isAVowel('i'));
console.log(isAVowel('o'));
console.log(isAVowel('u'));
console.log(isAVowel('g'))

// 4. getTwoLengths
function getTwoLengths(word1, word2) {
	return [word1.length, word2.length];
}

console.log('Problem 4:');
console.log(getTwoLengths('Hank', 'Hippopopalous'));


// 5. sumArray
function sumArray(arr) {
	let result = 0;
	for (let i = 0; i < arr.length; i++) {
		result += arr[i];
	}
	return result;
}

console.log('Problem 5:')
console.log(sumArray([1, 2, 3, 4, 5, 6]));

// 6.1 checkPrime
const checkPrime = num => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    } return true;
}

console.log('Problem 6.1:');
console.log(checkPrime(2)); // true
console.log(checkPrime(4)); // false
console.log(checkPrime(97)); // true
// 6.2 printPrimes
function printPrimes(limit) {
    for (let i = 2; i <= limit; i++ ) {
        if(checkPrime(i)) console.log(i);
    }
}

console.log('Problem 6.2:');
printPrimes(97);

// 7. printLongestWord
function printLongestWord(arr) {
    // YOUR CODE HERE
}

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