//how many days there are in the given month
//Antti Suomi 26.4
let month = Number(process.argv[2]);
switch (month) {
	case 0:
		console.log('31')
		break;
	case 1:
		console.log('28')
		break;
	case 2:
		console.log('31')
		break;
	case 3:
		console.log('30')
		break;
	case 4:
		console.log('31')
		break;
	case 5:
		console.log('30')
		break;
	case 6:
		console.log('31')
		break;
	case 7:
		console.log('31')
		break;
	case 8:
		console.log('30')
		break;
	case 9:
		console.log('31')
		break;
	case 10:
		console.log('30')
		break;
	default:
		console.log('31')
}