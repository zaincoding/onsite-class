// const names:string[] = ["Hamza","Ali","Jawwad"];

// names.splice(1,1)

// console.log(names)


// const names:string[] = ["Hamza","Ali","Jawwad"];

// names.splice(1,0,'Bila')

// console.log(names)


// const names:string[] = ["Hamza","Ali","Jawwad"];

// names.splice(1,1,'Bila')

// console.log(names);


// const names:string[] = ["Hamza","Ali","Jawwad"];

// names.splice(1,2,'Bila','Ahmed')

// console.log(names);
// const names:string[] = ["Hamza","Ali","Jawwad"];

// names.splice(0,1);

// console.log(names,"splice");
// names.splice(1,1)

// console.log(names, "names");

//**********Tuples***********/
// type Fruits =[string,string,string]
// const fruits:Fruits =["Apple","Mango","Orange"];

// type Fruits =[string,string,string,string,string]
// const fruits:Fruits =["BMW","Corolla","Toyota","Ford","Mehran"];

// console.log(fruits)


// const multiArray = [[1,2,3,4,5]]

// console.log(multiArray[0], "Array")


// const multiArray = [1,2,[1,2,3,4,5]]

// console.log(multiArray[1], "Array")


// const multiArray = [1,2,3,4,[1,2,3,4,5]]

// console.log("Array =",  multiArray[4]);


// const multiArray = [1,2,3,4,["Mehram","Civic","Corolla"]]

// console.log("Array =",  multiArray[4][1]);

// //array 5 to 6 element number, at last index nested array 2 string
// type multiArray = [number,number,number,number,number,[string,string]]
// let array:multiArray = [1,2,3,4,5,["Corolla","Civic"]];

// console.log("Array =", array[5][1] )



// type multiArray = [number,number,number,number,number,string[]]
// let array:multiArray = [1,2,3,4,5,["Corolla","Civic","Byd","Ford","BMW"]];

// console.log("Array =", array[5][3]);


// let package: string | number |boolean = 5;

// type Intersection ={
//     name:string;
//     class: string;
// }

// type Intersection2 ={
//   dob:number;
// }

// type Intersection3 ={
//     name:string;
//     class: string;
//     dob:123
// }


// let intesection:Intersection & Intersection2={
//     name:"abc",
//     class:"Thursday",
//     dob: 123
// }


// console.log(intesection)
// console.log(intesection.dob)

// let userName:string = "Hamza";
// let userName1 = "Hamza" as string;


// // let number = 123 as number

// let number = 123 as number | string