import inquirer from "inquirer";
let Number = (Math.random() * 5);
let randomNumber = Math.round(Number);
let userNumber = await inquirer.prompt({
    message: "Enter a number 1 to 6", type: 'number', name: 'int'
});
if (userNumber.int > randomNumber) {
    console.log("The entered number is greater than the dynamic number.");
}
else if (userNumber.int === randomNumber) {
    console.log("The entered number is equal to the dynamic number.");
}
else if (userNumber.int < randomNumber) {
    console.log("The entered number is less than the dynamic number.");
}
