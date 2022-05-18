// 17.5.2022 Antti Suomi

import axios from 'axios';
import 'regenerator-runtime/runtime';
const addr = 'http://localhost:1234/data.json';
let ss = 'data unchanged';

const output = () => {

async function getapi(url) {
    // Storing response
    const response = await fetch(url);
    // Storing data in form of JSON
    // let data = ss;
    let data = response.json();

	console.log(data.commands);

    return data;
}

	let dataOutToDom = getapi(addr);
	console.log('ss var '+ss);

	console.log('out of async returns '+dataOutToDom);
}

export { output };


// let outputJson = JSON.parse(jsonString); //* here we read the data to object(?)
