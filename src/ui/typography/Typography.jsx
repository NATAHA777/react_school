import React from "react";
import styles from "./typography.module.css";

export default function Typography(props) {
  return (
    <div className={`${styles.typography} ${styles[props.variant]}`}>
      {props.children}
    </div>
  );
}
