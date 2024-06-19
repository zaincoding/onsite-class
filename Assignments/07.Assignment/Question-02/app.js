function simulateTask(start, complete) {
    console.log(start);
    setTimeout(function () {
        console.log(complete);
    }, 1000);
}
simulateTask('Task Started', 'Task Completed');
