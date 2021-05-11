import { connect } from "react-redux";
import ToWatchCheckbox from "../components/ToWatchCheckbox";
import { toggleMovieToWatch } from "../redux/actions/moviesToWatch";

const mapState = (state) => {
    return ({
        moviesToWatch: state.moviesToWatch
    })
}

const mapDispatch = (dispatch) => {
    return ({
        toggleToWatchMovie: (movie) => dispatch(toggleMovieToWatch(movie)),
    })
}

export default connect(mapState, mapDispatch)(ToWatchCheckbox);
