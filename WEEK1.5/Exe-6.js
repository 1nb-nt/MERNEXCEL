function myFUnc(){
  let n = new Promise(function(resolve){
    resolve("Hello World");});
  return n;
}

async function main(){
let value =await myFUnc();
console.log(value);
}

main();