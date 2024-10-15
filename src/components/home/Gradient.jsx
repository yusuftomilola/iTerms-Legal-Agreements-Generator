import React from "react";

const Gradient = ({ top, left, right, bottom, textSize, children }) => {
  return (
    <div
      style={{
        fontSize: `${textSize}px`,
        top: top,
        left: left,
        right: right,
        bottom: bottom,
      }}
      className="font-light gradient absolute -z-10"
    >
      {children}
    </div>
  );
};

export default Gradient;
