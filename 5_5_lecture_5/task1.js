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
const stream = fs.createWriteStream("./changedFile.txt");
readStream.on("data", (txt) => {
	text = txt;
	text = text.replace(/joulu/gi, 'kinkku');
	text = text.replace(/lapsilla/gi, 'poroilla');

	stream.write(text,(err) => {
		if (err) console.log(err);
		else console.log("success");
		});
}
);
