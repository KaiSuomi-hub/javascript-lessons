//Antti Suomi
//5.5.2022
let text = '';
const fs = require('fs');
// let text = ''
// read the whole file to memory
// fs.readFile("./newFile.txt", "utf-8", (err, file) => {
// 	if (err) console.log(err);
// 	else console.log(file);
// })


// stream the file
const readStream = fs.createReadStream("./newFile.txt", 'utf-8');

readStream.on("data", (txt) => {
	text = txt;
	txt.replace('joulu', 'kinkku');
	txt.replace('lapsilla', 'poroilla');

}
);
	console.log(text);
