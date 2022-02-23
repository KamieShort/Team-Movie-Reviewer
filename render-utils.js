export function renderMovies(movie) {
    const div = document.createElement('div');
    const img = document.createElement('img');
    const p = document.createElement('p');

    div.classList.add('movie');
    img.classList.add('movie-cover');
    p.classList.add('movie-title');

    img.src = movie.image;
    p.textContent = movie.title;

    div.append(img, p);
    return div;
}
