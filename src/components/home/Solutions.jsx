import P from "../P";
import H2 from "../H2";
import PreHeading from "../PreHeading";
import Gradient from "./Gradient";

const Solutions = () => {
  return (
    <section className="max-w-[900px] w-full mx-auto mb-[80px] relative pl-6 lg:pl-0 -mt-[80px] lg:-mt-[0px]">
      <div className="hidden lg:block">
        <Gradient textSize={"160"} top={"-100px"} left={"-0px"}>
          Solutions
        </Gradient>
      </div>

      <div className="lg:hidden">
        <Gradient textSize={"70"} top={"-50px"} left={"-0px"}>
          Solutions
        </Gradient>
      </div>

      <div className="flex justify-center lg:gap-[140px]  items-center flex-col lg:flex-row">
        <div className="ml-[-160px]">
          <PreHeading>INTUITIVELY MADE FOR YOUR BUSINESS</PreHeading>

          <H2 textSize={"30"}>
            Explore iTerms <br /> Solutions
          </H2>
        </div>

        <div className="-ml-[80px]">
          <P>
            Regardless of your requirements, iTerms <br />
            has a solution ready for you to utilize.
          </P>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
