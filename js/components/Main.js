import React from "react";
import { HashRouter, Switch, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../redux/store";
import Search from "../containers/Search"
import Navigation from "../components/Navigation";

const Main = () => {
    return (
        <HashRouter>
            <Provider store={store}>
                <Navigation/>
                <Switch>
                    <Route exact path="/" component={Search}/>
                </Switch>
            </Provider>
            
        </HashRouter>
    )
}

export default Main;
