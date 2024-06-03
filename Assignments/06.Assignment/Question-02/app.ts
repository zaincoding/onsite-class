let max = 20;

let randomNum = Math.floor(Math.random()*max)
let predefinedGuess: number[] = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
let i = 0;

while (i < predefinedGuess.length) {
    let GuessNum = predefinedGuess[i];
  
    let userGuess = predefinedGuess[i] !== randomNum ? false: true;


if(randomNum === predefinedGuess[i]){
   
  console.log(`${GuessNum} ${userGuess}`)
  break;
}
   else if ((randomNum - GuessNum) > 4) {
        console.log(`${GuessNum} is too low, ${userGuess}`);
    }
    else if ((GuessNum - randomNum) > 4) {
        console.log(`${GuessNum} is too high, ${userGuess}`);
    }

    i++;
}


