// Sum of n^3 that add up to m
function findNb(m) {
  n = -1;
  c = Math.sqrt(m);
  if (Number.isInteger(c)) {
    n = (-1 + Math.sqrt(1 + 8 * c)) / 2;
  }

  if (Number.isInteger(n)) {
    return n;
  } else {
    return -1;
  }
}

//console.log(findNb(1071225));
//console.log(findNb(91716553919377));

// Sum of multiples of 3 and 5 below n
function sumOfMultiples35(n) {
  sum = 0;
  mults = {};
  if (n > 0) {
    a = (n / 3) >> 0;
    b = (n / 5) >> 0;
    for (i = 1; i <= a; i++) {
      if (i * 3 < n) mults[(i * 3).toString()] = 0;
      if (i * 5 < n) mults[(i * 5).toString()] = 0;
    }
    for (key in mults) {
      sum += parseInt(key);
    }
  }
  return sum;
}

//console.log(sumOfMultiples35(9));

// Reverse every work in a string longer than 5 letters
function spinWords(str) {
  strArr = str.split(" ");
  for (i = 0; i < strArr.length; i++) {
    if (strArr[i].length > 4)
      strArr[i] = strArr[i].split("").reverse().join("");
  }
  return strArr.join(" ");
}

//console.log(spinWords("Hey fellow warriors"));

// Digital root is the recursive sum of all the digits in a number
function digitalRoot(n) {
  sum = 0;
  n = n.toString().split("");
  for (i in n) {
    sum += parseInt(n[i]);
  }
  if (sum.toString().length > 1) digitalRoot(sum);
  return sum;
}

//console.log(digitalRoot(16));
//console.log(digitalRoot(942));
//console.log(digitalRoot(132189));
//console.log(digitalRoot(493193));

function createPhoneNumber(arr) {
  return (
    "(" +
    arr.slice(0, 3).join("") +
    ") " +
    arr.slice(3, 6).join("") +
    "-" +
    arr.slice(6, 10).join("")
  );
}

//console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

function singleWordPigLatin(word) {
  word = word.toLowerCase();
  for (i = 0; i < word.length; i++) {
    asc = word.charCodeAt(i);
    if (!(asc > 96 && asc < 123)) return null;
  }
  for (i = 0; i < word.length; i++) {
    if (["a", "e", "i", "o", "u"].includes(word[i])) {
      if (i == 0) return (word += "way");
      break;
    }
  }
  return word.slice(i, word.length) + word.slice(0, i) + "ay";
}

//console.log(singleWordPigLatin("SPaGhetti"));
//console.log(singleWordPigLatin("sdgsdgsdfsdfsdg"));

// Persistent Bugger
function persistence(n) {
  if (n < 10) return 0;
  b = 1;
  arr = n.toString().split("");
  for (let x = 0; x < arr.length; x++) {
    b *= Number(arr[x]);
  }
  return persistence(b) + 1;
}

console.log(persistence(999));
