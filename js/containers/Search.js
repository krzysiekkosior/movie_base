import { connect } from "react-redux";
import Search from "../components/Search";
import { fetchMovies } from "../redux/actions/movies";

const mapState = (state) => {
    const {loading, error, movies} = state.movies
    return ({
        loading,
        error,
        movies,
    })
}

const mapDispatch = (dispatch) => {
    return ({
        fetchMovies: (movieName) => dispatch(fetchMovies(movieName)),       
    })
}

export default connect(mapState, mapDispatch)(Search)
