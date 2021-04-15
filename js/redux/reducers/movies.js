import { 
    START_SEARCHING, MOVIES_NOT_FOUND, MOVIES_FOUND, ADD_RATING
    } from "../actions/movies";

const initState = {
    loading: false,
    error: "",
    movies: [],
    ratings: []
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
                ...state,
                loading: false,
                error: action.error,
                movies: []
            }

        case MOVIES_FOUND:
            return {
                ...state,
                loading: false,
                error: "",
                movies: action.movies
            }

        case ADD_RATING:
            let allRatings = state.ratings;
            let isMovieRated = !!allRatings.filter(rating => rating.imdbID === action.payload.imdbID);
            if (isMovieRated) {
                allRatings = allRatings.filter(rating => rating.imdbID !== action.payload.imdbID)
            }
            return {
                ...state,
                ratings: [allRatings, action.payload]
            }
    
        default:
            return state;;
    }
}

export default movies;
