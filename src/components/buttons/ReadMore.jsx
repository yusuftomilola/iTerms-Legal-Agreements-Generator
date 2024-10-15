import { Link } from "react-router-dom";
import { shortRightArrowIcon } from "../../assets/icons";

const ReadMore = (props) => {
  const { link } = props;
  return (
    <Link to={link}>
      <button
        type="button"
        className="flex gap-1 items-center text-[11px] mt-1"
      >
        Read more{" "}
        <img
          src={shortRightArrowIcon}
          alt="short right icon"
          className="mt-[2]"
          width={6}
          height={4}
        />
      </button>
    </Link>
  );
};

export default ReadMore;
