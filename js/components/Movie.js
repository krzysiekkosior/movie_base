import React from "react";
import Stars from "../containers/Stars";

const Movie = ({movie}) => {
    
    return (
        <div className="movie">
            <h5>{movie.Title} ({movie.Year}) ID: {movie.imdbID}</h5>
            <img className="poster" src={movie.Poster} alt={movie.Title}/>
            <Stars movieId={movie.imdbID}/>
        </div>
    )
}

export default Movie;
