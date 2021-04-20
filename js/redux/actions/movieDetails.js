import API_URL from "../../api/constants";

const START_FETCHING = "START_FETCHING"
const MOVIE_NOT_FOUND = "MOVIE_NOT_FOUND";
const MOVIE_FOUND = "MOVIE_FOUND";

const startFetching = () => {
    return ({
        type: START_FETCHING
    })
}

const movieNotFound = () => {
    return {
        type: MOVIE_NOT_FOUND,
        error: "Taki film nie istnieje."
    }
}

const movieFound = (movie) => {
    return {
        type: MOVIE_FOUND,
        movie
    }
}

const fetchMovie = (imdb) => (dispatch) => {
    dispatch(startFetching())
    let link = `${API_URL}&i=${imdb}`
    console.log(link);

    fetch(`${API_URL}&i=${imdb}`)
        .then(res => {
            if (res.ok) {
                return res.json();
            }
        })
        .then(res => {
            if (res.Response === "True") {
                console.log(res);
                const movie = {
                    Title: res.Title,
                    Poster: res.Poster,
                    Director: res.Director,
                    Plot: res.Plot,
                    Year: res.Year,
                    imdbID: res. imdbID
                }
                dispatch(movieFound(movie))
            } else {
                dispatch(movieNotFound())
            }
        })
        .catch(error => console.log(error))
}

export {
    START_FETCHING, MOVIE_NOT_FOUND, MOVIE_FOUND, fetchMovie
}