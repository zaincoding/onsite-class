//Assignment:Q2
type Car ={
    engine:{
    hoursePower:string;
    };
    getHoursePower:() => string;
}

const car:Car = {
    engine:{
     hoursePower:"1200cc",
    },

    getHoursePower: function(){
        return `${this.engine.hoursePower}`;
    }
    
}

 console.log(car.getHoursePower())
