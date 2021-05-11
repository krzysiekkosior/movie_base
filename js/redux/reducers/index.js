import { combineReducers } from "redux";
import movies from "./movies";
import movieDetails from "./movieDetails";
import moviesToWatch from "./moviesToWatch";

export default combineReducers({
    movies,
    details: movieDetails,
    moviesToWatch
})