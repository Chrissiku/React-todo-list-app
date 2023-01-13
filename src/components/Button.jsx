import React from "react";
import styles from "../styles/modules/button.module.scss";
import getClasses from "../utils/getClasses";

const buttonTypes = { primary: "primary", secondary: "secondary" };

const Button = ({ type, variant = "primary", children, ...rest }) => {
  return (
    <button
      type={type === "submit" ? "submit" : "buttom"}
      className={getClasses([
        styles.app__button,
        styles[`button__${buttonTypes[variant]}`],
        { ...rest },
      ])}
    >
      {children}
    </button>
  );
};

const SelectButton = ({ id, children, ...rest }) => {
  return (
    <select
      id={id}
      {...rest}
      className={getClasses([styles.app__button, styles.app__button__select])}
    >
      {children}
    </select>
  );
};

export { SelectButton };
export default Button;
