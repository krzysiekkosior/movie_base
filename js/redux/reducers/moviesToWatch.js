import { TOGGLE_MOVIE_TO_WATCH } from "../actions/moviesToWatch";

const moviesToWatch = (state = [], action) => {
    switch (action.type) {
        case TOGGLE_MOVIE_TO_WATCH:
            let movies = [...state];
            let movieId = action.payload.imdbID;
            let isMovieOnList = movies.findIndex(movie => movie.imdbID === movieId)
            if (isMovieOnList !== -1) {
                let filteredMovies = movies.filter(movie => movie.imdbID !== movieId)
                return filteredMovies;
            }
            return [...state, action.payload];

        // case REMOVE_MOVIE_TO_WATCH:
        //     let allMoviesToWatch = [...state];
        //     filteredMoviesToWatch = allMoviesToWatch.filter((id) => id !== action.payload);
        //     return filteredMoviesToWatch;
    
        default:
            return state;
    }
}

export default moviesToWatch;
