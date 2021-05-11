import React, { useState, useEffect } from "react";

const Stars = ({ movie, ratings, addToWatched}) => {
    const [rating, setRating] = useState("0")

    const changeRating = (e) => {
        let rate = {
            movie,
            rating: e.target.value
        };
        console.log(rate);
        addToWatched(rate);
    }

    useEffect(() => {
        let filteredList = ratings.filter(rating => rating.movie.imdbID === movie.imdbID)
        if (filteredList.length > 0) {
            setRating(filteredList[0].rating)
        }
    }, [ratings])

    return (
        <div className="star-rating">
            
            <input type="radio" id={`5-stars-${movie.imdbID}`} name={movie.imdbID} value="5" 
            checked={rating === "5"} onChange={changeRating}/>
            <label htmlFor={`5-stars-${movie.imdbID}`} className="star">&#9733;</label>

            <input type="radio" id={`4-stars-${movie.imdbID}`} name={movie.imdbID} value="4" 
            checked={rating === "4"} onChange={changeRating}/>
            <label htmlFor={`4-stars-${movie.imdbID}`} className="star">&#9733;</label>

            <input type="radio" id={`3-stars-${movie.imdbID}`} name={movie.imdbID} value="3" 
            checked={rating === "3"} onChange={changeRating}/>
            <label htmlFor={`3-stars-${movie.imdbID}`} className="star">&#9733;</label>

            <input type="radio" id={`2-stars-${movie.imdbID}`} name={movie.imdbID} value="2" 
            checked={rating === "2"} onChange={changeRating}/>
            <label htmlFor={`2-stars-${movie.imdbID}`} className="star">&#9733;</label>

            <input type="radio" id={`1-stars-${movie.imdbID}`} name={movie.imdbID} value="1"
            checked={rating === "1"} onChange={changeRating}/>
            <label htmlFor={`1-stars-${movie.imdbID}`} className="star">&#9733;</label>
        </div>
    )
}

export default Stars;
