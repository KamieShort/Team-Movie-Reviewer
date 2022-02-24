import { renderMovies, renderMovie } from '../render-utils.js';
const test = QUnit.test;

const movie = {
    created_at: '2022-02-23T21:52:01+00:00',
    description: "A pragmatic paleontologist touring an almost complete theme park on an island in Central America is tasked with protecting a couple of kids after a power failure causes the park's cloned dinosaurs to run loose.",
    director: 'Steven Spielberg',
    genre: 'Sci-Fi',
    id: 7,
    image: '../assets/jurassicpark.jpg',
    title: 'Jurassic Park',
    year: '1993'
};

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div class="movie"><img class="movie-cover" src="../assets/jurassicpark.jpg"></div>`;

    //Act
    // Call the function you're testing and set the result to a const
    const actual = renderMovies({
        image: `../assets/jurassicpark.jpg`,
        title: `Jurassic Park`,
    });

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});

test('should take in movie object and render', (expect) => {
    const expected = `<main id="main-review"><div id="movie-detail-container"><img src="../assets/jurassicpark.jpg" class="detail-image"><p class="detail-title">JURASSIC PARK</p><p class="detail-year">1993</p><p class="detail-genre">Sci-Fi</p><p class="detail-director">Steven Spielberg</p><p class="detail-description">A pragmatic paleontologist touring an almost complete theme park on an island in Central America is tasked with protecting a couple of kids after a power failure causes the park's cloned dinosaurs to run loose.</p></div><form id="add-review-form"><textarea class="add-review"></textarea><select class="add-rating"><option value="">add your rating</option><option value="1">*</option><option value="2">**</option><option value="3">***</option><option value="4">****</option><option value="5">*****</option></select><input type="submit" class="submit-review-button"></form></main>`;

    const actual = renderMovie(movie);

    expect.equal(actual.outerHTML, expected);
});
