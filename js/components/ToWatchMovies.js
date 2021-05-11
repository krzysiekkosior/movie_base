import React from "react";
import Movie from "./Movie";

const ToWatchMovies = ({movies}) => {
    return (
        <div className="movies-container">
            {movies.length === 0 && 
                <div className="display-flex-center">
                    <h2>Brak filmów do obejrzenia</h2>
                </div>
            }
            {movies && movies.map((movie) => {
                return <Movie movie={movie} key={movie.imdbID} />
            })}
        </div>  
        
    )
}

export default ToWatchMovies;
