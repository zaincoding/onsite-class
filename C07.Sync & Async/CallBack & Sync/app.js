// console.log("Hello world");
// for(let i=0; i<=10; i++){
//     console.log("loop calling");
// }
// console.log("Hamza Alvi")
// console.log("Hello world");
// //it through erro and not move on the next line this is called
// //Sync behaviour
// aaa  //cannot find name 'aaa'
// for(let i=0; i<=10; i++){
//     console.log("loop calling");
// }
// console.log("Hamza Alvi")
// console.log("The javascript file");
// i=0;
// const a = 5;
// const a = '5'
// while(i<10){
//     console.log(i)
//     i++;
// }
// const userName = "Hamza Alvi";
// console.log(userName);
// //greetings(username)
// const greetings = (name) =>{
//     console.log(`Hello ${name}` );
// }
// for(let i=0; i<=10; i++){
//     console.log(`i ${i}`);
// }
// console.log('12345');
// greetings("Hamza Alvi")
// const hello = (name:any) =>{
//     console.log(name);
// };
// hello("Hello world")
// hello(123)
// hello(true);
// hello(123,123)
// hello({key: "Hamza Alvi"})
//a function to accept another function as paramater is called callback function.
// const randomFunction = () =>{
//     console.log("Hello World")
// }
// const hello = (callBack:any) => {
//    callBack()
// }
// hello(randomFunction)
// const  sumTwoNumbers= () =>{
//         return 2 + 2;
//     }
//     const getNumberAndAdd3 = (sumTwoNumbers:any) => {
//       console.log (sumTwoNumbers())
//     }
//     getNumberAndAdd3(sumTwoNumbers)
// let sumTwo = () =>{
// //    return 5+5
//  console.log(5 + 5);
// }
// let addTwonumbers = (sumTwo:any) =>{
//     // console.log(sumTwo());
//     sumTwo()
// }
// addTwonumbers(sumTwo)
// let sumTwo = () =>{
//     //    return 5+5
//      console.log(5 + 5);
//     }
//     let addTwonumbers = (sumTwo:any) =>{
//         // console.log(sumTwo());
//         sumTwo()
//     }
//     addTwonumbers(sumTwo)
// const sumTwoNumber = ()=>{
//     return 2+3;
// }
// const anotherFunct = (param)=>{
// //   let result = param;
// console.log(param());
// }
// anotherFunct(sumTwoNumber);
var value = function () {
    return ("Hellow world");
};
var calbackFun = function (str) {
    console.log(str());
};
calbackFun(value);
