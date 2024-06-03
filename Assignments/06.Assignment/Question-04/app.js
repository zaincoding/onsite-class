var myObject = {
    item1: "T-Shirt",
    item2: "Cap",
    item3: "Shoes",
};
for (var index in myObject) {
    console.log("".concat(index, ": ").concat(myObject[index]));
}
