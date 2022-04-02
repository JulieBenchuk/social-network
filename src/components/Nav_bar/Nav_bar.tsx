import React from "react";
import classes from "./Nav_bar.module.css";

const Nav_bar = () => {
    return (
        <nav className={classes.nav_bar}>
            <div className={classes.item}>
                <a href="">Profile</a>
            </div>
            <div className={classes.item}>
                <a href="">Messages</a>
            </div>
            <div className={classes.item}>
                <a href="">News</a>
            </div>
            <div className={classes.item}>
                <a href="">Music</a>
            </div>
            <div className={classes.item}>
                <a href="">Settings</a>
            </div>
        </nav>
    )
}

export default Nav_bar;