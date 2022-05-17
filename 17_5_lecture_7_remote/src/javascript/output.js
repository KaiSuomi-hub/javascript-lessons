// 17.5.2022 Antti Suomi

import axios from 'axios';
import 'regenerator-runtime/runtime';
const addr = 'http://localhost:1234/data.json';


const output = () => {

async function getapi(url) {

    // Storing response
    const response = await fetch(url);

    // Storing data in form of JSON
    var data = await response.json();
    console.log(data.commands);

    // show(data);
}




	// let gg = fetch(addr);
	// console.log(gg)
	// let ff = JSON.parse(gg);
	// console.log(ff);
	// return ff;
	getapi(addr);
}

export { output };


// let outputJson = JSON.parse(jsonString); //* here we read the data to object(?)
