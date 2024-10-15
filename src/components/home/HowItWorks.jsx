import P from "../P";
import H2 from "../H2";
import PreHeading from "../PreHeading";
import ProgressBar from "./ProgressBar";
import { videoIcon } from "../../assets/icons";
import React from "react";

const steps = [
  { number: 1, text: "Choose your policy" },
  { number: 2, text: "Chat with AI Assistant" },
  { number: 3, text: "Get your document" },
];

const HowItWorks = () => {
  return (
    <section className="w-full max-w-[900px] flex flex-col pt-2 mb-[100px] mt-[-50px]">
      <div className="flex items-end justify-end flex-col">
        <div className=" -mb-16 pr-12 flex flex-col items-center lg:items-start text-center lg:text-left max-w-[330px] lg:max-w-[0px]">
          <PreHeading>EASY & COST-EFFECTIVE</PreHeading>

          <H2 textSize={"30"}>How it works?</H2>

          <P>
            Numerous legal agreements accessible at the touch of your
            fingerprints for your website or mobile app.
          </P>
        </div>
      </div>

      <div className="flex items-center mt-[100px] flex-col-reverse lg:flex-row">
        <div className="flex items-center">
          <div className="hidden lg:block h-[1px] w-[500px] bg-[#8770ff] -mr-10" />

          <div className="w-full lg:w-[300px] mt-[80px] lg:mt-[0px]">
            <img
              src={videoIcon}
              alt="video thumbnail icon"
              className="-mr-16"
            />
          </div>

          <div className="hidden lg:block h-[1px] w-full bg-[#8770ff]" />
        </div>

        <div className="hidden lg:block">
          <ProgressBar />
        </div>

        <div className="flex flex-row justify-center items-center overflow-x-auto lg:hidden mb-[-60px]">
          {steps.map((step, index) => (
            <React.Fragment key={step.number}>
              <div className="flex flex-col items-center">
                <div className="relative">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-[1px] border-[#8770ff] flex items-center justify-center mb-2 bg-[#f1f3f6]">
                    <span className="text-[#8770ff] text-[15px] sm:text-2xl">
                      {step.number}
                    </span>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="absolute top-1/2 left-full w-8 sm:w-16 h-[1px] bg-[#8770ff] -translate-y-1/2"></div>
                  )}
                </div>
                <p className="text-center text-[9px] sm:text-[10px] font-medium max-w-[80px] sm:max-w-[120px]">
                  {step.text}
                </p>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
