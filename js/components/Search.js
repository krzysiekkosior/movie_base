import React from "react";

const Search = ({loading, error, movies}) => {
    return (
        <>
        {!movies && <h1>Rozpocznij wyszukiwanie filmów!</h1>}
        <form>
            Szukaj
        </form>
        {loading && "Wyszukiwanie filmów..."}      
        </>
    )
}

export default Search;
