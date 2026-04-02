function square (n){
  return n*n;
}

function cube (n){
  return n*n*n;
}

function sumOfSqOrCube (a,b,fn){
  const val1 = fn(a);
  const val2 = fn(b);
  return val1 + val2;
}

const ans = sumOfSqOrCube(2,3,square);
console.log("The sum of the squares is: " + ans);
const an2 = sumOfSqOrCube(2,3,cube);
console.log("The sum of the cubes is: " + an2);