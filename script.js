const searchBtn = document.getElementById('searchBtn');
const searchInput = document.getElementById('searchInput');
const movieContainer = document.getElementById('movieContainer');

searchBtn.addEventListener('click', () => {
    const movieName = searchInput.value;
    if (movieName) {
        fetch(`https://www.omdbapi.com/?s=${movieName}&apikey=71050e55`)
            .then(res => res.json())
            .then(data => {
                if (data.Search) {
                    displayMovies(data.Search);
                } else {
                    movieContainer.innerHTML = '<p>ရှာမတွေ့ပါဘူးခင်ဗျာ။</p>';
                }
            });
    }
});

function displayMovies(movies) {
    movieContainer.innerHTML = movies.map(movie => `
        <div class="movie-card">
            <img src="${movie.Poster}" alt="${movie.Title}">
            <h3>${movie.Title}</h3>
            <p>${movie.Year}</p>
        </div>
    `).join('');
}

