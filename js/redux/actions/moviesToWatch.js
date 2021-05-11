const TOGGLE_MOVIE_TO_WATCH = "TOGGLE_MOVIE_TO_WATCH"

const toggleMovieToWatch = (payload) => {
    return ({
        type: TOGGLE_MOVIE_TO_WATCH,
        payload
    })
}

export { TOGGLE_MOVIE_TO_WATCH, toggleMovieToWatch };
