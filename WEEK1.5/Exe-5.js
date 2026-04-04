function myFUnc(){
  let n = new Promise(function(resolve){
    resolve("Hello World");});
  return n;
}

function main(){
  myFUnc().then(function(value){
    console.log(value);});
}

main();