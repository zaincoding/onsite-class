//Assignment:Q2

function prime(number, divisor=2){

    if(number <= 2){
        return ( number === 2)

    }
    else if(number % divisor === 0){
      
        return false;
    }
   else if (divisor * divisor > number){
        return true;
    }
    return prime(number, divisor + 1)
}

console.log(prime(5))