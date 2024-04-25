//Assignment:Q3

let words = {};

function strFunction(str) {
    for (const char of str) {
        
        words[char] = (words[char] || 0) + 1;
    }
    

    const nonRepeat:string[] = [];
    for (const char of Object.keys(words)) { 
      
            nonRepeat.push(char); 
       
    }
    for (let i=0; i<nonRepeat.length; i++){
          console.log(nonRepeat[i])
    }; 
     return nonRepeat;
   
}
 const str = 'Hello world';
strFunction(str);
