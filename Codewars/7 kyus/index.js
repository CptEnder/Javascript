function getCount(str) {
  count = str.match(/[aeiou]/gi);
  if (count != null) {
    return count.length;
  }
  return 0;
}
/*
[aeiou] --> this tells the match function to search for any 
            of these characters in the string
g       --> The g flag tells it to search the entire string
            else it breaks at the first match
i       --> The i flag tells it to match case insensitively
*/

function disemvowel(str) {
  return str.replace(/[aeiou]/gi, "");
}

console.log(disemvowel("This is an example"));
console.log(disemvowel("sdfsdfs"));
