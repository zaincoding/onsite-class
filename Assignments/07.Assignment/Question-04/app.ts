let fetchWithError = new Promise((res,rej) =>{

    rej()

});
    let randomNum = Math.round(Math.random()*6);
   let result = randomNum >= 3 ? 'successful!': 'failed!';
    fetchWithError.then(() => {
      setTimeout(() => {
    console.log(`Data fetch ${result}`)
      }, 1000);
    }).catch(() => {
       setTimeout(() => {
        console.log(`Data fetch ${result}`)
       }, 1000);  
    });   
    
    
