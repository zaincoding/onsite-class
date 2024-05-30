//initial condition
//stopic condition.
//updation or incremental statement

// for(let count=3; count<=10; count++){
//     console.log("Hello world")

//  }


// for(let count=3; count<=10; count++){
//    // console.log("Hello world")
//    console.log(count +"Count:")
//  }


 //make a function, which takes a parameter it type number.
 //and in function block write a for loop.
 //which  print the number table and.


//  const printTable = (num:number) =>{
//     for(let i =1; i<=10; i++){
//         console.log(`${num} * ${i} = ${num*i}`)
//     }
//  }

//  console.log(printTable(10))

// const sumeofN = (num:number) =>{
//     let sum=0;
//     for(let j =1; j<=num; j++){

//         sum  =sum+j;

//     }
//     console.log(sum)
//  }

//  sumeofN(5)



// function numb(num:number){
//     let i =1;
// while(i<=10){
//    let table =(`${num * i} = ${num * i}`);
//    console.log(table)
//     i++;
// }
 
// }


//numb(2)

//for in is mostly used for objects

// let student ={
//     name: "Hamza",
//     batch: "Thursday class",
//     isAvailable: false,
// };

// for(let x in student){
//     console.log(x, "X")
// }


// //use to access property statically.
// console.log(obj.name);
// //use to access property dynamically.
// console.log(obj["name"]);






let student ={
    name: "Hamza",
    batch: "Thursday class",
    isAvailable: false,
};

for(let x in student){
    console.log(x, student[x])
}
