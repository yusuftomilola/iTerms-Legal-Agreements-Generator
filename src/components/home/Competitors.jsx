import P from "../P";
import H2 from "../H2";
import PreHeading from "../PreHeading";
import {
  compAmountIcon,
  compCompatibleIcon,
  compEmbedIcon,
  compGDPRIcon,
  compGetTermsIcon,
  compHostedIcon,
  compPaymentIcon,
  compHTMLIcon,
  compPrivacyTermsIcon,
  compShopifyTermsIcon,
  compTextHighlighterIcon,
  compUnlimitedDownloadsIcon,
  compUpdatedIcon,
  compWebsitePoliciesIcon,
} from "../../assets/icons";

const benefits = [
  {
    id: 1,
    icon: compGDPRIcon,
    title: "GDPR, CCPA, CalOPPA",
  },
  {
    id: 2,
    icon: compEmbedIcon,
    title: "Easy Embed on Your Site",
  },
  {
    id: 3,
    icon: compHostedIcon,
    title: "Securely Hosting Policies",
  },
  {
    id: 4,
    icon: compUpdatedIcon,
    title: "Frequent Updates",
  },
  {
    id: 5,
    icon: compPaymentIcon,
    title: "Industry-leading pricing",
  },
  {
    id: 6,
    icon: compCompatibleIcon,
    title: "US/EU Law Compatible",
  },
  {
    id: 7,
    icon: compHTMLIcon,
    title: "HTML/Word Formats",
  },
  {
    id: 8,
    icon: compUnlimitedDownloadsIcon,
    title: "Unlimited Downloads",
  },
];

const BenefitsCard = ({ imageURL, desc }) => {
  return (
    <div className="flex flex-col justify-center items-center text-center w-[100px] text-wrap">
      <img src={imageURL} alt={desc} width={20} />

      <p className="text-[8px] text-[#646464] w-[70px] mt-1">{desc}</p>
    </div>
  );
};

const Competitors = () => {
  return (
    <section className="max-w-[1000px] mx-auto">
      <div className="w-[400px] md:w-[500px] lg:w-[550px] h-[550px] bg-[rgba(182,191,217,0.1)] rounded-full mb-[300px] lg:mb-[100px] relative flex flex-col gap-10 pt-20">
        {/* top contents of the circle */}
        <div className="flex flex-col items-center text-center">
          <PreHeading>VALIDATE OUR CREDIBILITY</PreHeading>

          <H2 textSize={"22"}>
            Compare Industry <br /> Competitors
          </H2>

          <P>
            iTerms offers industry-leading solutions for businesses for a
            fraction of the price, with no hidden fees.
          </P>
        </div>

        {/* botom contents of the circle with highlighter */}
        <div className="flex flex-col items-center justify-center text-center relative">
          <img
            src={compAmountIcon}
            alt="amount circle icon"
            width={120}
            className="ml-6 mb-4"
          />

          <H2 textSize={"15"}>Unlimited access</H2>

          <p className="text-[10px] text-[#646464] w-[280px]">
            for any documents
          </p>

          <div className="absolute top-[27%] right-[-13%] lg:top-[27%] lg:right-[4%]  z-20 w-[230px]">
            <img src={compTextHighlighterIcon} alt="text highlighter icon" />
          </div>
        </div>

        {/* bottom white container */}
        <div className="w-[250px] md:w-[300px] lg:max-w-[550px] lg:w-full h-[310px] lg:h-[180px] rounded-md bg-white shadow-lg grid grid-cols-2 lg:grid-cols-4 py-6 px-6 gap-6 bottom-[-200px] lg:bottom-[-35px] absolute left-[70px] md:left-[90px] lg:left-[0px]">
          {benefits.map((benefit) => {
            return (
              <BenefitsCard
                key={benefit.id}
                imageURL={benefit.icon}
                desc={benefit.title}
              />
            );
          })}
        </div>

        {/* side circle prices svgs LFET - TO - RIGHT */}
        <div className="absolute top-[5%] left-[-9%] w-[180px]">
          <img src={compPrivacyTermsIcon} alt="privacy terms" />
        </div>

        <div className="absolute top-[38%] left-[-18%] w-[180px]">
          <img src={compWebsitePoliciesIcon} alt="privacy terms" />
        </div>

        <div className="absolute top-[0%] right-[-15%] w-[180px]">
          <img src={compGetTermsIcon} alt="privacy terms" />
        </div>

        <div className="absolute top-[40%] right-[-19%] w-[180px]">
          <img src={compShopifyTermsIcon} alt="privacy terms" />
        </div>
      </div>
    </section>
  );
};

export default Competitors;
