import React from "react";
import classes from "./Header.module.css";
import meals from '../assets/meals.jpg';

const Header = () => {
    return (
        <>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
            </header>
            <div className={classes["main-image"]}>
                <img src={meals} alt=""/>
            </div>
        </>
    );
}

export default Header;