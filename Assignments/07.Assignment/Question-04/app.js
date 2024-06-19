var fetchWithError = new Promise(function (res, rej) {
    rej();
});
var randomNum = Math.round(Math.random() * 6);
var result = randomNum >= 3 ? 'successful!' : 'failed!';
fetchWithError.then(function () {
    setTimeout(function () {
        console.log("Data fetch ".concat(result));
    }, 1000);
}).catch(function () {
    setTimeout(function () {
        console.log("Data fetch ".concat(result));
    }, 1000);
});
