export function renderMovies(movie) {
    const div = document.createElement('div');
    const img = document.createElement('img');

    div.classList.add('movie');
    img.classList.add('movie-cover');

    img.src = movie.image;

    div.append(img);
    return div;
}
