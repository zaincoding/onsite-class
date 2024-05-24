var total = 0;
var employes = [
    { name: 'Ahmed',
        hourseWorked: 8,
        hourlyRate: 200,
        salary: 36000,
    },
    { name: 'Waqas',
        hourseWorked: 8,
        hourlyRate: 250,
        salary: 60000,
    },
    { name: 'Kalim',
        hourseWorked: 10,
        hourlyRate: 300,
        salary: 72000,
    }
];
function calculateSalary(employes) {
    total = employes.hourseWorked * employes.hourlyRate;
    if (employes.hourseWorked === 10) {
        total += total / 100 * 10;
    }
    return total;
}
for (var _i = 0, employes_1 = employes; _i < employes_1.length; _i++) {
    var employee = employes_1[_i];
    console.log("".concat(employee.name, ": Salary, ").concat(calculateSalary(employee), " "));
}
