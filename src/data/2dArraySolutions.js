/** --- solutions --- **/

let solutions = {};

solutions.arrayCount2d = function (someArray) {
  let counter = 0;
  for (let i=0; i<someArray.length; i++) {
    for (let j=0; j<someArray[i].length; j++) {
      if (someArray[i][j] === 5) {
        counter++;
      }
    }
  }
  return counter;
}

solutions.arrayCount2d2 = function (someArray) {
  let counter = 0;
  for (let i=0; i<someArray.length; i++) {
    for (let j=0; j<someArray[i].length; j++) {
      if (someArray[i][j] === 5) {
        counter++;
      }
    }
  }
  return counter;
}


 module.exports = solutions;