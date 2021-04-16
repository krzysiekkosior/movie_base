import { connect } from "react-redux";
import WatchedMovies from "../components/WatchedMovies";

const mapState = (state) => {
    return ({
        ratings: state.movies.ratings
    })
}

export default connect(mapState)(WatchedMovies);
