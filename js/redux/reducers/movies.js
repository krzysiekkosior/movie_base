import { START_SEARCHING } from "../actions/movies";

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
    
        default:
            return state;;
    }
}

export default movies;
