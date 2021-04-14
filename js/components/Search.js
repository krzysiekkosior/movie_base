import React, { useState } from "react";

const Search = ({loading, error, movies, fetchMovies}) => {
    const [name, setName] = useState("");
    const [formError, setFormError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormError("");
        if (name.length < 3) {
            setFormError("Wpisz frazę składającą się z minimum 3 znaków");
        } else {
            fetchMovies(name);
        }
    }
    
    return (
        <div className="search">
        {movies.length === 0 && <h3>Rozpocznij wyszukiwanie filmów!</h3>}
        <form onSubmit={handleSubmit}>
            <label>
                Nazwa filmu
                <input type="text" 
                value={name} onChange={e => setName(e.target.value)}/>
            </label>
            <input type="submit" value="Szukaj"/>
        </form>
        {formError && formError}
        <hr/>
        {loading && "Wyszukiwanie filmów..."}    
        {error && error}
        <div className="movies-container">
        {movies && movies.map((movie) => {
            return (
                <div key={movie.imdbID} className="movie">
                    <h5>{movie.Title} ({movie.Year})</h5>
                    <img className="poster" src={movie.Poster} alt={movie.Title}/>
                </div>
            )
        })}
        </div>  
        </div>
    )
}

export default Search;
