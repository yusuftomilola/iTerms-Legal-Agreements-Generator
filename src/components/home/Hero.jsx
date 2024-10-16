import React from "react";
import ButtonWithBg from "../buttons/ButtonWithBg";
import {
  shortRightArrowIcon,
  heroLockIcon,
  heroVerificationIcon,
  heroCookiesIcon,
  heroPurpleArrow,
  heroLineGrayIcon,
  heroLineVioletIcon,
  greenCircleIcon,
} from "../../assets/icons";

const Hero = () => {
  return (
    <section className="px-6 w-full max-w-[800px] mx-auto flex justify-between items-start pt-10 flex-col-reverse lg:flex-row">
      <div className="flex flex-col gap-3 w-full pt-0 lg:pt-6 relative -mt-[180px] lg:-mt-[0px]">
        <p className="text-[10px] text-[#B6BFD9] hidden lg:block">
          POWERED BY AI
        </p>

        <p className="text-[13px] text-[#B6BFD9] text-center lg:hidden">
          AI-POWERED
        </p>

        <div className="relative">
          <h1 className="lg:text-[30px] text-[25px] text-center lg:text-left  text-[#1D212A] font-light leading-tight  -mt-1 lg:-mt-0">
            The smartest, <br />
            fastest way to <br /> Legal Agreements
          </h1>

          <div className="absolute top-[35px] left-[33px] w-[260px] min-[500px]:hidden">
            <img src={greenCircleIcon} alt="green icon" />
          </div>
        </div>

        <p className="text-[10px] text-[#646464] hidden lg:block">
          Generate your{" "}
          <span className="font-semibold">Privacy Policy, Terms of Use</span>{" "}
          <br /> or <span className="font-semibold">Cookie Policy</span> for{" "}
          <span className="text-green-500 font-semibold ">free</span>
        </p>

        <div className="flex gap-4 items-center mt-3 lg:mt-2 justify-center lg:justify-normal">
          <div className="hidden lg:block">
            <ButtonWithBg
              text={"Generate for free"}
              bgColor={"#8770ff"}
              link={"/documents"}
            />
          </div>

          <div className="lg:hidden">
            <ButtonWithBg
              text={"Generate"}
              bgColor={"#8770ff"}
              link={"/documents"}
            />
          </div>

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

        <div className="absolute left-[-120px] top-[70%] z-10 hidden  lg:flex">
          <img src={heroLockIcon} alt="lock icon" width={60} />
        </div>

        <div className="absolute left-[-20px] bottom-[-50%] z-10 hidden lg:flex">
          <img src={heroCookiesIcon} alt="cookies icon" width={110} />
        </div>
      </div>

      <div className="w-full relative">
        <div className="herorightdashboardImage" />

        <div className="absolute left-[0px] md:left-[-40px] top-[30%] md:top-[40%] z-10 w-[100px] md:w-[150px] sm:hidden lg:flex">
          <img src={heroVerificationIcon} alt="verification icon" />
        </div>

        <div className="absolute left-[42%] md:left-[42%] top-[25%] md:top-[35%] z-10 w-[30px] md:w-[50px] sm:hidden lg:block">
          <img src={heroPurpleArrow} alt="verification icon" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
