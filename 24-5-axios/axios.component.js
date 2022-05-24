//Antti Suomi 24.5

const axios = require("axios");
// import {axios} from "./node_modules/axios/lib/axios.js";
const getData = async (url) => { // async makes the function a promise that can be resolved
    const data = (await axios.get(url)).data; //here we create a new function that get's the json data
    return data;
};
let dd = 'ss'
const addr = "http://127.0.0.1:8080/data.json";


async function main() {
    const data = await getData(addr);
    let dataout = '<p>' + data.employees + '</p>';
    console.log(dataout);
	return dataout;
}

main();
// export default main;