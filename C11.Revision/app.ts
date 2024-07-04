// //Naming Convention.
// //Camel case
// let dateOfBirth

// //Pascal Case
// let DateOfBirth

// //snack case
// let date_of_birth;
// //_ , $ is valid for declaring variable in the start 
// let $username
// let _user_name

// //let & and const

// // let value is reassignalbe but const value is once delcare it's not reassignable. or not chanbge able.
// // example. const value  like date of birth , bank account.



// //if let & const is declared inside block it will be called block scope if it is declared outside block it will be called global scope

// //Block Scope.{}   

// if(true){
//   let age = 25;
// }

// console.log(age, "age")



// //Data Type  ,string,number, boolean,undefined,null is called primitive type
// let noValue;   ////undefined;   
// let noValue1; undefined  ////undefined;


// //null
// console.log(myName) //null


// let dob = 26;

// let dob2 = 26 +1;

// console.log(dob2, "dob")


// let userName = "Hamza Ahmed Alvi";

// userName = "Hamza Syed";

// let userName2 = "Ameen Alam"

// //What is the output of userName2?;



////bigInt

//max-size of a string value 64bits

//in primitive data type we can store value size of a variable up to 64bits. 





//// Non primitive type

////in non primitive we canstore large data

// let obj ={}
// let  arr = []
// function helloworld(){}
// const sayHello = () => {}
          



//  //strong typeing is the type we define variable with it's type.

//  let name1:string = "Hamza"  //This is strong typing

//  let name2 = "Hamza" // This is not strong type.




//  //Type error

//  let age:number = 26
//  age = "26"  //type error





//  //accessibility error 
//  let userName = "Hamza Avli"

//  if(true){
//   let someNumber ="26"

//   console.log(someNumber)
//  }
//  console.log(someNumber)//accessibility error.



//  //any:  the use of any block typescript intellence
//  //unknown: on the otherhand unknow is not blocking typeScript intellence.
//  let userName1:unknown = "Hamza Alvi";
// //  let userName:unknown = 1.2687453;

//  if(typeof userName1 === "string"){
//   console.log(userName1.toUpperCase())
//  }
//  else if(typeof userName1=== "number"){
//   console.log(userName1.toFixed(2))
//  }