var product = {
    name: "t-Shirt",
    price: 300,
    color: "blue",
    inventory: {
        stock: 8,
        colorOption: ['Green', 'Yellow', 'black'],
        changeColor: function (color) {
            return this.colorOption.includes(color)
                ? "Color: ".concat(color) :
                "Color:  ".concat(color, " is not avaliable.");
        }
    }
};
console.log(product.inventory.changeColor("black"));
