/** --- solutions --- **/

let solutions = {};

solutions.sumDownBy2 = function (n) {
    if (n <= 0) {
        return 0;
    }
    else if (n === 1) {
      return 1;
    }
    else {
      return n + this.sumDownBy2(n-2);
    }
 }
 
solutions.makes8 = function (a, b) {
  return ((a == 8 || b == 8) || (a + b == 8));
};

solutions.mooseEating = function (temp, isSummer) {
  let upperBound = 20;
  let lowerBound = -20;
  if (isSummer) {
    upperBound = 30;
  }
  return temp >= lowerBound && temp <= upperBound;
};

solutions.gradeNines = function (hour, coffee) {
  return !coffee && (hour <= 11 || hour >= 14);
};

solutions.fix97 = function (nums) {
  if (nums[0] === 9 && nums[1] === 7) {
    nums[1] = 0;
  }
  else if (nums[1] === 9 && nums[2] === 7) {
    nums[2] = 0;
  }
  return nums;
}

solutions.sum312 = function (nums) {
  let theSum = 0;
  for (let i=0; i<nums.length; i++) {
    if (nums[i] === 3) {
      theSum += 3;
    }
  }
  return theSum === 12;
}

solutions.countOdds = function (nums) {
   let count = 0;
 
     for (let i = 0; i < nums.length; i++){
         if (nums[i]%2 === 1){
             count += 1;
         }
     }
     return count;
}

solutions.lucky39 = function (nums) {
  for(let i = 0; i < nums.length; i++){
    if (nums[i] == 3 || nums[i] == 9){
        return false;
    }
  }
    return true;

}

solutions.rotateRightBy2 = function (nums) {
  return [nums[2], nums[3], nums[0], nums[1]];
}
 
solutions.fib = function (n) {
  if (n < 2) {
      return n;
  };
    return this.fib(n-1) + this.fib(n-2);
}

solutions.authorMap = function (authorArray) {
  let theMap = new Map();
  for (let i=0; i<authorArray.length; i++) {
    if (theMap.has(authorArray[i])) {
      let oldAmount = theMap.get(authorArray[i]);
      theMap.set(authorArray[i], oldAmount+1);
    }
    else {
      theMap.set(authorArray[i], 1);
    }
  }
  return theMap;
}

solutions.cityMap = function (someMap) {
  if (someMap.has("saskatoon")) {
    someMap.set("regina", someMap.get("saskatoon"));
    someMap.delete("saskatoon");
  }
  if (someMap.has("moose jaw")) {
    someMap.set("yorkton", someMap.get("moose jaw"));
    someMap.delete("moose jaw");
  }

  return someMap;
}

solutions.modifiedMap = function (someMap) {
  if (someMap.has("appy") && !someMap.has("main")) {
    someMap.set("main", someMap.get("appy"));
  }
  else if (!someMap.has("appy") && someMap.has("main")) {
    someMap.set("appy", someMap.get("main"));
  }
  return someMap;
}

solutions.count7in2d = function (someArray) {
  let counter = 0;
  for (let i=0; i<someArray.length; i++) {
    for (let j=0; j<someArray[i].length; j++) {
      if (someArray[i][j] === 7) {
        counter++;
      }
    }
  }
  return counter;
}

solutions.lucky42 = function (nums) {
  for(let i = 0; i < nums.length; i++){
    if (nums[i] == 4 || nums[i] == 2){
        return false;
    }
  }
    return true;
}


 module.exports = solutions;