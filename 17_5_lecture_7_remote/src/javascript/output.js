// 17.5.2022 Antti Suomi

import axios from 'axios';

const getData = async (url) => {
    const data = (await axios.get(url)).data; //here we create a new function that get's the json data
    return data;
};
const addr = "../data/data.json";

const output = (needThisHtml) => {


}
export { output };
let outputJson = JSON.parse(jsonString); //* here we read the data to object(?)
