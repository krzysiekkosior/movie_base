import React from "react";
import { HashRouter, Switch, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../redux/store";
import Search from "../containers/Search";
import WatchedMovies from "../containers/WatchedMovies";
import Navigation from "../components/Navigation";
import NotFound from "../components/NotFound";

const Main = () => {
    return (
        <HashRouter>
            <Provider store={store}>
                <Navigation/>
                <Switch>
                    <Route exact path="/" component={Search}/>
                    <Route exact path="/watched" component={WatchedMovies}/>
                    <Route component={NotFound} />
                </Switch>
            </Provider>
            
        </HashRouter>
    )
}

export default Main;
