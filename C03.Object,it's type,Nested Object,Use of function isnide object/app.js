// type  Product ={
//     title: string,
//     desc?: string,
//     price:number,
//     isAvaliable:boolean
// }
// const product: Product ={
//     title: "Watch",
//     desc: "This is a watch",
//     price: 200,
//     isAvaliable:true,
// };
// const student ={
//     name: "Ahmed Ali",
//     stanard:"MSC",
//     gender: "male",
//     address:{
//     postalcode: "71500",
//     street: "street 1",
//     city: "karachi"
//     }
// }
// console.log(student.address);
//product
//title polo, description?this is polo shirt, price 300, additionalinfo: color,size,quantity
// // type Product = {
// //    title:string,
// //    description?:string,
// //    price:number,
// //    color:string,
// //    size:number,
// //    quantity:number,
// // }
// const product:Product = {
//        title: "Polo",
//        description: "This is polo shirt",
//        price: 300,
//        additionalInfo: {
//         color: 'blue',
//         size: "xxl",
//         quantity: 5,
//        }
//     }
//        console.log(product.title)
//name,gender,dob,department:depName,
// type Student = {
//     bio:{
//         name:string,
//         gender:string,
//         dob:number
//     }
//     department: {
//         depName: string,
//         faculty: "bcom" | "bscs" | "ba"
//     }
// }
// const student:Student ={
//     bio:{
//         name: "Hamza",
//         gender: "male",
//         dob: 1999
//     },
//    department:{
//     depName: "Commerce",
//     faculty: "ba"
//    }
// }
// // console.log(Object.entries(student.bio))
//Methods:
// const greet = ()=>{
//     console.log("Hello thursday class")
// }
var student = {
    name: "Hamza",
    gender: "male",
    dob: 1999,
    // greet:function(){
    //   console.log("Hello class")
    // }
    callName: function () {
        return ("Hello Hamza Alvi");
    },
    // addition: function(num1, num2){
    //    return num1 + num2;
    // }
    addition: function (num1, num2) {
        return num1 + num2;
    }
};
//Simple function
function addition(num1, num2) {
    return num2 + num1;
}
////Arrow function
// const addition = (num1,num2) =>{
//     return num2 + num1
// }
console.log(addition(4, 5));
console.log(student.addition(5, 6), student.callName());
// console.log(student.greet())
// student.callName();
