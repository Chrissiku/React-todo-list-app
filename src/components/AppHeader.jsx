import React from "react";
import Button, { SelectButton } from "./Button";
import styles from "../styles/modules/app.module.scss";

const AppHeader = () => {
  return (
    <div className={styles.app__header}>
      <Button variant="primary">Add Task</Button>
      <SelectButton id="status">
        <option value="all">all</option>
        <option value="complete">complete</option>
        <option value="incomplete">incomplete</option>
      </SelectButton>
    </div>
  );
};

export default AppHeader;
