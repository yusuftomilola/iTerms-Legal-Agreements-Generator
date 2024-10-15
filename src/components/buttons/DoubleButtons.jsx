import { shortRightArrowIcon } from "../../assets/icons";
import { Link } from "react-router-dom";

const ButtonWithBgg = ({ text, bgColor, link1, onClick, isHorizontal }) => {
  return (
    <>
      {link1 ? (
        <button
          type="button"
          className={`bg-[${bgColor}] text-[#fff] px-6 py-2 rounded-md cursor-pointer text-[11px] ${
            isHorizontal ? "" : "w-full"
          }`}
          onClick={onClick}
        >
          <Link to={link1}>{text}</Link>
        </button>
      ) : (
        <button
          type="button"
          className={`bg-[${bgColor}] text-[#fff] px-6 py-2 rounded-md cursor-pointer text-[11px] ${
            isHorizontal ? "" : "w-full"
          }`}
          onClick={onClick}
        >
          {text}
        </button>
      )}
    </>
  );
};

const DoubleButtons = ({
  isHorizontal,
  text,
  bgColor,
  link1,
  link2,
  onClick,
}) => {
  return (
    <div
      className={`flex gap-4 items-center mt-2 ${
        isHorizontal ? "flex-row" : "flex-col"
      }`}
    >
      <ButtonWithBgg
        text={text}
        bgColor={bgColor}
        link1={link1}
        isHorizontal={isHorizontal}
        onClick={onClick}
      />

      {link2 ? (
        <Link to={link2}>
          <button
            type="button"
            className="flex gap-1 items-center text-[11px] -mt-2"
          >
            Learn more{" "}
            <img
              src={shortRightArrowIcon}
              alt="short right icon"
              className="mt-[2]"
              width={6}
              height={4}
            />
          </button>
        </Link>
      ) : (
        <button
          type="button"
          className="flex gap-1 items-center text-[11px] -mt-2"
        >
          Learn more{" "}
          <img
            src={shortRightArrowIcon}
            alt="short right icon"
            className="mt-[2]"
            width={6}
            height={4}
          />
        </button>
      )}
    </div>
  );
};

export default DoubleButtons;
