const axios = require("axios");

const addr = "http://127.0.0.1:8080/data.json";

let promise = new Promise(function (resolve, reject) {
	const data = axios.get(addr).data;
	return resolve(data);
	reject("failed");
});

  // resolve runs the first function in .then
  promise.then(
	result => console.log(promise), // shows json
	error => alert(error) // doesn't run
  );