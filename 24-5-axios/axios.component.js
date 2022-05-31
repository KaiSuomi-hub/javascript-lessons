//Antti Suomi 24.5

const axios = require("axios");
// import {axios} from "./node_modules/axios/lib/axios.js";
const getData = async (url) => { // async makes the function a promise that can be resolved
    const data = (await axios.get(url)).data; //here we create a new function that get's the json data
    // console.log(data);
    return data;
};
const addr = "http://127.0.0.1:8080/data.json";



async function main() {

    const getName = (item) => {
    return item.employees.name;
}
    let i = 0;
    const data = await getData(addr);
    data.employees.forEach(function () {
        let name = data.employees[i].name
        // console.log(data.employees[i].name);
        i++
        // console.log(name)
        return name;
    });
    // console.log(data.employees);

    return data;


}

main();
// export default main;