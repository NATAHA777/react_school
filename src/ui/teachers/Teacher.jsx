import React from "react";
import style from "./teacher.module.css";

export default function Teacher(props) {
  return (
    <div className={`${style.teacher}`}>
      {props.children}
    </div>
  );
}