import {
  streamlineYourAIImage,
  checkmarkIcon,
  shortRightArrowIcon,
} from "../../assets/icons";
import ButtonWithBg from "../buttons/ButtonWithBg";
import P from "../P";
import H2 from "../H2";
import PreHeading from "../PreHeading";
import Gradient from "./Gradient";

const Discover = () => {
  const data = [
    {
      id: 1,
      desc: "All legal agreements confirmed by a practicing lawyer",
    },
    {
      id: 2,
      desc: "EU/US and main privacy laws covered",
    },
    {
      id: 3,
      desc: "Automatic legal updates powered by AI",
    },
    {
      id: 4,
      desc: "Industry-leading competitive pricing",
    },
    {
      id: 5,
      desc: "Securely host your policies on our platform",
    },
    {
      id: 6,
      desc: "Easy embed policy on your domain",
    },
    {
      id: 7,
      desc: "Suitable for most Web/Mobile apps",
    },
  ];

  return (
    <section className="pr-6 w-full max-w-[1100px] flex lg:justify-between lg:items-start pt-10 mb-[100px] flex-col sm:flex-row items-center mt-8 lg:mt-0">
      <div className="w-full lg:w-[50%]">
        <img
          src={streamlineYourAIImage}
          alt="streamline your ai image"
          width={800}
          height="auto"
        />
      </div>

      <div className="relative flex flex-col gap-3 w-full lg:w-[50%] pl-6 ">
        {/* desktop */}
        <div className="hidden lg:block">
          <Gradient textSize={"130"} top={"-80px"} left={"-60px"}>
            AI
          </Gradient>
        </div>

        {/* mobile */}
        <div className="lg:hidden">
          <Gradient textSize={"100"} top={"-60px"} left={"20px"}>
            AI
          </Gradient>
        </div>

        <PreHeading>DISCOVER POSSIBILITIES</PreHeading>

        <div>
          <div className="hidden lg:block">
            <H2 textSize={"30"}>
              Streamline Your <br />
              Purpose with AI
            </H2>
          </div>

          <div className="lg:hidden">
            <H2 textSize={"20"}>
              Streamline Your <br />
              Purpose with AI
            </H2>
          </div>

          <P>
            Streamline cost-effective solutions for your business. Generate
            legally compliant documents seamlessly with customizable agreements
            and policies for your website or mobile app anytime, anywhere with
            iTerms.
          </P>
        </div>

        <ol className="flex flex-col items-start gap-2 mt-2 ml-7">
          <li className="flex items-center gap-1 justify-center text-[#646464] text-[10px]">
            <img src={checkmarkIcon} alt="checkbox" width={15} />
            Unlimited downloads for <span className="font-semibold">
              9.95
            </span>{" "}
            a one-time fee
          </li>

          {data.map((item) => {
            return (
              <li
                className="flex items-center gap-1 justify-center text-[#646464] text-[10px]"
                key={item.id}
              >
                <img src={checkmarkIcon} alt="checkbox" width={15} />
                {item.desc}
              </li>
            );
          })}
        </ol>

        <div className="flex gap-4 items-center mt-2">
          <ButtonWithBg
            text={"Generate"}
            bgColor={"#8770ff"}
            link={"/sign-up"}
          />

          <button type="button" className="flex gap-1 items-center text-[11px]">
            Learn more{" "}
            <img
              src={shortRightArrowIcon}
              alt="short right icon"
              className="mt-[2]"
              width={6}
              height={4}
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Discover;
