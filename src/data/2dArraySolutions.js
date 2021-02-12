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

solutions.neighborNESW = function (someArray) {
  let counter = 0;
  for (let y=0; y<someArray.length; y++) {
    for (let x=0; x<someArray[y].length; x++) {
      let rows = someArray.length;
      let cols = someArray[y].length;
      
      if (y-1 >= 0 && someArray[y-1][x] === 1) {
        counter++;
      }
      if (y+1 < rows && someArray[y+1][x] === 1) {
        counter++;
      }
      if (x-1 >= 0 && someArray[y][x-1] === 1) {
        counter++;
      }
      if (x+1 < cols && someArray[y][x+1] === 1) {
        counter++;
      }
    }
  }
  return counter;
}

solutions.neighborNESW2 = function (someArray) {
  let counter = 0;
  for (let y=0; y<someArray.length; y++) {
    for (let x=0; x<someArray[y].length; x++) {
      let rows = someArray.length;
      let cols = someArray[y].length;
      let atLeastOneNeighbor = false;

      if (y-1 >= 0 && someArray[y-1][x] === 1) {
        atLeastOneNeighbor = true;
      }
      if (y+1 < rows && someArray[y+1][x] === 1) {
        atLeastOneNeighbor = true;
      }
      if (x-1 >= 0 && someArray[y][x-1] === 1) {
        atLeastOneNeighbor = true;
      }
      if (x+1 < cols && someArray[y][x+1] === 1) {
        atLeastOneNeighbor = true;
      }

      if (atLeastOneNeighbor) {
        counter++;
      }
    }
  }
  return counter;
}


 module.exports = solutions;