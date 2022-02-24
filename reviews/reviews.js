import { checkAuth, logout, fetchMovieById } from '../fetch-utils.js';
import { renderMovie } from '../render-utils.js';

checkAuth();

const logoutButton = document.getElementById('logout');
const body = document.getElementById('main-body');

logoutButton.addEventListener('click', () => {
    logout();
});

window.addEventListener('load', async () => {
    const params = new URLSearchParams(window.location.search);
    const id = +params.get('id');
    const movie = await fetchMovieById(id);
    console.log(movie);
    body.append(renderMovie(movie));
});
