import React from "react";
import { ReactSVG } from "react-svg";

const directions = {
  left: "rotate-180",
  right: "",
};

export default function ArrowLeftRight({ direction }) {
  return (
    <button className="rounded-full w-6 h-6 bg-transparent border-none">
      <ReactSVG
        src="external/arrow_left_right.svg"
        className={"w-6 " + directions[direction]}
      />
    </button>
  );
}
