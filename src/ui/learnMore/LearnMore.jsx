import React from "react";
import { ReactSVG } from "react-svg";

export default function LearnMore(props) {
  return (
    <button className="transition-colors ease-in-out duration-300 flex gap-2 items-center text-red-500 hover:text-slate-500 text-sm md:text-base lg:text-lg">
      {props.children}

      <ReactSVG src="external/arrow_learn_more.svg" className="w-3" />
    </button>
  );
}
