import { checkAuth, logout, fetchMovies } from '../fetch-utils.js';
import { renderMovies } from '../render-utils.js';

checkAuth();

const logoutButton = document.getElementById('logout');
const movieContainer = document.querySelector('.movie-container');

logoutButton.addEventListener('click', () => {
    logout();
});

window.addEventListener('load', async () => {
    const movies = await fetchMovies();

    for (let movie of movies) {
        const movieEl = renderMovies(movie);

        movieContainer.append(movieEl);
    }
    return movieContainer;
});
