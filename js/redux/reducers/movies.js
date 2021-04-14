import { START_SEARCHING, MOVIES_NOT_FOUND, MOVIES_FOUND } from "../actions/movies";

const initState = {
    loading: false,
    error: "",
    movies: []
}

const movies = (state = initState, action) => {
    switch (action.type) {
        case START_SEARCHING:
            return {
                ...state,
                loading: true
            }

        case MOVIES_NOT_FOUND:
            return {
                loading: false,
                error: action.error,
                movies: []
            }

        case MOVIES_FOUND:
            return {
                loading: false,
                error: "",
                movies: action.movies
            }
    
        default:
            return state;;
    }
}

export default movies;
