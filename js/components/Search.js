import React, { useState } from "react";
import Movie from "./Movie";

const Search = ({ loading, error, movies, fetchMovies }) => {
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
        {movies && movies.map((movie) => <Movie movie={movie} key={movie.imdbID} />)}
        </div>  
        </div>
    )
}

export default Search;
