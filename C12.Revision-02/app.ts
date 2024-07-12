// //Union type.
// let dob:string | number = 123


// //how many type align to union type.

// a: "1997"
// b:  1997
// c: undefined
// d: both a or b


// let dob1:string |number |boolean |string[]  = true


// /******Intersection type ********* */
// type stringOrNumber = string | number //

// let dob:string | number //we can use type(stringOrNumber)here

// let address: string | number//we can use type(stringOrNumber)here

// let xyz : string | number//we can use type(stringOrNumber)here

// //1. what is the best way to define nultiple type of a variable 

// //2. what is the best way to define nultiple type of a  signle variable 

// a: string | number
// b: type stringOrNumber = string | number
// c: both 
// d: none of them

//intersection isn't use in single data type example
// let userName:string = "Hamza"

// //intersection is used example

// type Student ={
//     name:string;
//     isStudent:boolean;
//     rollNo: number;
// }

// let studentObj:Student = {
//     name: "Hamza Alvi",
//     isStudent: true,
// }

// console.log(studentObj)
// a: Error
// b: obj       
// c: type error  // above error is called type error
// d: none of above



// type Student = {
//     name: string;
//     isStudent:boolean;
//     rollNo?: number;
// }

// type Teacher = {
//     name: string;
//     isStudent:boolean;
//     rollNo?: number;
// }
// type UserInfo = {
//     email: string;
//     password: number;
//     address: string;
// }

// let studentObj: Teacher & Student ={
//     name: "Hamza Alvi",
//     isStudent: true;
//     email: "Hamza@alvi",
//     password: 123,
//     address: "firs street, karachi,sindh"
// }

// let userInfo: UserInfo ={
    
//     email: "Hamz@alvi",
//     password: 123,
//     address: "first Street"
// }


// {name:string, string,email:string} //error
// type obj = {name:string, email:string} //type
// let obj1:{name:string, email:string} =
// {name: "Hamza", email:"Hamza@Alvi,"}//object

// //what is this type

// //a: object
// //b: error;
// //c: type;
// //d: null



// //normal & named
// function hello(){

// }
// //a: Normal
// // arrow
// // anonymous
// // named function

// // anonymous function
// function(){

// }


// function sahHello(){

// }

// console.log(sahHello())//undefined





// function sahHello1(){

//      return "Hamza"
// }

// console.log(sahHello1())


// //arrow & lambda  function

// const sayHello = () =>  {};



// //anonymous function
// const sayHello2 = function(){}

////what is the type of return and undefined.

// let Username; //undefined
// const sayHello = ():string => {
//     let abc = "Hamza";
//     return abc
// };

// console.log(sayHello())

// //void
// const sayHello = ():void => {
//     let abc = "Hamza";    
// };


// const helloWorld = /*(a:string,b:string, ...rest)*/(...rest)=>{
//     // console.log(a, "a");
//     // console.log(b, "b")
//     console.log(rest[2])
// };

// helloWorld("Hmaza", "Alvi", "Fawad", "Khan"))


/*******Enum ****** */

//Login = 1
//Logout = 0
//IDLE => 2

// //enum (enumeration)

// //Pascal case or all capital leter user for enum
// enum  UserStatus {

//     LOGIN =1,
//     LOGOUT =0,
//     IDLE = 2

// }
// //enum property is not change again it is like constant value
// console.log(UserStatus.LOGIN)


// enum  UserStatus {

//     LOGIN, //0
//     LOGOUT,//1 
//     IDLE, //2
//       Hamza, //3 

// }

//by default enoum assign numeric value like 0,1,2,3,4 


// enum SignInSignOut {
//     LOGIN = 1,
//     LOGout = 0,
//     IDLE = 2
// }

// console.log(SignInSignOut.IDLE);