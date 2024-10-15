import React from "react";

const Li = ({
  children,
  width,
  widthFull,
  marginTop,
  fontSize,
  textColor,
  link,
  pl,
  isActive,
  handleClick,
}) => {
  return (
    <li
      style={{
        width: `${width ? `${width}px` : widthFull ? `${widthFull}%` : ""}`,
        marginTop: `${marginTop}px`,
        fontSize: `${fontSize}px`,
        color: isActive ? "#8770ff" : textColor,
        paddingLeft: `${pl}px`,
      }}
      className={`${!fontSize && "text-[10px]"} ${
        !textColor && "text-[#e0e0e0]"
      }`}
    >
      {link ? (
        <a href={link} onClick={(e) => handleClick(e, link)}>
          {children}
        </a>
      ) : (
        children
      )}
    </li>
  );
};

export default Li;
