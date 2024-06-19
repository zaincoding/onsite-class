let fetchData =new Promise ((res,rej) =>{
    res("Resolved")
});

let processData = new Promise((res, rej) =>{
 setTimeout(() => {
    rej("Rejected") 
}, 1000);
})


async function fetchSequentially(){

    for (let promises of [fetchData, processData]){
        try{
            let result = await promises;
            console.log("Promise: " +result);
        }catch(error){
          console.log("Promise: " +error);
        }
    }

}

fetchSequentially();