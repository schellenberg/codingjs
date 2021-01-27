let _ = require("lodash");

// format row for hidden results (quiz mode)
function hiddenResults(idealOutput, output) {
  const ok = _.isEqual(output, idealOutput);
  return `<tr>
          <td>Hidden</td>
          <td>Hidden</td>
          <td>${ok ? '✔' : '✖'}</td>
          <td class="status-box" style="background-color:${ok ? '#318d07' : '#ce0303'}"></td>
      </tr>`;
}

module.exports = hiddenResults;