import React from "react";
import Stars from "../containers/Stars";
import { Link } from "react-router-dom";

const Movie = ({movie}) => {
    
    return (
        <div className="movie">
            <Link to={`/details/${movie.imdbID}`} className="link-text">
                <h5>{movie.Title} ({movie.Year}) ID: {movie.imdbID}</h5>
                <img className="poster" src={movie.Poster} alt={movie.Title}/>
            </Link>
            <Stars movie={movie}/>
        </div>
    )
}

export default Movie;
