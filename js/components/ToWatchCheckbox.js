import React, { useState, useEffect } from "react";

const ToWatchCheckbox = ({movie, moviesToWatch, toggleToWatchMovie}) => {
    const [checkBoxValue, setCheckBoxValue] = useState()

    const handleChange = () => {
        toggleToWatchMovie(movie);
    }

    useEffect(() => {
        let isMovieOnList = moviesToWatch.findIndex((movieToWatch) => {
            return movieToWatch.imdbID === movie.imdbID;
        })
        if (isMovieOnList !== -1) {
            setCheckBoxValue(true);
        } else {
            setCheckBoxValue(false);
        }
    }, [])

    return (
        <label>Chcę obejrzeć: 
        <input type="checkbox" id={movie.imdbID} onClick={handleChange} defaultChecked={checkBoxValue}/>
        </label>
    )
}

export default ToWatchCheckbox;
