import React from "react";

import P from "../P";
import H3 from "../H3";
import ReadMore from "../buttons/ReadMore";

const BlogCard = ({ title, desc, link }) => {
  return (
    <div className=" w-full flex flex-col gap-2">
      <div className="bg-[#8770ff] w-full h-[100px] rounded-t-md" />
      <H3 textSize={12} fontWeight={400}>
        {title}
      </H3>
      <P width={140} marginTop={0} fontSize={8}>
        {desc}
      </P>

      <ReadMore link={link} />
    </div>
  );
};

export default BlogCard;
