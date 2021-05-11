import { TOGGLE_MOVIE_TO_WATCH } from "../actions/moviesToWatch";

const moviesToWatch = (state = [], action) => {
    switch (action.type) {
        case TOGGLE_MOVIE_TO_WATCH:
            console.warn("jestem tutaaaaaaaaaaaaaaaaaaaaaaaaaj");
            return state;
    
        default:
            return state;
    }
}

export default moviesToWatch;
