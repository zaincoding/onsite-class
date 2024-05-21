type Product = {
    name:string;
    price:number;
    color:string;
    inventory:{
        stock:number;
        colorOption:string[];
        changeColor:(color:string) => string;

    }
}

const product: Product ={
    name:"t-Shirt",
    price:300,
    color:"blue",
    inventory:{
    stock: 8,
    colorOption:['Green','Yellow','black'],
    changeColor: function(color:string) {
        return   this.colorOption.includes(color)
        ? `Color: ${color}`:
          `Color:  ${color} is not avaliable.`
    }
    }
}

console.log(product.inventory.changeColor("black"));