// Antti Suomi 24.4


console.log('\x1b[31m%s\x1b[0m',"Language selector");
let lang = process.argv[2];

switch (lang) {
	case "fi":
		greeting = "Moi Maailma";
		break;
	case "en":
		greeting = "Hello World";
		break;
	case "es":
		greeting = "Hola El Mundo";
		break;
	default:
		greeting = "Hello World";
}

console.log(greeting);

