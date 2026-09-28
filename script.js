let movies = [

    {
        title: "Inception",
        year: 2010,
        rating: 8.8,
        icon: "🌀"
    },

    {
        title: "Interstellar",
        year: 2014,
        rating: 8.7,
        icon: "🚀"
    },

    {
        title: "Avengers Endgame",
        year: 2019,
        rating: 8.4,
        icon: "🦸"
    },

    {
        title: "The Dark Knight",
        year: 2008,
        rating: 9.0,
        icon: "🦇"
    },

    {
        title: "Joker",
        year: 2019,
        rating: 8.3,
        icon: "🃏"
    },

    {
        title: "Avatar",
        year: 2009,
        rating: 7.8,
        icon: "🌌"
    },

    {
        title: "Titanic",
        year: 1997,
        rating: 7.9,
        icon: "🚢"
    },

    {
        title: "Spider-Man",
        year: 2002,
        rating: 7.4,
        icon: "🕷️"
    }

];

let favorites =
    JSON.parse(localStorage.getItem("favorites")) || [];

function displayMovies(list) {

    let movieList = document.getElementById("movieList");

    movieList.innerHTML = "";

    if (list.length === 0) {

        document.getElementById("message").textContent =
            "No movie found.";

        return;
    }

    document.getElementById("message").textContent = "";

    list.forEach(movie => {

        let isFavorite =
            favorites.includes(movie.title);

        movieList.innerHTML += `

            <div class="movie">

                <div class="poster">
                    ${movie.icon}
                </div>

                <h2>${movie.title}</h2>

                <p>Year: ${movie.year}</p>

                <p class="rating">
                    ⭐ ${movie.rating}/10
                </p>

                <button onclick="addFavorite('${movie.title}')">
                    ${isFavorite ? "❤️ Favorite" : "☆ Add Favorite"}
                </button>

            </div>
        `;
    });
}

function searchMovies() {

    let input =
        document.getElementById("searchInput")
        .value
        .toLowerCase()
        .trim();

    if (input === "") {

        displayMovies(movies);

        return;
    }

    let result = movies.filter(movie =>
        movie.title.toLowerCase().includes(input)
    );

    displayMovies(result);
}

function addFavorite(title) {

    if (!favorites.includes(title)) {

        favorites.push(title);

        localStorage.setItem(
            "favorites",
            JSON.stringify(favorites)
        );

        alert(title + " added to favorites!");
    }

    displayMovies(movies);
}

displayMovies(movies);