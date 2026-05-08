const express = require ("express");
const app = express();

const users=[{
  name : "John Doe",
  gender : "Male",
  kidneys :[{
    healthy : false,
  }]
}]

app.get("/",function (req,res){
  const johnkidneys = users[0].kidneys;
  const numofKidneys = johnkidneys.length;
  let numofHealthyKidneys =0;
  for (let i=0; i<johnkidneys.length; i++){
    if (johnkidneys[i].healthy){
      numofHealthyKidneys++;
    } 
    }
    const numofUnhealthyKidneys = numofKidneys - numofHealthyKidneys;
    res.json({ message: `John has ${numofHealthyKidneys} healthy kidneys and ${numofUnhealthyKidneys} unhealthy kidneys.` });
  })
  app.listen(2000);