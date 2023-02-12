const apiKey = `88d08055`;
const searchInput = document.getElementById('input');
const resultsDiv = document.getElementById('results');

function search() {
    console.log("clicked");
    resultsDiv.innerHTML = ""
    const searchTitle = searchInput.value.trim().split(" ").join("+");
    // const searchTitle = searchInput.value.trim().replace(/ /g, "+"); // working
    // searchTitle = searchTitle.replaceAll(' ', '+'); // not working
    console.log(searchTitle)
    // fetching data from api
    fetch(`http://www.omdbapi.com/?t=${searchTitle}&apikey=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            console.log(data.imdbID);
            const movieName = document.createElement("h1");
            movieName.innerText = data.Title
            const poster = document.createElement("img");
            // poster.src = data.Poster;
            poster.src = `http://img.omdbapi.com/?i=${data.imdbID}&apikey=${apiKey}`;
            const releaseDate = document.createElement("p");
            releaseDate.textContent = `Year of Release: ${data.Released}`;
            const rating = document.createElement("p");
            rating.textContent = `IMDb Rating: ${data.Ratings[0].Value}`
            const cast = document.createElement("p");
            cast.textContent = `Cast and Crew: ${data.Actors}`
            //appending
            resultsDiv.append(movieName);
            resultsDiv.append(poster);
            resultsDiv.append(releaseDate)
            resultsDiv.appendChild(rating);
            resultsDiv.appendChild(cast);

        }).catch((err) => {
            console.log(err);
        })
};



//"https://www.omdbapi.com/?i=tt3896198&apikey=88d08055"





