//Camel case
var dateOfBirth;
//Pascal Case
var DateOfBirth;
//snack case
var date_of_birth;
//_ , $ is valid for declaring variable in the start 
var $username;
var _user_name;
//let & and const
// let value is reassignalbe but const value is once delcare it not reassignable. or chanbge able.
// example. const value  like date of birth , bank account.
//if let & var is declared inside block it will called block scope if it is declared outside it will be called global scope
// //Block Scope.{}   
// if(true){
//   let age = 25;
// }
// console.log(age, "age")
// //Data Type  ,string,number, boolean,undefined,null is called premative type
// let noValue;   //undefined;   
// let noValue1; undefined  //undefined;
// //null
// console.log(myName) //null
// let dob = 26;
// let dob2 = 26 +1;
// console.log(dob2, "dob")
// let userName = "Hamza Ahmed Alvi";
// userName = "Hamza Syed";
// let userName2 = "Ameen Alam"
//What is the output of userName2;
//bigint
//max-size string  64bits
//Non primitive type
// let obj ={}
// let  arr = []
// function helloworld(){}
// const sayHello = () => {}
var obj = {
    name: "Hello World",
    class: "Thursday"
};
var obj2 = obj;
console.log(obj2.name);
