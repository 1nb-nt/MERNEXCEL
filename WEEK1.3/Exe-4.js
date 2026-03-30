function cutStr(str,start,end){
  let newStr="";
  for(let i=0;i<str.length;i++){
    if(i>=start && i<end){
      newStr+=str[i]
    }
   
  }
   return newStr
}
const name="Sivaji vaila Jilebi";
console.log(cutStr(name,5,12));