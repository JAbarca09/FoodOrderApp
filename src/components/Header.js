import React from "react";
import classes from "./Header.module.css";
import meals from '../assets/meals.jpg';

const Header = () => {
    return (
        <>
            <header className={classes.header}></header>
            <div className={classes["main-image"]}>
                <img src={meals}/>
            </div>
        </>
    );
}

export default Header;