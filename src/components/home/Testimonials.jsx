import {
  testimonialIconOne,
  testimonialIconTwo,
  testimonialIconThree,
  TrustPilotReviewsIcon,
  fiveStarsIcon,
  rightShortBlackArrow,
  leftShortBlackArrow,
} from "../../assets/icons";
import P from "../P";
import H2 from "../H2";
import DoubleButtons from "../buttons/DoubleButtons";

const Testimonials = () => {
  const TestimonialsToGenerate = [
    {
      id: 1,
      icon: testimonialIconOne,
      title: "Albert C.",
      action: "Generated a Privacy Policy",
      desc: "“I had two policies made, and for whatever reason there was an issue after processing the order. I sent an email to support, and to my surprise, there was a reply within ten minutes from Customer Support. TermsFeed further assisted me and stayed around to ensure my second order went smoothly.”",
    },
    {
      id: 2,
      icon: testimonialIconTwo,
      title: "Rose V.",
      action: "Generated an EULA agreement",
      desc: "“My company develops software and web applications. I shared my experience with ITerms my coworkers as a great example of a guided system and product. I liked how the prices were included for each feature and at the end I saw the total cost and then received the EULA document in multiple formats.”",
    },
    {
      id: 3,
      icon: testimonialIconThree,
      title: "Bryan T.",
      action: "Generated a Privacy Policy",
      desc: "“I had been trying to write a Privacy Policy and Terms and Conditions for my website for quite a while.I finally decided that I didn't have the skill or legal knowledge to adequately prepare these documents so I went into Google and found TermsFeed.”",
    },
  ];

  const TestimonialCard = ({ icon, title, desc, action }) => {
    return (
      <div className=" px-4 pt-6 pb-4 flex flex-col justify-start gap-2 h-[270px] mr-[-18px]">
        <div className="flex items-center gap-[6px]">
          <img src={icon} alt={title} width={35} />
          <div className="flex flex-col">
            <H2 textSize={"12"} fontWeight={500}>
              {title}
            </H2>
            <p className="text-[9px] text-[#646464] w-[140px] italic">
              {action}
            </p>
          </div>
        </div>

        <div className="bg-white rounded-md px-10 py-4 w-[320px] flex flex-col justify-start gap-1 shadow-lg h-[140px]">
          <p className="text-[9px] text-[#646464] w-[240px] italic">{desc}</p>

          <img src={fiveStarsIcon} alt={title} width={50} />
        </div>
      </div>
    );
  };

  return (
    <div className="bg-[#F9FAFC] max-w-[500px] w-full mx-auto h-[170px] mb-[80px] lg:mb-[150px] shadow-lg rounded-md relative flex items-end justify-end">
      <div className="flex absolute left-5 -top-[95px] ">
        {TestimonialsToGenerate.map((testimonial) => {
          return (
            <div key={testimonial.id}>
              <TestimonialCard
                icon={testimonial.icon}
                title={testimonial.title}
                desc={testimonial.desc}
                action={testimonial.action}
              />
            </div>
          );
        })}
      </div>

      <div className="flex items-center gap-4 pr-[30px] pb-[20px]">
        <img src={leftShortBlackArrow} alt="left arrow icon" width={15} />

        <img src={rightShortBlackArrow} alt="right arrow icon" width={15} />
      </div>

      <div className="absolute bottom-[-22%] left-[20%] w-[180px] lg:w-[220px]">
        <img
          src={TrustPilotReviewsIcon}
          alt="trust pilot reviews icon"
          className="w-full"
        />
      </div>
    </div>
  );
};

export default Testimonials;
