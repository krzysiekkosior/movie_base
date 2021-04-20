import React, { useEffect } from "react";
import Spinner from "./Spinner";
import Stars from "../containers/Stars";

const MovieDetails = ({loading, movie, error, fetchMovie}) => {

    useEffect(() => {
        fetchMovie()
    }, [])

    return (
        <div className="movie-container">
        {loading && <Spinner />}  
        {error && <h3>{error}</h3>}
        {movie && <>
            <div className="details-left">
                <h3>{movie.Title}</h3>
                <img className="poster-big" src={movie.Poster} alt={movie.Title}/>
                <Stars movie={movie}/>
            </div>
            <div className="details-right">
                <p>Rok wydania: {movie.Title}</p>
                <p>Reżyser: {movie.Director}</p>
                <p className="plot">{movie.Plot}</p>
            </div>
        </>
        }
        </div>
    )
}

export default MovieDetails;
