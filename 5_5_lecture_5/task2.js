// 5.5.2022 Antti Suomi
// let allForecasts = '';
const fs = require("fs");

const forecast = {
    day: "monday",
    temperature: 20,
    cloudy: true,
    sunny: false,
    windy: false,
};

const jsonString = JSON.stringify(forecast);

fs.writeFile("./forecast-data.json", jsonString, (err) => {
    if (err) {
        console.log("Error writing file", err);
    } else {
        console.log("Successfully wrote file");
    }
});

// const data = require('./forecast-data.json');

fs.readFile("./forecast-data.json", "utf8", (err, jsonString) => {
    if (err) {
        console.log("File read failed:", err);
        return;
    }
    try {
        let forecastJson = JSON.parse(jsonString); //* here we read the forecast data to object(?)

        forecastJson.temperature = 4; //* this changes the value
        const forecastWrite = JSON.stringify(forecastJson); //* here change the forecast data to json

        fs.writeFile("./forecast-data.json", forecastWrite, (err) => {
		if (err) console.log(err);
		else console.log("success changing temp");
        })
		//* here wrote the forecastWrite json to file
        // console.log(forecastWrite); // we need delve a bit deeper
    } catch (err) {
        console.log("Error parsing JSON string:", err);
    }
});
