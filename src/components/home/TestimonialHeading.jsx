import P from "../P";
import H2 from "../H2";
import PreHeading from "../PreHeading";
import Gradient from "./Gradient";

const TestimonialHeading = () => {
  return (
    <section className="max-w-[900px] w-full mx-auto mb-[100px] relative lg:pl-0 -mt-[40px] lg:-mt-[0px]">
      <div className="hidden lg:block">
        <Gradient textSize={"160"} top={"-100px"} left={"-0px"}>
          //
        </Gradient>
      </div>

      <div className="lg:hidden">
        <Gradient textSize={"60"} top={"-50px"} left={"15px"}>
          //
        </Gradient>
      </div>

      <div className="flex justify-center lg:gap-[140px]  items-center flex-col lg:flex-row -mt-4 lg:-mt-0">
        <div className="ml-[-160px]">
          <PreHeading>YOUR PROTECTION IS OUR SUCCESS</PreHeading>

          <div className="lg:hidden">
            <H2 textSize={"20"}>
              Our Customers <br /> Are Saying
            </H2>
          </div>

          <div className="hidden lg:block">
            <H2 textSize={"30"}>
              Our Customers <br /> Are Saying
            </H2>
          </div>
        </div>

        <div className="-ml-[50px]">
          <P>
            Ensured Compliance, guaranteed <br />
            customer satisfaction
          </P>
        </div>
      </div>
    </section>
  );
};

export default TestimonialHeading;
