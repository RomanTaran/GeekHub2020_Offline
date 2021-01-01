function isPrime(num) {
  if (num === 0 || num === 1) {
    return false;
  } else {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
  }
  return true;
}

function factorial(number) {
  if (number === 1 || number === 0) {
    return 1;
  } else {
    return number * factorial(number - 1);
  }
}

function fib(number) {
  if (number === 0 || number === 1) {
    return number;
  } else {
    return fib(number - 2) + fib(number - 1);
  }
}

function isSorted(arr) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (min > arr[i]) {
      return false;
    } else {
      min = arr[i];
    }
  }
  return true;
}

function reverse(str) {
  let newString = '';
  for (let i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  return newString;
}

function indexOf(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      return i;
    }
  }
  return -1;
}

function isPalindrome(str) {
  let oldStr = str.toLowerCase().split('').filter((elem) => {
    if (elem !== '0') return elem
  }).join('');
  let newStr = str.toLowerCase().split('').filter((elem) => {
    if (elem !== '0') return elem
  }).reverse().join('');
  return oldStr === newStr;

}

function missing(arr) {
  let array = arr;
  let element;
  array.sort((a, b) => a - b);
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== i + 1) {
      element = (i + 1);
      break;
    }
  }
  return element;
}

function isbalanced(str) {
  const rule = /^[a-z\s]+/;
  if (rule.test(str) === false) {
    return false;
  }
  let arr = str.split('').filter((elem) => {
    return (elem === '{' || elem === '}');
  });
  if (arr.length % 2 !== 0) {
    return false;
  }
  for (let i = 0; i < arr.length / 2 - 1; i++) {
    if (arr[i] !== '{') return false;
  }
  for (let i = arr.length / 2; i < arr.length; i++) {
    if (arr[i] !== '}') return false;
  }
  return true;
}