//Assignment:Q1
function strFunction(str){
    const vowels = ['a','e','i','o','u'];

    let count=0;
    str = str.toLowerCase()
 for (const char of str){
  if (vowels.includes(char)){
         count++
  }
 }
    return count;
}

 const str = 'HEllo World'

console.log(strFunction(str))