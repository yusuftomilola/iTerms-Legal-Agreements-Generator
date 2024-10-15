import React from "react";

const P = ({
  children,
  width,
  widthFull,
  marginTop,
  fontSize,
  textColor,
  fontWeight,
}) => {
  return (
    <p
      style={{
        width: `${width ? `${width}px` : widthFull ? `${widthFull}%` : ""}`,
        marginTop: `${marginTop}px`,
        fontSize: `${fontSize}px`,
        color: `${textColor}`,
        fontWeight: fontWeight,
      }}
      className={`
         ${!textColor && "text-[#646464]"}
        ${!width && "w-[280px]"} 
      ${!marginTop && "mt-2"}
       ${!fontSize && "text-[10px]"}
      `}
    >
      {children}
    </p>
  );
};

export default P;
