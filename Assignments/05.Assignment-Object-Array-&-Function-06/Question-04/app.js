var students = [];
var student = {
    name: "Amjeed",
    senior: true,
    assignment: true
};
var student1 = {
    name: "Salman",
    senior: false,
    assignment: false
};
var student3 = {
    name: "Imtiaz",
    senior: false,
    assignment: true
};
var student4 = {
    name: "Imtiaz",
    senior: true,
    assignment: true
};
students.push(student, student1, student3, student4);
function fountStudent(students) {
    //this line of code is helful to find out the list object of senior students who completed the task.
    var seniorArrays = students.filter(function (student) { return student.assignment && student.senior === true; });
    for (var _i = 0, seniorArrays_1 = seniorArrays; _i < seniorArrays_1.length; _i++) {
        var seniorArray = seniorArrays_1[_i];
        console.log(seniorArray.name);
    }
}
fountStudent(students);
console.log(students);
