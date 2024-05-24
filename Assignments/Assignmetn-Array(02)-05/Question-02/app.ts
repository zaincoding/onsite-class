type Student ={
    name:string;
    grades:number[]
}
 let total:number = 0;
let students:Student[] = [
    {name: "Ahmed",
    grades:[50,50,50,50,50]
    },

    {name: "Tahir",
    grades:[50,55,70,80,90]

    },

    {name: "Zahid",
    grades:[80,95,85,70,60]
    }
];

function calCulateAverageGrades(students:Student){
    for(let grade of students.grades){
         
          total = grade;        
    }
    return total;

}

for(let student of students){
        
    console.log(`${student.name}, ${calCulateAverageGrades(student)} %`)
}
