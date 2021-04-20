import { connect } from "react-redux";
import MovieDetails from "../components/MovieDetails";
import { fetchMovie } from "../redux/actions/movieDetails";

const mapState = (state) => {
    const {loading, movie, error} = state.details

    return ({
        loading,
        movie,
        error
    })
}

const mapDispatch = (dispatch, ownProps) => {
    const { imdb } = ownProps.match.params;

    return ({
        fetchMovie: () => dispatch(fetchMovie(imdb))
    })
}

export default connect(mapState, mapDispatch)(MovieDetails);
