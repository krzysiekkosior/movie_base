import { connect } from "react-redux";
import Stars from "../components/Stars";
import { addRating } from "../redux/actions/movies";

const mapState = (state) => {
    return ({
        ratings: state.movies.ratings
    })
}


const mapDispatch = (dispatch) => {
    return ({
        addToWatched: (rating) => dispatch(addRating(rating))
         
    })
}

export default connect(mapState, mapDispatch)(Stars)