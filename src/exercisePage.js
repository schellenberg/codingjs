let $ = require("jquery");
let _ = require("lodash");
let CodeMirror = require("codemirror-minified");

let exercises = require("./allExercisesIncludingHidden.js");
let solutions = require("./solutions.js");

let deParam = require("./utility/deParam.js");
let inputParser = require("./utility/inputParser.js");
let tableHeader = require("./utility/tableHeader.js");
let formatResults = require("./utility/formatResults.js");
let hiddenResults = require("./utility/hiddenResults.js");
let setInitialEditorContents = require("./utility/setInitialEditorContents.js");
let displayExampleRuns = require("./utility/displayExampleRuns.js");
let prettyPrintMap = require("./utility/prettyPrintMap.js");

let exerciseListeners = require("./listeners/exerciseListeners");
let keyboardShortcuts = require("./listeners/keyboardShortcuts");

require("../node_modules/codemirror-minified/mode/javascript/javascript.js");
require("../node_modules/codemirror-minified/addon/comment/comment.js");
require("../node_modules/codemirror-minified/addon/edit/matchbrackets.js");
window.JSHINT = require('jshint').JSHINT;
require("../node_modules/codemirror-minified/addon/lint/lint.js");
require("../node_modules/codemirror-minified/addon/lint/javascript-lint.js");


// define codemirror editor to interact with code on page
let editor = CodeMirror.fromTextArea(document.getElementById("answer"), {
  lineNumbers: true,
  matchBrackets: true,
  mode: "javascript",
  gutters: ["CodeMirror-lint-markers"],
  lint: { options: { bitwise: true,
                     eqeqeq: true,
                     latedef: true,
                     undef: true,
                     varstmt: true,
                     esversion: "8" }},
  extraKeys: {
    "Cmd-/": "toggleComment",
    "Ctrl-/": "toggleComment",
    Tab: (cm) => cm.execCommand("indentMore"),
    "Shift-Tab": (cm) => cm.execCommand("indentLess")
  }
});

// Work out which excercise to show
const urlParams = deParam(window.location.search);
const exerciseName = urlParams.name || exercises[0].name;
/** here we match the exerciseName (from querystring) to the problem in exercise obj**/
const exercise = exercises.filter(exercise => exercise.name == exerciseName)[0];

exerciseListeners(editor, exerciseName);
keyboardShortcuts(editor, exerciseName);

// display exercise page
$('#title').text(exercise.title);
$('#name').text(exercise.name);
$('#problem').text(exercise.question);

setInitialEditorContents(editor, exerciseName, exercise);
displayExampleRuns(exercise, exerciseName);

// show solution button if already solved
// if (localStorage.getItem(exerciseName) === "true") {
//   $('#show').css('visibility','visible');
// }


$('#solve').on('click', () => {
  $('tr').remove();
  $('.congrats').text("");
  $('#tests').append(tableHeader());
  const answer = editor.getValue();

  // whenever the user checks their solution, save the most recent version of their code to localStorage
  let exerciseCode = exerciseName + "-code";
  localStorage.setItem(exerciseCode, answer);

  let userCode;
  let result;
  try {
    $(".errorMessage").text("");
    eval(`userCode=${answer}`);     //since this is all front end, not a security risk...
    const inputs = exercise.inputs;

    let results = [];
    inputs.forEach((inputStr) => {
      const input = inputParser(exercise, inputStr);
      let idealResult;

      // if the input is an array/object, make a copy to avoid user changing the passed version...
      let inputCopy = inputParser(exercise, inputStr);

      if (exercise.inputType === "map") {
        let formattedInput = prettyPrintMap(input, "parentheses");

        idealResult = solutions[exerciseName](input);
        result = userCode(inputCopy);

        if (exercise.outputType === "map") {
          let formattedMapIdealResult = prettyPrintMap(idealResult);
          let formattedMapUserResult = prettyPrintMap(result);

          if (exercise.hideTests === undefined) { // show tests -- hideTests value not set in question
            $('#tests').append(formatResults(exerciseName, formattedInput, formattedMapIdealResult, formattedMapUserResult));
          }
          else {
            $('#tests').append(hiddenResults(formattedMapIdealResult, formattedMapUserResult));
          }
        }
        else {
          if (exercise.hideTests === undefined) { // show tests -- hideTests value not set in question
            $('#tests').append(formatResults(exerciseName, formattedInput, idealResult, result));
          }
          else {
            $('#tests').append(hiddenResults(idealResult, result));
          }
        }
        
      }
      else {
        idealResult = solutions[exerciseName](...input);
        result = userCode(...inputCopy);
        if (exercise.outputType === "map") {
          let formattedMapIdealResult = prettyPrintMap(idealResult);
          let formattedMapUserResult = prettyPrintMap(result);

          if (exercise.hideTests === undefined) { // show tests -- hideTests value not set in question
            $('#tests').append(formatResults(exerciseName, inputStr, formattedMapIdealResult, formattedMapUserResult));
          }
          else {
            $('#tests').append(hiddenResults(formattedMapIdealResult, formattedMapUserResult));
          }
        }
        else {
          if (exercise.hideTests === undefined) { // show tests -- hideTests value not set in question
            $('#tests').append(formatResults(exerciseName, inputStr, idealResult, result));
          }
          else {
            $('#tests').append(hiddenResults(idealResult, result));
          }
        }
      }

      let isCorrect = _.isEqual(result, idealResult);
      results.push(isCorrect);
    });

    if (results.every(isTrue)) {
      $('.congrats').text("100% Passing. Well Done!");
      localStorage[exerciseName] = "true";
    }
  } catch (theError) {
    $('.congrats').text("");
    $('th').remove();
    $('.errorMessage').text(theError);

    // check if output matches the type required... this could be improved if all the questions included inputType and outputType
    if (exercise.outputType === "map" && !(result instanceof Map)) {
      $('.errorMessage').append("<br />")
                        .append("Did you forget to return the Map?");
    }
  }
});

function isTrue(someValue) {
  return someValue === true;
}