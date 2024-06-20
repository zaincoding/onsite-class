//draw.io
//app.diagrams.net
// console.log("Hello World") //order 1 synchronous;
// let promise1 = new Promise((res,rej ) =>{
//     res("Resolve")
// }) //Asynchronous  order3
// let number = 255 //order
// console.log("Hello World") //order 1 synchronous;
// setTimeout(() =>{
//     console.log("Set timeout")
// },1000)
// //Asynchronous  order3
// let number = 255 //order
// console.log(number)
// console.log("Hello World") //order 1 synchronous;
// setTimeout(() =>{
//     console.log("4")
// },1000)
// //Asynchronous  order2
// let number = '2 + 2' //order3
// console.log(number)
/*******CallBack Hell ********/
// const firstFunc = (cb1) =>{
//   cb1()
// }
// const helloWorld = ()=>{
//     console.log("Hello World");
// }
// firstFunc(helloWorld)
// const firstFunction = (cb1) => {
//   cb1(sayHelloWorld2);
// }
// const sayHelloWorld = (cb2) => {
//   cb2();
// }
// const sayHelloWorld2 = () => {
//   console.log("Hello World");
// }
// const sayHelloWorld3 = (cb3) => {
//   cb3();
// }  
// firstFunction(sayHelloWorld3);
// const promise = new Promise((res,rej) =>{
//     return res(2)
// })
// .then((resp:any) =>{
//     let add = resp + 3
// console.log(resp)
//     return add;
//   console.log(resp)
// }).then((resp2) =>{
//     let multiply = resp2 *2;
//     console.log(multiply,"Multiply")
//     return multiply
// }).then((resp3) => {
//     let Subtraction = resp3 /2;
//     console.log(Subtraction, "Subtraction")
// })
//event loop, typye any, type never, type unknown
