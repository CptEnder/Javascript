function extractDomainName(url) {
  if (url.includes("www")) return url.split(".")[1];
  else if (url.includes("http")) return url.split(".")[0].split("//")[1];
  else return url.split(".")[0];
}

/*
console.log(extractDomainName("http://www.zombie-bites.com"));
console.log(extractDomainName("http://github.com/carbonfive/raygun"));
console.log(extractDomainName("bdughrho7yjnwrsniycl-2hua.br/default.html"));
*/

function simplePigLatin(str) {
  str = str.split(" ");
  for (i in str) {
    asc = str[i].charCodeAt(0);
    if ((asc > 96 && asc < 123) || (asc > 64 && asc < 91))
      str[i] = str[i].slice(1, str[i].length) + str[i][0] + "ay";
  }
  return str.join(" ");
}

//console.log(simplePigLatin("Hello world !"));

function validParentheses(str) {
  if (str.length % 2) return false;
  while (str.includes("()")) str = str.replace("()", "");
  return !str;
}

//console.log(validParentheses("(())((()())())"));

function anagrams(string, array) {
  letterDict = {};
  string.split("").forEach((element) => {
    letterDict[element] = string.split(element).length - 1;
  });
  i = 0;
  while (i < array.length) {
    array[i].split("").every((letter) => {
      if (array[i].split(letter).length - 1 != letterDict[letter]) {
        array.splice(array.indexOf(array[i]), 1);
        i -= 1;
        return false;
      }
      return true;
    });
    i += 1;
  }
  return array;
}

//console.log(anagrams("racer", ["crazer", "carer", "racar", "caers", "racer"]));
//console.log(anagrams("laser", ["lazing", "lazy", "lacer"]));

function rot13(string) {
  string = string.split("");
  string.forEach((letter, i) => {
    asc = letter.charCodeAt(0);
    if (asc > 64 && asc < 91) {
      string[i] = String.fromCharCode(((asc - 65 + 13) % 26) + 65);
    } else if (asc > 96 && asc < 123) {
      string[i] = String.fromCharCode(((asc - 97 + 13) % 26) + 97);
    }
  });
  return string.join("");
}

//console.log(rot13("thiS is an Example !123`"));

function cakes(recipe, ingredients) {
  new_list = [];
  for (ingr in recipe) {
    new_list.push(Math.floor(ingredients[ingr] / recipe[ingr]) || 0);
  }
  return Math.min(...new_list);
}

// console.log(
//   cakes(
//     { flour: 500, sugar: 200, eggs: 1 },
//     { flour: 1200, sugar: 1200, eggs: 5, milk: 200 }
//   )
// );

// console.log(
//   cakes(
//     { apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 },
//     { sugar: 500, flour: 2000, milk: 2000 }
//   )
// );

function one(a) {
  return a != undefined ? parseInt(eval("1" + a)) : 1;
}

function two(a) {
  return a != undefined ? parseInt(eval("2" + a)) : 2;
}

function three(a) {
  return a != undefined ? parseInt(eval("3" + a)) : 3;
}

function four(a) {
  return a != undefined ? parseInt(eval("4" + a)) : 4;
}

function five(a) {
  return a != undefined ? parseInt(eval("5" + a)) : 5;
}

function six(a) {
  return a != undefined ? parseInt(eval("6" + a)) : 6;
}

function seven(a) {
  return a != undefined ? parseInt(eval("7" + a)) : 7;
}

function eight(a) {
  return a != undefined ? parseInt(eval("8" + a)) : 8;
}

function nine(a) {
  return a != undefined ? parseInt(eval("9" + a)) : 9;
}

function zero(a) {
  return a != undefined ? parseInt(eval("0" + a)) : 0;
}

function times(a) {
  return "*" + a.toString();
}

function plus(a) {
  return "+" + a.toString();
}

function dividedBy(a) {
  return "/" + a.toString();
}

function minus(a) {
  return "-" + a.toString();
}

/*
console.log(eight(dividedBy(zero())));
console.log(nine(dividedBy(two())));
console.log(nine(times(zero())));
console.log(five(minus(nine())));
console.log(nine(plus(nine())));
console.log(nine(times(nine())));
*/

// RGB To Hex Conversion
// https://www.codewars.com/kata/513e08acc600c94f01000001

function toHex(n) {
  if (n < 0) return "00";
  if (n > 255) return "FF";

  return ("0" + n.toString(16)).slice(-2).toUpperCase();
}

function rgb(r, g, b) {
  return toHex(r) + toHex(g) + toHex(b);
}

//console.log(rgb(16, 0, 255));

// Greed is Good
// https://www.codewars.com/kata/5270d0d18625160ada0000e4

function score(throws) {
  points = 0;
  for (i = 1; i < 7; i++) {
    c = throws.filter((x) => x == i).length;
    points += i == 1 ? 100 * (c % 3) : 0;
    points += i == 5 ? 50 * (c % 3) : 0;
    points += c >= 3 && i != 1 ? i * 100 : 0;
    points += c >= 3 && i == 1 ? 1000 : 0;
    console.log(c, points);
  }
  return points;
}

//console.log(score([1, 1, 1, 2, 5]));

// First non-repeating character
// https://www.codewars.com/kata/52bc74d4ac05d0945d00054e

function firstNonRepeatingLetter(word) {
  for (l of word) {
    if (word.match(new RegExp(l, "gi")).length == 1) return l;
  }
  return "";
}

console.log(firstNonRepeatingLetter("sTreSS"));
