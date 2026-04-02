function FIndSum(m){
  let ans =0;
  for(let i=0; i<=m; i++){
    ans += i;
  }
  return ans;
}

function fein(){
  console.log(FIndSum(1000));
}

setTimeout(fein, 10000);
console.log("METROBOOMIN!!!!!!!!!!");

