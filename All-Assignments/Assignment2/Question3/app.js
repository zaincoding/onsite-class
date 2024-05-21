import inquirer from "inquirer";
let userInput = await inquirer.prompt({
    message: "Enter username", type: 'input', name: 'user'
});
let userName = userInput.user.toLowerCase();
switch (userName) {
    case 'zain':
    case 'ahmed':
    case 'zahid':
        console.log('I known you.');
        break;
    default:
        console.log("I don't know you.");
}
