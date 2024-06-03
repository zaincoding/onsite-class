var myWork = [];
function oddEven() {
    for (var i = 1; i <= 10;) {
        (i % 2 === 0 ? true : false);
        var lesson = {
            name: "Lesson ".concat(i),
            status: i % 2 === 0 ? false : true,
        };
        myWork.push(lesson);
        i++;
    }
    return myWork;
}
console.log(oddEven());
