export function renderMovies(movie) {
    const div = document.createElement('div');
    const img = document.createElement('img');

    div.classList.add('movie');
    img.classList.add('movie-cover');

    img.src = movie.image;

    div.append(img);
    return div;
}

export function renderMovie(movie) {
    const main = document.createElement('main');
    const div = document.createElement('div');
    const img = document.createElement('img');
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    const p3 = document.createElement('p');
    const p4 = document.createElement('p');
    const p5 = document.createElement('p');
    const form = document.createElement('form');
    const text = document.createElement('textarea');
    const select = document.createElement('select');
    const option0 = document.createElement('option');
    const input = document.createElement('input');

    main.setAttribute('id', 'main-review');
    div.setAttribute('id', 'movie-detail-container');

    img.setAttribute('src', movie.image);
    img.classList.add('detail-image');

    p1.classList.add('detail-title');
    p1.textContent = movie.title.toUpperCase();

    p2.classList.add('detail-year');
    p2.textContent = movie.year;

    p3.classList.add('detail-genre');
    p3.textContent = movie.genre;

    p4.classList.add('detail-director');
    p4.textContent = movie.director;

    p5.classList.add('detail-description');
    p5.textContent = movie.description;

    form.setAttribute('id', 'add-review-form');

    text.classList.add('add-review');

    select.classList.add('add-rating');

    option0.setAttribute('value', '');
    option0.textContent = 'add your rating';

    input.setAttribute('type', 'submit');
    input.classList.add('submit-review-button');

    div.append(img, p1, p2, p3, p4, p5);
    select.append(option0);

    let star = '*';
    for (let i = 1; i < 6; i++) {
        const option = document.createElement('option');
        option.setAttribute('value', i);
        option.textContent = star;
        star += '*';
        select.append(option);
    }

    form.append(text, select, input);
    main.append(div, form);
    return main;
}

export function renderReview(review) {
    const div = document.createElement('div');
    const div2 = document.createElement('div');
    const span = document.createElement('span');
    const span2 = document.createElement('span');
    const p = document.createElement('p');

    div.classList.add('review');
    div2.classList.add('review-header');
    span.textContent = review.email;
    let stars = '*';
    for (let i = 1; i < (review.rating + 1); i++) {
        stars += '*';
    }
    span2.textContent = stars;
    p.textContent = review.review;

    div2.append(span1, span2);
    div.append(div2, p);
    return div;
}
