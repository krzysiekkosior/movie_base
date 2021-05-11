import React from "react";

const ToWatchCheckbox = ({movie, moviesToWatch, changeToWatchValue}) => {
    const handleChange = ({target: {id, value}}) => {
        let movieId = id
        console.log(movieId);
        changeToWatchValue();
    }

    return (
        <label>Chcę obejrzeć: 
        <input type="checkbox" id={movie.imdbID} onChange={handleChange}/>
        </label>
    )
}

export default ToWatchCheckbox;
