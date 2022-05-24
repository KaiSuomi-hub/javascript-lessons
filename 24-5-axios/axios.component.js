//Antti Suomi 24.5

const axios = require("axios");

const getData = async (url) => {
    const data = (await axios.get(url)).data; //here we create a new function that get's the json data
    return data;
};

const addr = "127.0.0.1:8080/data.json";


async function main() {
    const data = await getData(addr);
    console.log(data);
    return data;
}

document.getElementById("main").innerHTML =main(); // we push main to main div