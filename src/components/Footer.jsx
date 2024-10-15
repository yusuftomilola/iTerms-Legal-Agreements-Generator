import H2 from "./H2";
import PreHeading from "./PreHeading";
import P from "./P";
import DoubleButtons from "./buttons/DoubleButtons";
import H3 from "./H3";
import Li from "./Li";

const Footer = () => {
  return (
    <footer className="bg-[#8770ff] max-w-[1200px] m-auto h-[500px] relative flex items-end ">
      <div
        className="bg-white rounded-md shadow-xl lg:max-w-[700px] lg:w-full h-[260px] absolute 
        -top-[50px] left-[6%] lg:left-[20%] z-20 lg:flex flex-col items-center gap-2 justify-center text-center hidden"
      >
        <PreHeading>GET STARTED WITHIN MINUTES</PreHeading>

        <H2 textSize={27} fontWeight={300}>
          Are You Ready to <br /> Protect Your Business?
        </H2>

        <P width={300} marginTop={0}>
          Sign up for our account packages and start generating legal agreements
          suited to your business needs.
        </P>

        <div />

        <DoubleButtons
          bgColor={"#8770ff"}
          text={"Get started for free"}
          isHorizontal={true}
        />
      </div>

      <div
        className="bg-white rounded-md shadow-xl w-[320px] h-[220px] absolute 
        -top-[110px] left-[6%] lg:left-[20%] z-20 flex flex-col items-center gap-2 justify-center text-center lg:hidden"
      >
        <PreHeading>GET STARTED WITHIN MINUTES</PreHeading>

        <H2 textSize={17} fontWeight={300}>
          Ready to protect your <br /> business?
        </H2>

        <P width={200} marginTop={0}>
          More than 140,000 businesses <br />
          use iTerms. Join our community <br />
          of amazing companies!
        </P>

        <div />

        <DoubleButtons
          bgColor={"#8770ff"}
          text={"Sign me up!"}
          isHorizontal={true}
        />
      </div>

      <div className="text-[#e0e0e0] max-w-[720px] w-full   mx-auto flex flex-col gap-4 pt-[200px]">
        {/* top */}
        <div className="justify-between mb-8 grid grid-cols-2 lg:grid-cols-4 px-6 gap-4">
          <div className="hidden lg:block">
            <H3 textSize={20} isWhite={true}>
              iTerms
            </H3>
            <P width={"160"} textColor={"#e0e0e0"}>
              More than 140,000 businesses use iTerms. Join our community
            </P>
          </div>

          <div className="flex flex-col gap-3 lg:hidden">
            <H3 textSize={18} isWhite={true}>
              iTerms
            </H3>
            <ul className="flex flex-col gap-[6px]">
              <Li>Terms & Conditions</Li>
              <Li>Privacy Policy</Li>
              <Li>Disclaimer</Li>
              <Li>English Version</Li>
            </ul>
          </div>

          <div className="flex flex-col gap-3">
            <H3 textSize={18} isWhite={true}>
              Company
            </H3>
            <ul className="flex flex-col gap-[6px]">
              <Li>How it Works</Li>
              <Li>Reviews</Li>
              <Li>Contact us</Li>
              <Li>Blog</Li>
            </ul>
          </div>

          <div className="flex flex-col gap-3">
            <H3 textSize={18} isWhite={true}>
              Products
            </H3>
            <ul className="flex flex-col gap-[6px]">
              <Li>Solutions</Li>
              <Li>Trust & Safety</Li>
              <Li>Payment</Li>
              <Li>Help</Li>
            </ul>
          </div>

          <div className="flex flex-col gap-3">
            <H3 textSize={18} isWhite={true}>
              Support
            </H3>
            <ul className="flex flex-col gap-[6px]">
              <Li>Help</Li>
              <Li>Pricing</Li>
              <Li>Payment</Li>
              <Li>Help</Li>
            </ul>
          </div>
        </div>

        <hr />

        {/* bottom */}
        <div className="flex justify-between text-[13px] mb-4 pl-6 lg:pl-0">
          <div>
            <P textColor={"#e0e0e0"} width={0}>
              &copy; 2021 Terms inc. All rights reserved
            </P>
          </div>

          <div className="pr-12 hidden lg:flex">
            <P textColor={"#e0e0e0"} width={120}>
              Terms & Conditions
            </P>
            <P textColor={"#e0e0e0"} width={90}>
              Privacy Policy
            </P>
            <P textColor={"#e0e0e0"} width={90}>
              Disclaimer
            </P>
            <P textColor={"#e0e0e0"} width={90}>
              English Version
            </P>
          </div>
        </div>
      </div>

      <div className="footerIcon h-full w-full absolute top-0 z-10" />
    </footer>
  );
};

export default Footer;
