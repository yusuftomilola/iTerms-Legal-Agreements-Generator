import React from "react";

const H2 = ({ children, textSize, isWhite, fontWeight, id }) => {
  return (
    <h2
      style={{
        fontSize: `${textSize}px`,
        fontWeight: fontWeight,
      }}
      className={`font-light leading-tight ${
        isWhite ? "text-[#f0f0f0] mt-2" : "text-[#1D212A]"
      }`}
      id={id}
    >
      {children}
    </h2>
  );
};

export default H2;
