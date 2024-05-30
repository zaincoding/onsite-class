let inventory:Product[] =[];


type Product = {
             name:string;
             model:number;
             cost:string;
             quantity:number
}

const product:Product ={
       name:"Civic",
       model: 2020,
       cost: 'PKR 1500000',
       quantity: 10
}

const product2:Product ={
    name:"Corolla",
    model: 2022,
    cost: 'PKR 1800000',
    quantity: 5
}

const product3:Product ={
    name:"Mehran",
    model: 2024,
    cost: 'PKR 700000',
    quantity: 9
}

inventory.push(product,product2,product3)

let quantity= inventory[2].quantity;
let updateQuantity= inventory[2].quantity = 7;
let addColor = inventory[2]["color"] = "White"

console.log(inventory[2])



