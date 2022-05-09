const go = () => {
	console.log("Go!")
}

const one = () => {
	setTimeout(go, 400)
	console.log("One!")
}

const two = () => {
	setTimeout(one, 400)
	console.log("Two!")
}

const three = () => {
	setTimeout(two, 400)
	console.log("Three!")
}




// anotherFunction();