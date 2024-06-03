var max = 20;
var randomNum = Math.floor(Math.random() * max);
var predefinedGuess = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
var i = 0;
while (i < predefinedGuess.length) {
    var GuessNum = predefinedGuess[i];
    var userGuess = predefinedGuess[i] !== randomNum ? false : true;
    if (randomNum === predefinedGuess[i]) {
        console.log("".concat(GuessNum, " ").concat(userGuess));
        break;
    }
    else if ((randomNum - GuessNum) > 4) {
        console.log("".concat(GuessNum, " is too low, ").concat(userGuess));
    }
    else if ((GuessNum - randomNum) > 4) {
        console.log("".concat(GuessNum, " is too high, ").concat(userGuess));
    }
    i++;
}
