import React from "react";
import { Link } from "react-router-dom";

const ButtonWithBgAndLink = ({ text, bgColor, textColor, link, onClick }) => {
  return (
    <button
      type="button"
      className={`bg-[${bgColor}] text-[#fff] px-6 py-2 rounded-md cursor-pointer text-[11px]`}
      onClick={onClick}
    >
      <Link to={link}>{text}</Link>
    </button>
  );
};

export default ButtonWithBgAndLink;
