import { connect } from "react-redux";
import ToWatchMovies from "../components/ToWatchMovies";

const mapState = (state) => {
    return ({
        movies: state.moviesToWatch
    })
}

export default connect(mapState)(ToWatchMovies);
