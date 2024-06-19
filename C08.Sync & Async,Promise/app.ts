// let pubg;
// pubg ="We want Ac environment, Beryani and Ice crean";

// console.log(pubg);

// function makepizza() {
//    return "Your delicious pizza is being prepared";
// }

// let Order = makepizza()
// console.log(Order)

// //convert from type script to javascript is called transpile.
// //when java script run is called intereprater
// //global execution contacts 
// //Hoisting (safe)
// //call stack

//multiple task at once or concurrence task (in programing term non blocking)

//linear complete task line by line or one after another( in programming term blocking)
//synchronous task executed sequentially or in a linear fashion (line by line).
//We can make it asynchronous through callbacks, enabling multiple tasks to run concurrently.



//javascript is by itself is synchronous but through call back we make it asynchronous.


// function makepizza() {
//    return "Pizza is being prepared";
// }
// //Lambda function.
// console.log(makepizza())
// let makeFirze = () => "Firze being ready"
// console.log(makeFirze())



//************* *//

//promise
//status pending 
//promise fulfill, resolve (pass or tru)
//promisen rejected (fail or false)


let SirZiaPromise = new Promise( (res, rej) => {
    //  res("Pass")
     rej("fail");
})
//async function
async function SirZiaPromisestatus(){
try{
    let status =await SirZiaPromise;
    console.log(status,"try block")
}
  catch(error){
    console.log(error,"Catch block");
  }

}



//     let status =await SirZiaPromise;
//     console.log(status)
// }


SirZiaPromisestatus()








// SirZiaPromise.then( (response) => {
//     console.log(response)
// }).catch((error) =>{
//     console.log(error)
// })



// SirZiaPromise.catch( (response) => {
//     console.log(response)
// })














