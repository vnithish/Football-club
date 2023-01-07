import React from "react";

import styles from "./InputControl.css";

function InputControl(props) {
  return (
    <div className={styles.container}>
      {props.label && <label>{props.label}</label>}
      <input {...props} />
    </div>
  );
}

export default InputControl;
