import React from "react";

export default function MenuItem({ icon, children }) {
  return (
    <div className="text-15 text-white px-6 items-center cursor-pointer transition-colors duration-200 flex gap-2">
      {icon}
      {children}
    </div>
  );
}
