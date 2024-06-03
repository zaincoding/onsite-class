

let myWork:any[] =[];


function oddEven(){
for (let i=1; i<=10; ){

 (i%2 === 0 ? true: false)
    let lesson = {
        name:`Lesson ${i}`,
        status:i %2 === 0 ? false: true,
    }

  myWork.push(lesson)
i++;
}
return myWork
}

console.log(oddEven())