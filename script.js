'use strict';

/*

Problem 1: Let’s play a mind game

তোমাকে একটা function দেওয়া হবে called mindGame(” যা ইনপুট হিসেবে একটা positive number নিবে।")

এখন তোমার task : তোমাকে সেই নাম্বার এর সাথে 3 গুন করে, তারপর 10 যোগ করে, তারপর 2 দিয়ে ভাগ করে, তারপর 5 বিয়োগ করে, যা আউটপুট আসবে তা return করতে হবে

Sample Input & Output

Input: 5

Output: 7.5



Input: 50

Output: 75



Input: 33

Output: 49.5

*/

/* This function will do some mathematical operation. Like it will take a number as parameter then multiply that number then plus a value with that multiplication and divide the result, and lastly another value will be subtracted */

/* function mindGame(number) {
  if (typeof number === 'number') {
    return (number * 3 + 10) / 2 - 5;
  } else {
    return `Plase enter a number`;
  }
}
console.log(mindGame(0)); */

/* 1.

function calculate(num) {
  num = num * 3;
  num = num + 10;
  num = num / 2;
  num = num - 5;
  return num;
}
console.log(calculate(5));

*/

/* 

Problem 2: Finding even or odd

তোমাকে একটা function দেওয়া হবে called evenOdd(). এটা ইনপুট হিসেবে একটা string নিবে। 

এখন তোমার task: String এ total কয়টা character আছে তার উপর ভিত্তি করে আউটপুট দিতে হবে। আউটপুট হবে ‘even’ অথবা ‘odd’ ।Sample Input & Output:


Input: ‘Phero’

Output: odd

Input: ‘Batch7’

Output: even

Input: ‘chatgpt’

Output: odd

*/

/* 2.


/* This function will take a string as parameter and calculate that how many letters that string has. If they are even in total then will return even otherwise odd */

/* function evenOdd(inputString) {
  if (typeof inputString === 'string') {
    if (inputString.length % 2 === 0) {
      return 'even';
    } else {
      return 'odd';
    }
  } else {
    return `Please input a string not a number`;
  }
}

console.log(evenOdd('Batch7')); */

/* 

Problem 3: Is Less or Greater than seven

তোমাকে একটা function দেওয়া হবে called “isLGSeven()”. এটা ইনপুট হিসেবে একটা number নিবে।  

এখন তোমার task: তোমাকে ইনপুট ভ্যালু এবং ৭ এর মধ্যে পার্থক্য বের করতে হবে। যদি এই পার্থক্য ৭ এর চেয়ে ছোট হয়, তখন তোমাকে return করতে হবে সেই বিয়োগফল। নাহলে তোমাকে return করতে হবে double of the input। মানে যে সংখ্যা ইনপুট হিসেবে নিয়েছো সেটির দ্বিগুণ।

Input : 6

Output: -1

Input: -15

Output: -22

Input: 15

Output: 30


*/

/* This function will allow us to take a number as parameter and check whether it is smaller than any specific value. If yes, then will do the subtraction and return it otherwise will return the double of the input value  */

/*

function isLGSeven(number) {
  if (typeof number === 'number') {
    if (number < 7) {
      return number - 7;
    } else {
      return number * 2;
    }
  } else {
    return `Plase enter a number`;
  }
}

console.log(isLGSeven(15));

*/

/* 

Problem 4: Finding Bad data


তোমাকে একটা function দেওয়া হবে called findingBadData(). এটা ইনপুট হিসেবে একটা array নিবে। array তে যেকোনো সংখ্যক কতগুলো number থাকবে। number গুলো negative number (less than zero) ও হতে পারে, আবার positive number (greater than or equal to zero) ও হতে পারে। কোনও number যদি negative হয় সেটাকে আমরা বলব “Bad Data”. কোনও number যদি positive হয় সেটাকে আমরা বলব “Good Data”. 

এখন তোমার task: array তে কতগুলো Bad data আছে সেটা খুঁজে বের করতে হবে এবং সেই নাম্বার টা return করতে হবে।



Sample Input & Output:-



Input: [ 1,2,5 ]

Output: 0



Input: [ 2, -5, -7, -13 ]

Output: 3



Input: [ -4, -9, -5, -33, -55 ]

Output: 5

*/

/* It is a function which will take an array consist of elements as numbers and return the number of positive or negative numbers in the array */

/* 
// const numbers = [1, 2, 5];
// const numbers = [2, -5, -7, -13];
const numbers = [-4, -9, -5, -33, -55];
function findingBadData(dataInput) {
  if (Array.isArray(dataInput) === true) {
    let count = 0;
    for (let i = 0; i < dataInput.length; i++) {
      if (dataInput[i] < 0) {
        count = count + 1;
      } else if (dataInput[i] >= 0) {
        count = count;
      }
    }
    return count;
  } else {
    return `This is not an array`;
  }
}
console.log(findingBadData(numbers)); */

/* 

Problem 5: Convert your gems into diamond


তোমাকে একটা function দেওয়া হবে called gemsToDiamond(). এটা ইনপুট হিসেবে তিনটা number ( তোমাদের ৩ বন্ধুর gems এর সংখ্যা ) নিবে। 



১ম বন্ধুর প্রতি gems এর ক্ষমতা = 21

২য় বন্ধুর প্রতি gems এর ক্ষমতা = 32

৩য় বন্ধুর প্রতি gems এর ক্ষমতা = 43



[ gems এর ক্ষমতা বলতে একটা gems কে কয়টা diamond এ convert করা যাবে সেটা বুঝানো হচ্ছে। ]

এখন তোমার task: সব বন্ধুর gems মিলিয়ে total কতটি diamond পাবে সেটা বের করতে হবে। total diamond এর সংখ্যা যদি 1000 এর দিগুন এর উপর হয়ে যায় সেক্ষেত্রে total diamond থেকে 2000 বাদ দিয়ে যতগুলো diamond অবশিষ্ট থাকবে, ততগুলো তোমরা পাবে।

Sample Input & Output:-



Input: 1, 1, 1

Output: 96



Input: 20, 200, 50

Output: 6970



Input: 100, 5, 1

Output: 303



*/

/* 

This function will take 3 parameters from user and convert them by multipling them with a specific number. Afterwards add the numbers together. If total is more than 2000(1000*2) than will return the diffrence with 2000 otherwise return the total

*/

/*

function gemsToDiamond(friend1, friend2, friend3) {
  if (
    typeof friend1 === 'number' &&
    typeof friend2 === 'number' &&
    typeof friend3 === 'number'
  ) {
    const diamond1 = friend1 * 21;
    const diamond2 = friend2 * 32;
    const diamond3 = friend3 * 43;
    const total = diamond1 + diamond2 + diamond3;
    if (total > 1000 * 2) {
      return total - 2000;
    } else {
      return total;
    }
  } else {
    return `Plase enter a number`;
  }
}

console.log(gemsToDiamond(100, 5, 1));
 

*/
