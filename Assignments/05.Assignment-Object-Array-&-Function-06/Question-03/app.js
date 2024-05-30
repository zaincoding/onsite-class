var inventory = [];
var product = {
    name: "Civic",
    model: 2020,
    cost: 'PKR 1500000',
    quantity: 10
};
var product2 = {
    name: "Corolla",
    model: 2022,
    cost: 'PKR 1800000',
    quantity: 5
};
var product3 = {
    name: "Mehran",
    model: 2024,
    cost: 'PKR 700000',
    quantity: 9
};
inventory.push(product, product2, product3);
var quantity = inventory[2].quantity;
var updateQuantity = inventory[2].quantity = 7;
var addColor = inventory[2]["color"] = "White";
console.log(inventory[2]);
