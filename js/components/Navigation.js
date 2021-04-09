import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
    const activeStyle = {
        fontWeight: "bold",
        color: "red"
    }

    return (
        <nav className="navbar">
        <p><NavLink exact to="/" activeStyle={activeStyle}>Wyszukiwarka</NavLink></p>
        <p><NavLink exact to="/watched" activeStyle={activeStyle}>Obejrzane</NavLink></p>
        <p><NavLink exact to="/to-watch" activeStyle={activeStyle}>Do obejrzenia</NavLink></p>
        </nav>
    )
}

export default Navigation;
