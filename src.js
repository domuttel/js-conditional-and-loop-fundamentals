var commafy = function(n) {
  var array = [];
  for (var i = 1; i <= n; i++) {
    array.push(i);
  }
  return array.join();
};

var joinToString = function(arr) {
  var array = [];
  for (var i = 0; i < arr.length; i++) {
    array.push(arr[i]);
  }
  return array.join(" and ") +" oh my.";
};


var printBracketedNumbers = function(numbers) {
  var i = 0;
  var string = "";
  while (i <= numbers) {
    string += "[" + i + "]";
    i++;
  }
  // console.log(array);
  return string;
};


//for loop reworked from while loop

// var printBracketedNumbers = function(numbers) {
//   var string = "";
//   for (i = 0; i <= numbers; i++) {
//     string += "[" + i + "]";
//   }
//   return string;
// };

//
var sumOfN = function (integers) {
  var num = 0;
  for (i = 1; i <= integers; i++) {
    num += i;
  }
  // return i;
  return num;
};

// var moviesFor = function(actorName) {

// };

var joinWithForAndIndex = function(token) {
  var string = "";

  for (i = 0; i < token.length; i++) {
  string += token[i] + [i];
  }
  return string.slice(0, string.length);
};


var joinWithForAndToken = function(lett, char) {
  var string = "";
  for (i = 0; i < lett.length; i++) {
    string += lett[i] + char;
  }
  // return string.slice(0, -1);
  return string.slice(0, string.length - 1);

};

module.exports = {
  commafy: commafy,
  joinToString: joinToString,
  printBracketedNumbers: printBracketedNumbers,
  sumOfN: sumOfN,
  // moviesFor: moviesFor,
  joinWithForAndIndex: joinWithForAndIndex,
  joinWithForAndToken: joinWithForAndToken,

};