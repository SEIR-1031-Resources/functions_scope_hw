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
console.log('Print prime with 9 as argument:')
printPrimes(1);

// 7. printLongestWord
function printLongestWord(arr) {
    let result = arr[0];
    for (let i = 0; i < arr.length; i++ ) {
        if (result.length < arr[i].length) {
            result = arr[i];
        }
    } return result;
}

console.log('Problem 7:')
console.log(
	printLongestWord([
		'BoJack',
		'Princess',
		'Diane',
		'a',
		'Max',
		'Peanutbutter',
		'big',
		'blob',
	])
);

// BONUS!

// 8. eulerFibo
function eulerFibo(num) {
	let array = [1, 2];
	if (num === 1) return 0;
	if (num === 2) return 2;
	for (let i = 2; i < num; i++) {
    if (array.at(-1) + array.at(-2) <= num) {
		array.push(array.at(-1) + array.at(-2));
    }
	}
	let evensArray = [];
	for (let i = 0; i < array.length; i++) {
		if (array[i] % 2 === 0 && !(array[i] > 4000000)) {
			evensArray.push(array[i]);
		} else if (array[i] > 4000000) {
			return 'The inputted number is too large.';
		}
	} return evensArray.reduce((p, v) => p + v);
}

console.log('Problem 8');
console.log(eulerFibo(10)); // 10
console.log(eulerFibo(100)); // 44
console.log(eulerFibo(6000000)); // the inputted number is too large

// 9. findNeedle
function findNeedle(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'needle') return `found the needle at position ${arr.indexOf('needle')}`
    }
}

console.log('Problem 9:')
console.log(findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk']));

// 10. sumPositive
function sumPositive(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > 0) sum += arr[i];
    }
    return sum;
}

console.log('Problem 10:');
console.log(sumPositive([1, -4, 7, 12]));

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