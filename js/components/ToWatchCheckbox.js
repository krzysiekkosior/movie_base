import React from "react";

const ToWatchCheckbox = ({movie, moviesToWatch, toggleToWatchMovie}) => {
    const handleChange = () => {
        toggleToWatchMovie(movie);
    }

    return (
        <label>Chcę obejrzeć: 
        <input type="checkbox" id={movie.imdbID} onChange={handleChange}/>
        </label>
    )
}

export default ToWatchCheckbox;
