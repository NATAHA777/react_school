import React from "react";
import { Link } from "react-router-dom";

export default function NavMenuItem({ icon, children, to, active }) {
  return (
    <Link to={to}>
      <div
        className={
          "flex gap-4 px-7 py-3 text-white text-15 cursor-pointer hover:font-black " +
          (active ? "font-black text-rose-500" : "font-normal")
        }
      >
        <div>{icon}</div>
        <div>{children}</div>
      </div>
    </Link>
  );
}
