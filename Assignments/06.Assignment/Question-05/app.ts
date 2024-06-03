let myArray:number[] = [];

for(let i=1; i<=10; i++){
  
    myArray.push(i)
}

console.log(myArray)


for(let i=0; i<myArray.length; i++){

    console.log(`index:${i} = ${myArray[i]}`)
}


for(let myArr of myArray){
    console.log(myArr)
}