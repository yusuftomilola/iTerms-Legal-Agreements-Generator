import PreHeading from "../PreHeading";
import H2 from "../H2";
import P from "../P";
import H3 from "../H3";
import ReadMore from "../buttons/ReadMore";
import BlogData from "../../BlogData";
import ButtonWithBg from "../buttons/ButtonWithBg";
import { useState } from "react";

const BlogCard = ({ title, desc, link }) => {
  return (
    <div className="lg:w-[150px] w-full flex flex-col gap-2">
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

const Blog = () => {
  const BlogDataCopy = [...BlogData];

  const [blogNumberToDisplay, setBlogNumberToDisplay] = useState(4);

  const handleShowMoreBlogCards = (e) => {
    e.preventDefault();
    setBlogNumberToDisplay((prev) => prev + 4);
  };

  return (
    <section className=" max-w-[1000px] mx-auto w-full flex flex-col gap-6 mb-[50px] lg:mb-[100px]">
      <div className="flex flex-col text-center items-start lg:items-center pl-6 lg:pl-0 justify-center gap-2 ">
        <PreHeading>KEEP UP WITH THE LATEST</PreHeading>

        <div className="hidden lg:block">
          <H2 textSize={26}>Discover What's New</H2>
        </div>

        <div className="lg:hidden">
          <H2 textSize={17}>What's New?</H2>
        </div>

        <P width={0} marginTop={0} fontSize={9}>
          Learn from the experts at iTerms to ensure you stay on top of <br />{" "}
          industry legalities and changing legal landscapes at all times
        </P>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-[650px] mx-auto">
        {BlogDataCopy.splice(0, blogNumberToDisplay).map((item) => {
          return (
            <BlogCard
              key={item.id}
              title={item.title}
              desc={item.desc}
              link={`/blog/${item.id}`}
            />
          );
        })}
      </div>

      <div className="flex justify-center">
        <ButtonWithBg
          text={"Read More"}
          bgColor={"#8770ff"}
          onClick={handleShowMoreBlogCards}
        />
      </div>
    </section>
  );
};

export default Blog;
