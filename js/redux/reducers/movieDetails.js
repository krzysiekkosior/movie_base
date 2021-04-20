import { START_FETCHING, MOVIE_NOT_FOUND, MOVIE_FOUND } from "../actions/movieDetails";

const initState = {
    loading: false,
    error: "",
    movie: ""
}


const movieDetails = (state = initState, action) => {
    switch (action.type) {
        case START_FETCHING:
            return ({
                ...state, 
                loading: true
            })
        case MOVIE_NOT_FOUND:
            return ({
                loading: false,
                error: action.error,
                movie: ""
            })

        case MOVIE_FOUND:
            return ({
                loading: false,
                error: "",
                movie: action.movie
            })
    
        default:
            return state;
    }
}

export default movieDetails;
