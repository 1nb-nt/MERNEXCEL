function calSum(a,b,fnCallback){
  let ans=a+b;
  fnCallback(ans);
}

function  RadialSum(data){
  console.log("Result of the sum is "+data);
}

function RadialSumdeop(data){
  console.log("Result of the sum is "+data);
}

const  result=calSum(500,20,RadialSum);