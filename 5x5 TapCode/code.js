const tapFive = {
  encryptionArray: {
    A: 11,
    B: 12,
    C: 13,
    D: 14,
    E: 15,
    F: 21,
    G: 22,
    H: 23,
    I: 24,
    J: 25,
    L: 31,
    M: 32,
    N: 33,
    O: 34,
    P: 35,
    Q: 41,
    R: 42,
    S: 43,
    T: 44,
    U: 45,
    V: 51,
    W: 52,
    X: 53,
    Y: 54,
    Z: 55,
  },
  encrypt: function (string) {
    string = string.toUpperCase().replace(/\s/g, "");
    let encryption = "";

    for (let s of string) {
      if (s == "K") s = "C";
      encryption += this.encryptionArray[s];
    }

    return encryption;
  },
  decrypt: function (string) {
    let decrytion = "";

    for (i = 0; i < string.length; i += 2) {
      let value = parseInt(string.slice(i, i + 2));
      decrytion += Object.keys(this.encryptionArray).find(
        (key) => this.encryptionArray[key] === value
      );
    }

    return decrytion;
  },
};

tapFive.encrypt("hello");
tapFive.decrypt("2315313134");
