var products = [
    { name: "Cap",
        price: 200,
        inventory: {
            stock: 12,
            colorOption: ['Red', 'Blue', "Green"]
        }
    },
    { name: "Watch",
        price: 200,
        inventory: {
            stock: 15,
            colorOption: ['Red', 'Blue', "Green"]
        }
    },
    { name: "T-Shirt",
        price: 300,
        inventory: {
            stock: 5,
            colorOption: ['Red', 'Blue', "Green"]
        }
    }
];
function changeColor(Product, color) {
    if (Product.inventory.colorOption.includes(color) && color === 'Blue') {
        Product.price -= 200 / 100 * 5;
        Product.inventory.colorOption[0] = color;
    }
    else if (Product.inventory.colorOption.includes(color) && color === "Red") {
        Product.price += 200 / 100 * 10;
        Product.inventory.colorOption[1] = color;
    }
}
changeColor(products[1], "Red");
changeColor(products[0], "Blue");
changeColor(products[2], "Green");
console.log("Product: ".concat(products[0].name, " \n Price: ").concat(products[0].price, " \n Stock: ").concat(products[0].inventory.stock, "\n Color: ").concat(products[0].inventory.colorOption[0], "\nAvaliable Color: ").concat(products[2].inventory.colorOption, "\n"));
console.log("Product: ".concat(products[1].name, " \n Price: ").concat(products[1].price, " \n Stock: ").concat(products[1].inventory.stock, " \nColor: ").concat(products[1].inventory.colorOption[1], "\n Avaliable Color: ").concat(products[2].inventory.colorOption, "\n"));
console.log("Product: ".concat(products[2].name, " \n Price: ").concat(products[2].price, " \n Stock: ").concat(products[2].inventory.stock, " \n Color: ").concat(products[2].inventory.colorOption[2], " \n Avaliable Color: ").concat(products[2].inventory.colorOption));
