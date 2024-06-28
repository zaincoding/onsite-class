"use strict";
//ternary operators 
//if denoted by question mark ?
//else denoted by :
Object.defineProperty(exports, "__esModule", { value: true });
exports.subtraction = exports.addition = exports.navebar = void 0;
// let myName = "Hamza Alvi";
// if(myName == "Hamza Alvi"){
//     console.log(`my name is ${myName}`)
// }else{
//     console.log("User name is not found")
// }
/*********Ternary Operators  ********/
// let myName = "Hamza A";
//  (myName === "Hamza a") ?  console.log(`my name is ${myName}`)
//    : console.log("User name is not found")
/*********** modules ******** */
var home = "Home";
var contact = "Contact Us";
var about = "About Us";
function navebar() {
    console.log(home);
    console.log(contact);
    console.log(about);
}
exports.navebar = navebar;
var addition = function (num1, num2, num3) {
    console.log((num1 + num2 + num3));
};
exports.addition = addition;
var subtraction = function (num1, num2, num3) {
    console.log((num1 * num2 - num3));
};
exports.subtraction = subtraction;
/******Switch Case******* */
// const dayofTheweek = "Thursday";
// switch(dayofTheweek){
//  case "Monday":
//     console.log("Your day is monday");
//     break;
//     case "Tuesday":
//     console.log("Your day is tuesday");
//     break;
//     case "Monday":
//     console.log("Your day is Wednesday");
//     break;
//     case "Monday":
//     console.log("Your day is Thursday");
//     break;
// }
