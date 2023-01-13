import React from "react";
import style from "../styles/modules/title.module.scss";

const Title = ({ children, ...rest }) => {
  return (
    <p className={style.app__title} {...rest}>
      {children}
    </p>
  );
};

export default Title;
