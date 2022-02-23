import { renderMovies } from '../render-utils.js';
const test = QUnit.test;

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
