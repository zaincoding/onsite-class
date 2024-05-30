
type Employee ={
    name:string;
    hourseWorked:number;
    hourlyRate:number;
    salary:number;
}

let total:number = 0;

let employes:Employee[] = [
    {name: 'Ahmed',
     hourseWorked:8,
     hourlyRate: 200,
     salary: 36000, 
    },
    {name: 'Waqas',
    hourseWorked:8,
    hourlyRate: 250,
    salary: 60000, 
   },
   {name: 'Kalim',
   hourseWorked:10,
   hourlyRate: 300,
   salary: 72000, 
  }
];

function calculateSalary(employes:Employee){

    total = employes.hourseWorked * employes.hourlyRate
    if(employes.hourseWorked === 10){
      
        total +=total/100*10
    }
    return total;
}

for(let employee of employes){
    
    console.log(`${employee.name}: Salary, ${calculateSalary(employee)} `)
}