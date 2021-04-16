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
            let allRatings = [...state.ratings];
            let ratedMovieIndex = allRatings.findIndex(rating => rating.movie.imdbID === action.payload.movie.imdbID)
            if (ratedMovieIndex !== -1) {
                allRatings[ratedMovieIndex].rating = action.payload.rating
                return {
                    ...state,
                    ratings: [...allRatings]
                }
            }
            return {
                ...state,
                ratings: [...allRatings, action.payload]
            }
    
        default:
            return state;;
    }
}

function changeRating( value, desc ) {
    for (var i in projects) {
      if (projects[i].value == value) {
         projects[i].desc = desc;
         break; //Stop this loop, we found it!
      }
    }
 }

export default movies;
