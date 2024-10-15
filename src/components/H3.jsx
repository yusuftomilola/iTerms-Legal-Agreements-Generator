import React from "react";

const H3 = ({ children, textSize, isWhite, fontWeight }) => {
  return (
    <h3
      style={{
        fontSize: `${textSize}px`,
        fontWeight: fontWeight,
      }}
      className={`font-light leading-tight ${
        isWhite ? "text-[#f0f0f0] mt-2" : "text-[#1D212A]"
      }`}
    >
      {children}
    </h3>
  );
};

export default H3;
