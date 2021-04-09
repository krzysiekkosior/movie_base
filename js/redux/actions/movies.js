const START_SEARCHING = "START_SEARCHING"
const SEARCH_MOVIES_ERROR = "SEARCH_MOVIES_ERROR"
const SEARCH_MOVIES_OK = "SEARSEARCH_MOVIES_OKCHED_MOVIES"

const startSearching =  () => {
    return {
        type: START_SEARCHING
    }
}

const searchMoviesError = (error) => {
    return {
        type: SEARCH_ERROR,
        error
    }
}

const searchMoviesOk = (movies) => {
    return {
        type: SEARCH_ERROR,
        movies
    }
}

const fetchMovies = (movieName) => (dispatch) => {
    dispatch(startSearching())

    console.log("przeszło", movieName);
}

export {
    START_SEARCHING, SEARCH_MOVIES_ERROR, SEARCH_MOVIES_OK, fetchMovies
}
