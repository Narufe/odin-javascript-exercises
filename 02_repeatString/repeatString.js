const repeatString = function(string, num) {
  let text = "";
  if (num > 0) {
    for (let i = 1; i <= num; i++) {
      text += string;
    }
    return text;
  } else if (num === 0) {
      return "";
  }
  else
    return "ERROR";
};

// Do not edit below this line
module.exports = repeatString;
