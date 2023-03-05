import React from "react";
import classes from "./Header.module.css";

const Header = () => {
    return (
        <>
            <header className={classes.header}></header>
            <div className={classes["main-image"]}>
                <img />
            </div>
        </>
    );
}

export default Header;