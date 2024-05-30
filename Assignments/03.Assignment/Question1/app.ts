//Assignment Q1;
type Employee = {
   skill:string[];
   name:string;
   department:string;
   role:"Manager"|"Engineer"|"Intern",
   contact?:{
    phone:number;
    email:string;
   }
}

let employee:Employee ={
    name:"Usman",
    department:"Commerce",
    role: "Engineer",
    skill:['Management','Communication']
}

console.log(employee.skill[0])