import React, { useState } from "react";
import Movie from "./Movie";

const WatchedMovies = ({ratings}) => {
    return (
        <div className="movies-container">
            {ratings.length === 0 && 
                <div className="display-flex-center">
                    <h2>Brak obejrzanych filmów</h2>
                </div>
            }
            {ratings && ratings.map((rating) => {
                return <Movie movie={rating.movie} key={rating.movie.imdbID} />
            })}
        </div>  
        
    )
}

export default WatchedMovies;
