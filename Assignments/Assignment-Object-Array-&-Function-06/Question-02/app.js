var scrambledArray = ["student", "of", true, 123, "am", "a", "GIAIC", "I"];
//o Convert non-strings (booleans, numbers) to strings if needed.
var convert = scrambledArray[3].toString();
scrambledArray.splice(3, 1, convert);
console.log("Value of boolean converted to, \"".concat(typeof convert, "\""));
var convert2 = scrambledArray[2].toString();
scrambledArray.splice(2, 1, convert2);
console.log("Value of number converted to, \"".concat(typeof convert2, "\""));
console.log(scrambledArray);
scrambledArray.splice(0, 4);
scrambledArray.pop();
scrambledArray.unshift("I");
scrambledArray.splice(3, 0, "student", "of");
var srcbArray = scrambledArray.join(' ');
console.log(srcbArray);
