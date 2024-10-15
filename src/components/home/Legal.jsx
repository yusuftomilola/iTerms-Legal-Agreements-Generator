import P from "../P";
import H2 from "../H2";
import PreHeading from "../PreHeading";
import {
  legalBusinessesIcon,
  legalComplaintIcon,
  legalPoliciesCreatedIcon,
} from "../../assets/icons";

const Legal = () => {
  return (
    <section className="legalBackground mt-[-130px] lg:mt-[-100px] mb-[100px]">
      <div className="lg:w-[550px] max-w-[250px] mx-auto mt-[70px] text-center lg:text-left flex flex-col">
        <PreHeading isWhite={true}>TRUSTED PROVISIONS</PreHeading>
        <div className="hidden lg:block">
          <H2 textSize={"30"} isWhite={true}>
            Secure legal Safeguards
          </H2>
        </div>

        <div className="lg:hidden">
          <H2 textSize={"19"} isWhite={true}>
            Secure legal Safeguards
          </H2>
        </div>

        <p className="text-[9px] text-[#E7E9ED] mt-2 ">
          Attorney-certified compliance solutions for your convenience and
          protection
        </p>

        <div className="flex flex-col justify-center items-center gap-7 mt-5 lg:hidden">
          <div className="">
            <img
              src={legalComplaintIcon}
              alt="legal complaint icon"
              width={100}
            />
          </div>

          <div className="">
            <img
              src={legalBusinessesIcon}
              alt="legal complaint icon"
              width={90}
            />
          </div>

          <div className="">
            <img
              src={legalPoliciesCreatedIcon}
              alt="legal complaint icon"
              width={90}
            />
          </div>
        </div>

        <div className="relative hidden lg:block">
          <div className="absolute top-[57px] left-[35%]">
            <img
              src={legalComplaintIcon}
              alt="legal complaint icon"
              width={100}
            />
          </div>

          <div className="absolute top-[97px] left-[13%]">
            <img
              src={legalBusinessesIcon}
              alt="legal complaint icon"
              width={90}
            />
          </div>

          <div className="absolute top-[180px] left-[0px]">
            <img
              src={legalPoliciesCreatedIcon}
              alt="legal complaint icon"
              width={90}
            />
          </div>

          {/* <div className="h-[1px] text-white w-[300px] absolute bottom-[10px]" /> */}
        </div>
      </div>
    </section>
  );
};

export default Legal;
