// function to show the Map data type in a user-friendly way
//  - without doing something like this, it just shows up as Object()

let _ = require("lodash");

function prettyPrintMap(theMap, style="no_parentheses") {
  let formattedMapResult = "";
  if (style == "parentheses") {
    formattedMapResult = "(";
  }
  formattedMapResult = formattedMapResult + "{";
  
  //check if it is an empty map
  let emtpyMap = new Map();
  let isEmpty = _.isEqual(theMap, emtpyMap);
  if (!isEmpty) {
    for (let item of theMap) {
      // add quotes if data type is a string, otherwise don't
      let formattedInput = `${item[0]}`;
      let formattedOutput = `${item[1]}`;
      if (typeof(item[0]) ===  "string") {
        formattedInput = `'${item[0]}'`;
      }
      if (typeof(item[1]) ===  "string") {
        formattedOutput = `'${item[1]}'`;
      }
      formattedMapResult += `${formattedInput}: ${formattedOutput}, `;
    }
  
    formattedMapResult = formattedMapResult.slice(0, -2);    
  }
  
  formattedMapResult = formattedMapResult + "}";

  if (style == "parentheses") {
    formattedMapResult = formattedMapResult +  ")";
  }
  return formattedMapResult;
}

module.exports = prettyPrintMap;
