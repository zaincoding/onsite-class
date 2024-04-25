function strFunction(str) {
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    var count = 0;
    str = str.toLowerCase();
    for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
        var char = str_1[_i];
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}
var str = 'HEllo World';
console.log(strFunction(str));
