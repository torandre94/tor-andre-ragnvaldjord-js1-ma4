const resultsContainer = document.querySelector(".results");

const url = "https://api.rawg.io/api/games?dates=1999-01-01,1999-12-31&ordering=-rating";

async function callApi() {

    try {
    const response = await fetch(url);
    const json = await response.json();

    const results = json.results;

    results.forEach(function (result) {
        resultsContainer.innerHTML +=   `<a href="question3.html?id=${result.id}">
                                            <h3>${result.name}</h3>
                                            <p>Rating: ${result.rating}</p>
                                            <time>Released: ${result.released}</time>
                                            <img src="${result.background_image}" alt="${result.name}" />
                                        </a>`;
                                        
    });
    }
    catch(error) {
        resultsContainer.innerHTML = "An error has occurred!"
    }
}

callApi();
