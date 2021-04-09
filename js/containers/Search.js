import { connect } from "react-redux";
import Search from "../components/Search";

const mapState = (state) => {
    const {loading, error, movies} = state.movies
    return ({
        loading,
        error,
        movies
    })
}

export default connect(mapState)(Search)
