
function Calculator(firstNumber:number, secondNumber:number, operator:string ){

   if(operator === "+"){
      let result = firstNumber + secondNumber;
      return result;
   }

   {
       let result1 = firstNumber - secondNumber;
       return result1;
    }
}

let firstNumber = 5;
let secondNumber = 9;
let operator = "-";

console.log(Calculator(firstNumber,secondNumber,operator))