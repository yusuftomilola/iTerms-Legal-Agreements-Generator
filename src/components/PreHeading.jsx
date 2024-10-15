import React from "react";

const PreHeading = ({ children, isWhite }) => {
  return (
    <p
      className={`${
        isWhite
          ? "text-[#E7E9ED] tracking-widest text-[11px]"
          : "text-[#B6BFD9] text-[10px]"
      }`}
    >
      {children}
    </p>
  );
};

export default PreHeading;
