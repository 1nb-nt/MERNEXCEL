function getData(callback) {
  callback("Hello Nitish");
}

getData(function(message) {
  console.log(message);
});