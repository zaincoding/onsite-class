var fetchDate = new Promise(function (res, rej) {
    return rej("Unresolve");
});
fetchDate.then(function () {
    setTimeout(function () {
        console.log("Data Fetched Successfully.");
    }, 1000);
}).catch(function (error) {
    setTimeout(function () {
        console.log("Promise " + error);
    }, 1000);
});
