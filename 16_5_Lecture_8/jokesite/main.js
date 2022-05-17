import { jokes } from "./jokes.js"

// Empty the div of previous jokes on each button press. Also joke title
const resetJokes = () => {
    const jokes = document.getElementById("jokes");
    const jokeTitle = document.getElementById("joketitle");
    jokes.innerHTML = "";
    jokeTitle.innerHTML = "";
}

const addJoke = (text) => {
    const pTag = document.createElement("p");
    pTag.innerHTML = text;
    pTag.classList.add("joke");
    document.getElementById("jokes").appendChild(pTag); 
}

const btnRandom = document.getElementById("btnRandom");
const btnNerdy = document.getElementById("btnNerdy");
const btnAll = document.getElementById("btnAll");

btnRandom.addEventListener("click", (event) => {
    event.preventDefault();

    const randomJoke = Math.floor(Math.random() * (jokes.length + 1));

    resetJokes();

    const pTag = document.createElement("p");
    const bTag = document.createElement("b");

    pTag.appendChild(bTag);
    bTag.innerHTML = "A randomly chosen Chuck Norris joke for your displeasure";
    document.getElementById("joketitle").appendChild(pTag); 

    addJoke(jokes[randomJoke].joke);
})

btnNerdy.addEventListener("click", (event) => {
    event.preventDefault();

    const nerdyJokes = jokes.filter((joke) => joke.categories.includes("nerdy"));
    const randomJoke = Math.floor(Math.random() * (nerdyJokes.length + 1));

    resetJokes();

    const pTag = document.createElement("p");
    const bTag = document.createElement("b");

    pTag.appendChild(bTag);
    bTag.innerHTML = "A randomly chosen nerdy Chuck Norris joke for your geeky displeasure";
    document.getElementById("joketitle").appendChild(pTag);

    addJoke(nerdyJokes[randomJoke].joke);
})

btnAll.addEventListener("click", (event) => {
    event.preventDefault();

    resetJokes();

    const pTag = document.createElement("p");
    const bTag = document.createElement("b");

    pTag.appendChild(bTag);
    bTag.innerHTML = "Every single Chuck Norris joke for your EXTREME displeasure";
    document.getElementById("joketitle").appendChild(pTag); 

    jokes.map((joke) => {
        addJoke(joke.joke);
    })
})