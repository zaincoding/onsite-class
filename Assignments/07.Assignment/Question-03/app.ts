let fetchDate = new Promise((res,rej) => {
    return rej("Unresolve");
});

    fetchDate.then(() => {
    setTimeout(() => {
        console.log("Data Fetched Successfully." )  
    }, 1000);    

    }).catch((error) => {
    setTimeout(() => {
        console.log("Promise "+ error)

    }, 1000);
});