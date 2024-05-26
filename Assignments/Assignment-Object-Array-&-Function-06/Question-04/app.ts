interface Student {
    name:string;
    senior:boolean;
    assignment:boolean;
}

let students:Student[]=[];

let student:Student ={
    name: "Amjeed",
    senior: true,
    assignment:true
}

let student1:Student = {
    name:"Salman",
    senior:false,
    assignment:false
}

let student3:Student = {
    name: "Imtiaz",
    senior:false,
    assignment:true
}

let student4:Student = {
    name: "Imtiaz",
    senior:true,
    assignment:true
}

students.push(student,student1,student3,student4)

function fountStudent(students:Student[]){
//this line of code is helful to find out the list object of senior students who completed the task.
  let seniorArrays = students.filter(student =>student.assignment && student.senior === true)
    
//Only print the name of the sinior students who completed the task.
  for (let seniorArray of seniorArrays ){
     console.log (seniorArray.name)
  }

}

 fountStudent(students);

 



