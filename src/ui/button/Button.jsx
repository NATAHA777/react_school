import React from "react";

const variants = {
  primary: "bg-black text-white",
  secondary: "bg-white text-black",
};

export default function Button({ children, variant = "primary" }) {
  return (
    <button
      className={
        "transition-colors ease-in-out duration-300 text-15 self-center rounded-20 w-64 h-12 border-none mb-15 cursor-pointer " +
        variants[variant]
      }
    >
      {children}
    </button>
  );
}
