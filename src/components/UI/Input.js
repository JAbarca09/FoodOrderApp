import React from "react";
import classes from "./Input.module.css";

const Input = (props) => {
  return (
    <>
      <label htmlFor={props.id} className={classes.input}>
        {props.label}
      </label>
      <input 
        type={props.type}
        id={props.id}
        />
    </>
  );
};

export default Input;
