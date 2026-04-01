const obj={
  key1: "value 1",
  key2: "value 2",
  key3: "value 3"
}

let values= Object.values(obj);
console.log(values);

let keys=Object.keys(obj);
console.log(keys);

let WHoleObj=Object.entries(obj);
console.log(WHoleObj);

let consist=obj.hasOwnProperty("key1");
console.log(consist);

let newObj=Object.assign({},obj,{key4:"value 4"});
console.log(newObj);