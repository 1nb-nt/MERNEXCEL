class Animals{
  constructor(name,legCount,sound)
{
  this.name=name;
  this.legCount=legCount;
  this.sound=sound; 
}}
let dog=new Animals("Dog",4,"BOW BOW");

console.log(dog.name,dog.legCount,dog.sound);