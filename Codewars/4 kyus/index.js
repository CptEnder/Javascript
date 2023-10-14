adjacent = {
  1: ["1", "2", "4"],
  2: ["2", "1", "3", "5"],
  3: ["3", "2", "6"],
  4: ["4", "1", "5", "7"],
  5: ["5", "2", "4", "6", "8"],
  6: ["6", "3", "5", "9"],
  7: ["7", "4", "8"],
  8: ["8", "5", "7", "9", "0"],
  9: ["9", "6", "8"],
  0: ["0", "8"],
};

function getPINs(observed, i = 0) {
  if (i == observed.length) return [""];
  let ar = [];

  for (adj of adjacent[observed[i]]) {
    observed =
      observed.substring(0, i) +
      adj +
      observed.substring(i + 1, observed.length);
    ar.push(observed);

    ar = ar.concat(getPINs(observed, i + 1).slice(1));
  }

  return ar;
}
console.log(getPINs("8"));
console.log(getPINs("11"));
console.log(getPINs("369"));
