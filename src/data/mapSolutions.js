/** --- solutions --- **/

let solutions = {};

solutions.mapCount = function (someMap) {
  let counter = 0;
  if (someMap.has("a")) {
    counter += 1;
  }
  if (someMap.has("b")) {
    counter += 1;
  }
  if (someMap.has("c")) {
    counter += 1;
  }
  return counter;
}

solutions.mapBully = function (someMap) {
  if (someMap.has("a")) {
    someMap.set("b", someMap.get("a"));
    someMap.set("a", "");
  }
  return someMap;
}

solutions.mapShare = function (someMap) {
  if (someMap.has("a")) {
    someMap.set("b", someMap.get("a"));
  }
  someMap.delete("c");
  return someMap;
}

solutions.mapAB = function (someMap) {
  if (someMap.has("a") && someMap.has("b")) {
    let combinedString = someMap.get("a") + someMap.get("b");
    someMap.set("ab", combinedString);
  }
  return someMap;
}

solutions.topping1 = function (someMap) {
  if (someMap.has("ice cream")) {
    someMap.set("ice cream", "cherry");
  }
  someMap.set("bread", "butter");
  return someMap;
}

solutions.topping2 = function (someMap) {
  if (someMap.has("ice cream")) {
    someMap.set("yogurt", someMap.get("ice cream"));
  }
  if (someMap.has("spinach")) {
    someMap.set("spinach", "nuts");
  }
  return someMap;
}

solutions.topping3 = function (someMap) {
  if (someMap.has("potato")) {
    someMap.set("fries", someMap.get("potato"));
  }
  if (someMap.has("salad")) {
    someMap.set("spinach", someMap.get("salad"));
  }
  return someMap;
}

solutions.mapAB2 = function (someMap) {
  if (someMap.has("a") && someMap.has("b")) {
    if (someMap.get("a") === someMap.get("b")) {
      someMap.delete("a");
      someMap.delete("b");
    }
  }
  return someMap;
}

solutions.mapAB3 = function (someMap) {
  if (someMap.has("a") && !someMap.has("b")) {
    someMap.set("b", someMap.get("a"));
  }
  else if (!someMap.has("a") && someMap.has("b")) {
    someMap.set("a", someMap.get("b"));
  }
  return someMap;
}

solutions.mapAB4 = function (someMap) {
  if (someMap.has("a") && someMap.has("b")) {
    let aLength = someMap.get("a").length;
    let bLength = someMap.get("b").length;

    if (aLength > bLength) {
      someMap.set("c", someMap.get("a"));
    }
    else if (bLength > aLength) {
      someMap.set("c", someMap.get("b"));
    }
    else {
      someMap.set("a", "");
      someMap.set("b", "");
    }
  }
  return someMap;
}




solutions.word0 = function (keyArray) {
  let someMap = new Map();
  for (let i = 0; i < keyArray.length; i++) {
    someMap.set(keyArray[i], 0);
  }
  return someMap;
}

solutions.wordLen = function (wordArray) {
  let someMap = new Map();
  for (let i = 0; i < wordArray.length; i++) {
    someMap.set(wordArray[i], wordArray[i].length);
  }
  return someMap;
}

solutions.pairs = function (wordArray) {
  let someMap = new Map();
  for (let i = 0; i < wordArray.length; i++) {
    someMap.set(wordArray[i][0], wordArray[i][wordArray[i].length-1]);
  }
  return someMap;
}

solutions.wordCount = function (wordArray) {
  let someMap = new Map();
  for (let i = 0; i < wordArray.length; i++) {
    if (!someMap.has(wordArray[i])) {
      someMap.set(wordArray[i], 1);
    }
    else {
      let howManyTimesAlready = someMap.get(wordArray[i]);
      someMap.set(wordArray[i], howManyTimesAlready+1);
    }
  }
  return someMap;
}

solutions.firstChar = function (wordArray) {
  let someMap = new Map();
  for (let i = 0; i < wordArray.length; i++) {
    if (!someMap.has(wordArray[i][0])) {
      someMap.set(wordArray[i][0], wordArray[i]);
    }
    else {
      let currentValue = someMap.get(wordArray[i][0]);
      someMap.set(wordArray[i][0], currentValue + wordArray[i]);
    }
  }
  return someMap;
}

solutions.wordAppend = function (wordArray) {
  let someMap = new Map();
  let outputString = "";
  for (let i = 0; i < wordArray.length; i++) {
    if (!someMap.has(wordArray[i])) {
      someMap.set(wordArray[i], 1);
    }
    else {
      let howManyTimesAlready = someMap.get(wordArray[i]);
      someMap.set(wordArray[i], howManyTimesAlready+1);
    }
    if (someMap.get(wordArray[i]) % 2 === 0) {
      outputString += wordArray[i];
    }
  }
  return outputString;
}

solutions.wordMultiple = function (wordArray) {
  let someMap = new Map();
  for (let i = 0; i < wordArray.length; i++) {
    if (!someMap.has(wordArray[i])) {
      someMap.set(wordArray[i], false);
    }
    else {
      someMap.set(wordArray[i], true);
    }
  }
  return someMap;
}

solutions.allSwap = function (wordArray) {
  let someMap = new Map();
  for (let i = 0; i < wordArray.length; i++) {
    if (!someMap.has(wordArray[i][0])) {
      someMap.set(wordArray[i][0], i);
    }
    else {
      let locationToSwap = someMap.get(wordArray[i][0]);
      someMap.delete(wordArray[i][0]);
      let temp = wordArray[locationToSwap];
      wordArray[locationToSwap] = wordArray[i];
      wordArray[i] = temp;
    }
  }
  return wordArray;
}

solutions.firstSwap = function (wordArray) {
  let locationMap = new Map();
  let historyMap = new Map();
  for (let i = 0; i < wordArray.length; i++) {
    if (!historyMap.has(wordArray[i][0]) && !locationMap.has(wordArray[i][0])) {
      locationMap.set(wordArray[i][0], i);
    }
    else {
      if (!historyMap.has(wordArray[i][0])) {
        historyMap.set(wordArray[i][0], "swapped");
        let locationToSwap = locationMap.get(wordArray[i][0]);
        locationMap.delete(wordArray[i][0]);
        let temp = wordArray[locationToSwap];
        wordArray[locationToSwap] = wordArray[i];
        wordArray[i] = temp;
      }
    }
  }
  return wordArray;
}

solutions.mapLargest = function (someMap) {
  let largest = null;
  for (let [key, value] of someMap) {
    if (largest === null) {
      largest = key;
    }
    else if (value > someMap.get(largest)) {
      largest = key;
    }
  }
  return largest;
}

 module.exports = solutions;