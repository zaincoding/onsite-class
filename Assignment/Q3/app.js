//Assignment: 1 to 5
//Question no 3
var words = {};
function strFunction(str) {
    for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
        var char = str_1[_i];
        words[char] = (words[char] || 0) + 1;
    }
    var nonRepeat = [];
    for (var _a = 0, _b = Object.keys(words); _a < _b.length; _a++) { // Iterate over the keys of the words object
        var char = _b[_a];
        nonRepeat.push(char); // Return the first key with a value of 1
    }
    for (var i = 0; i < nonRepeat.length; i++) {
        console.log(nonRepeat[i]);
    }
    ; // Return the words object if no non-repeated character is found
    return nonRepeat;
}
var str = 'Hello world';
strFunction(str);
