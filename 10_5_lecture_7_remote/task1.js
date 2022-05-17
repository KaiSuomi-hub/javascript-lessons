//Antti Suomi 16.5

const axios = require("axios");

const getData = async (url) => {
	const data = (await axios.get(url)).data; //here we create a new function that get's the json data
	return data;
};

const addr = "https://jsonplaceholder.typicode.com/todos/";
const userId = async (id) => getData(`https://jsonplaceholder.typicode.com/users/${id}`); //he we get data per user id

async function main() {
	const data = await getData(addr);
	//  console.log(data);
	const users = await getData("https://jsonplaceholder.typicode.com/users/");
	const usersObj = {};
	users.forEach((u) => (usersObj[u.id] = u));
	// console.log(users.userId);
	for (const post of data) {
		const id = post.userId;
		const {
			name,
			username,
			email
		} = usersObj[id];
		delete post.userId;
		post.user = {
			name,
			username,
			email
		};
	}

	console.log(data);
}

main();
//thx tuoppis