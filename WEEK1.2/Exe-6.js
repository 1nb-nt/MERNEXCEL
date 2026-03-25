const personArray = ["Nithish", "John", "Jane"  ,"Doe", "Smith"];
const ageArray = [21, 30, 25, 40, 35];
const genderArray = ["Male", "Male", "Female", "Male", "Female"];
for (let i =0;i<personArray.length;i++){
if (genderArray[i]==="Male")
console.log(personArray[i]+" is "+ageArray[i]+" years old and is a "+genderArray[i]+".");
}