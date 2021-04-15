import React, { useState } from "react";

const Stars = ({movie, rate}) => {
    const [rating, setRating] = useState(rate ? rate : 0);

    const changeRating = (e) => {
        console.log(e.target.value);
        setRating(e.target.value);
    }
    
    return (
        <div className="star-rating" >
            <input type="radio" id="5-stars" name="rating" value="5" 
            checked={rating === 5} onChange={changeRating}/>
            <label htmlFor="5-stars" className="star">&#9733;</label>

            <input type="radio" id="4-stars" name="rating" value="4" 
            checked={rating === 4} onChange={changeRating}/>
            <label htmlFor="4-stars" className="star">&#9733;</label>

            <input type="radio" id="3-stars" name="rating" value="3" 
            checked={rating === 3} onChange={changeRating}/>
            <label htmlFor="3-stars" className="star">&#9733;</label>

            <input type="radio" id="2-stars" name="rating" value="2" 
            checked={rating === 2} onChange={changeRating}/>
            <label htmlFor="2-stars" className="star">&#9733;</label>

            <input type="radio" id="1-star" name="rating" value="1"
            checked={rating === 1} onChange={changeRating}/>
            <label htmlFor="1-star" className="star">&#9733;</label>
        </div>
    )
}

export default Stars;
