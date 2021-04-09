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
        <>
        {movies.length === 0 && <h3>Rozpocznij wyszukiwanie filmów!</h3>}
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Nazwa filmu" 
            value={name} onChange={e => setName(e.target.value)}/>
            <input type="submit" value="Szukaj"/>
        </form>
        {formError && formError}
        {loading && "Wyszukiwanie filmów..."}      
        </>
    )
}

export default Search;
