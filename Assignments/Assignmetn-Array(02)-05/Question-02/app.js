var total = 0;
var students = [
    { name: "Ahmed",
        grades: [50, 50, 50, 50, 50]
    },
    { name: "Tahir",
        grades: [50, 55, 70, 80, 90]
    },
    { name: "Zahid",
        grades: [80, 95, 85, 70, 60]
    }
];
function calCulateAverageGrades(students) {
    for (var _i = 0, _a = students.grades; _i < _a.length; _i++) {
        var grade = _a[_i];
        total = grade;
    }
    return total;
}
for (var _i = 0, students_1 = students; _i < students_1.length; _i++) {
    var student = students_1[_i];
    console.log("".concat(student.name, ", ").concat(calCulateAverageGrades(student), " %"));
}
