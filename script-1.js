/* 1.

/* This function will do some mathematical operation. Like it will take a number as parameter then multiply that number then plus a value with that multiplication and divide the result, and lastly another value will be subtracted */

/* function mindGame(number) {
  if (typeof number === 'number') {
    return (number * 3 + 10) / 2 - 5;
  } else {
    return `Please enter a number`;
  }
}
console.log(mindGame(33)); */

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

console.log(evenOdd('chatgpt')); */

/* 

*/

/* 3.

/* This function will allow us to take a number as parameter and check whether it is smaller than any specific value. If yes, then will do the subtraction and return it otherwise will return the double of the input value  */

/* function isLGSeven(number) {
  if (typeof number === 'number') {
    if (number < 7) {
      return number - 7;
    } else {
      return number * 2;
    }
  } else {
    return `Please enter a number`;
  }
}

console.log(isLGSeven(15)); */

/* 4.

/* It is a function which will take an array consist of elements as numbers and return the number of positive or negative numbers in the array */

/* // const numbers = [1, 2, 5];
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



*/

/* 5.

/* 

This function will take 3 parameters from user and convert them by multiplying them with a specific number. Afterwards add the numbers together. If total is more than 2000(1000*2) than will return the difference with 2000 otherwise return the total

*/

/* function gemsToDiamond(friend1, friend2, friend3) {
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
    return `Please enter a number`;
  }
}
 */
// console.log(gemsToDiamond(100, 5, 1));






/* 1. This function will do some mathematical operation. Like it will take a number as parameter then multiply that number then plus a value with that multiplication and divide the result, and lastly another value will be subtracted */

function mindGame(number) {
  if (typeof number === 'number') {
    return (number * 3 + 10) / 2 - 5;
  } else {
    return `Please enter a number`;
  }
}




/* 2. This function will take a string as parameter and calculate that how many letters that string has. If they are even in total then will return even otherwise odd */

function evenOdd(inputString) {
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





/*3. This function will allow us to take a number as parameter and check whether it is smaller than any specific value. If yes, then will do the subtraction and return it otherwise will return the double of the input value  */

function isLGSeven(number) {
  if (typeof number === 'number') {
    if (number < 7) {
      return number - 7;
    } else {
      return number * 2;
    }
  } else {
    return `Please enter a number`;
  }
}




/* 4. It is a function which will take an array consist of elements as numbers and return the number of positive or negative numbers in the array */

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





/* 5. This function will take 3 parameters from user and convert them by multiplying them with a specific number. Afterwards add the numbers together. If total is more than 2000(1000*2) than will return the difference with 2000 otherwise return the total */

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
    return `Please enter a number`;
  }
}








/* 































*/