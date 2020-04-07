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


 module.exports = solutions;