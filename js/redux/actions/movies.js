import API_URL from "../../api/constants";

const START_SEARCHING = "START_SEARCHING";
const MOVIES_NOT_FOUND = "MOVIES_NOT_FOUND";
const MOVIES_FOUND = "MOVIES_FOUND";
const ADD_RATING = "ADD_RATING";

const startSearching =  () => {
    return {
        type: START_SEARCHING
    }
}

const moviesNotFound = () => {
    return {
        type: MOVIES_NOT_FOUND,
        error: "Nie znaleziono filmów spełniających kryteria wyszukiwania."
    }
}

const moviesFound = (movies) => {
    return {
        type: MOVIES_FOUND,
        movies
    }
}

const fetchMovies = (movieName) => (dispatch) => {
    dispatch(startSearching())

    fetch(`${API_URL}&s=${movieName}`)
        .then(res => {
            if (res.ok) {
                return res.json();
            }
        })
        .then(res => {
            if (res.Response === "True") {
                dispatch(moviesFound(res.Search))
            } else {
                dispatch(moviesNotFound())
            }
        })
        .catch(error => console.log(error))
}

const addRating = (payload) => {
    return ({
        type: ADD_RATING,
        payload
    })
}

export {
    START_SEARCHING, MOVIES_NOT_FOUND, MOVIES_FOUND, fetchMovies, addRating, ADD_RATING
}
