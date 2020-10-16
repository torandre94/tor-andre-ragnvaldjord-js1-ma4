const detailContainer = document.querySelector(".detail");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");


const url = "https://api.rawg.io/api/games/" + id;


async function fetchGame() {

    try {
        const response = await fetch(url);
        const details = await response.json();

        createHtml(details);
    }
    catch(error) {
        detailContainer.innerHTML = "An error has occurred!"
    }
}

fetchGame();

function createHtml(details) {
    detailContainer.innerHTML = `<h1>${details.name}</h1>
                                <p>${details.description}</p>
                                <p>Released: ${details.released}</p>
                                <p>Rating: ${details.rating}</p>
                                <p>Number of ratings: ${details.ratings_count}</p>`;
}
