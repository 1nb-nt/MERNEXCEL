function RisePol(a,b,ArithmLog){
  const del=ArithmLog(a,b);
  return del ;
}

function Sum(a,b){
  return a+b;
}

const flok=RisePol(500,20,Sum);
console.log("Result of the sum is "+flok);

