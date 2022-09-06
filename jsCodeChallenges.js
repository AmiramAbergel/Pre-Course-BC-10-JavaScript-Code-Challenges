const isTen = (a,b)=>{
    'use strict'; // strict mode
    const resultTen = 10; // declare resultTen variable and set it to 10
    let addition = a + b; // addition of two numbers
    if (addition === resultTen) { // if addition is equal to 10
        return "makes 10"; // return makes 10
    }
    else{
        return "nope"; // return nope
    }
}


const getWordByNumber = (num)=>{
    'use strict'; // strict mode
    let word = ""; // empty string
    switch(num){ // switch statement goes through each case and returns the word depending on num value(passed argument)
        case 0: // if num equals 0
            word = "zero";
            break;
        case 1: // if num equals 1
            word = "one";
            break;
        case 2: // if num equals 2
            word = "two";
            break;
        case 3: // if num equals 3
            word = "three";
            break;
        case 4: // if num equals 4
            word = "four";
            break;
        case 5: // if num equals 5
            word = "five";
            break;
        case 6: // if num equals 6
            word = "six";
            break;
        case 7: // if num equals 7
            word = "seven";
            break;
        case 8: // if num equals 8
            word = "eight";
            break;
        case 9: // if num equals 9
            word = "nine";
            break;
        default:
            word = "invalid"; // if num is out of range (0-9)
            break;
    }
    return word; // return word depending on num value (passed argument)
}


const biggestNumber = (a,b,c)=>{
    'use strict'; // strict mode
    let biggest = a; // pick a as biggest number
    if (b > biggest) { // check if b is bigger than biggest
        biggest = b; // if b is bigger than biggest, set biggest to b
    }
    if (c > biggest) { // check if c is bigger than biggest (a or b)
        biggest = c; // if c is bigger than biggest, set biggest to c
    }
    return biggest; // return biggest number between a,b,c
}

const countOddFromZeroToNum = (num)=>{
    'use strict'; // strict mode
    let count = 0; // declare "count" variable and set it to 0
    for (let i = 0; i <= num; i++) { // for loop goes through each number from 0 to num (inclusive)
        if (i % 2 !== 0) { // check if i is odd with modulus operator
            count++; // variable count is incremented by 1 and count the odd numbers.
        }
    }
    return count;
}


const numFactorial = (num)=>{
    'use strict'; // strict mode
    let factorial = 1; // declare "factorial" variable and set it to 1
    for (let i = 1; i <= num; i++) { // for loop goes through each number from 1 to num
        factorial *= i; // factorial is multiplied by i
    }
    return factorial;
}

const divideOrHasSeven = (start,end)=>{
    'use strict'; // strict mode
    let count = 0; // declare count variable and set it to 0
    let digitPattern = /7/; // declare digitPattern variable and set it to regex pattern
    for (let i = start; i <= end; i++){
        if (i % 7 === 0 || digitPattern.test(i) ){ // check if i is divisible by 7 or if i has a 7 in it
            count += 1; // if i is divisible by 7 or if i has a 7 in it, increment count by 1
        }
    }
    return count;
}


const count_primeNumberFromOneToN = (n)=>{
    'use strict'; // strict mode
    let count = 0; // declare count variable and set it to 0
    let flag = true // declare flag variable and set it to true
    for (let i = 2; i <= n; i++){ // for loop goes through each number from 2 to n
        for (let j = 2; j < i; j++){ // for loop goes through each number from 2 to i
            if (i % j === 0){ // check if i is divisible by j
                flag = false;  // if i is divisible by j, set flag to false
            }
        }
        if (flag){ // if flag is true
            count++;
        }
        flag = true; // set flag to true
    }
    return count;
}


const capitalize = (word)=>{
    'use strict'; // strict mode
    let newWord = ""; // declare newWord variable and set it to empty string
    for (let i = 0; i < word.length; i++) { // for loop goes through each letter in word
        if (word[i] === "a" || word[i] === "e" || word[i] === "i" || word[i] === "o" || word[i] === "u" || word[i] === "y") { // check if letter is a vowel
            newWord += word[i].toUpperCase(); // if letter is a vowel, set it to uppercase
        }
        else {
            newWord += word[i]; // if letter is not a vowel, set it to lowercase
        }
    }
    return newWord; // return newWord
}

const longestWord = (sentence)=>{
    'use strict'; // strict mode
    let str = sentence.split(" "); // split sentence into array of words
    let longestWord = 0; // declare longestWord variable and set it to 0
    let word = null; // declare word variable and set it to null
    let wordPattern = new RegExp ('[a-zA-Z]'); // declare wordPattern variable and set it to regex pattern
    for (let i = 0; i < str.length; i++) { // for loop goes through each word in array
        let check = ""; // declare check variable and set it to empty string
        for (let j = 0; j < str[i].length; j++) { // for loop goes through each letter in word
            if (wordPattern.test(str[i][j])) { // check if letter is a letter
                check += str[i][j]; // if letter is a letter, add it to check
            }
        }
        if (longestWord < check.length) { // check if check is longer than longestWord
            longestWord = check.length; // if check is longer than longestWord, set longestWord to check
            word = check; // set word to check
        }
    }
    return word;
}

const sumArray = (arr)=>{
    'use strict'; // strict mode
    let sumResult = 0; // declare sum variable and set it to 0
    for (let i = 0; i < arr.length; i++){
        sumResult += arr[i]; // sumResult is added to element in array
    }
    return sumResult;
}

const minNumberInArr = (arr)=>{
    'use strict'; // strict mode
    let min = arr[0]; // declare min variable and set it to first element in array
    for (let i = 0; i < arr.length; i++){
        if (arr[i] < min){ // check if element is smaller than min
            min = arr[i]; // if element is smaller than min, set min to element
        }
    }
    return min;
}