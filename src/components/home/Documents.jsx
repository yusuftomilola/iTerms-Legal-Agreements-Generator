import {
  docIconOne,
  docIconTwo,
  docIconThree,
  docIconFour,
  docIconFive,
  rightShortBlackArrow,
  leftShortBlackArrow,
} from "../../assets/icons";
import P from "../P";
import DoubleButtons from "../buttons/DoubleButtons";

const Documents = () => {
  const DocumentsToGenerate = [
    {
      id: 1,
      icon: docIconOne,
      title: "Privacy Policy",
      desc: "Legal document disclosing partial or all ways an entity gathers, uses, discloses, and manages client personal data. ",
      link1: "/documents",
      link2: "",
    },
    {
      id: 2,
      icon: docIconTwo,
      title: "Terms & Conditions",
      desc: "Legal agreements between a service provider and an individual who wishes to use their service.",
      link1: "/documents",
      link2: "",
    },
    {
      id: 3,
      icon: docIconThree,
      title: "Cookie Policy",
      desc: "A declaration to users disclosing what user data is collected while using their platform and what it is used for.",
      link1: "/documents",
      link2: "",
    },
    {
      id: 4,
      icon: docIconFour,
      title: "Eula",
      desc: "A legal contract between developer/vendor and user who has purchased the software.",
      link1: "/documents",
      link2: "",
    },
    {
      id: 5,
      icon: docIconFive,
      title: "Disclaimer",
      desc: "A notice is placed on your website or mobile app to limit your liability for the outcome of using your site or application.",
      link1: "/documents",
      link2: "",
    },
  ];

  const DocumentCard = ({ icon, title, desc, link1, link2 }) => {
    return (
      <div className="bg-white rounded-md px-4 pt-6 pb-4 w-[170px] flex flex-col justify-between gap-2 shadow-lg h-[270px]">
        <img src={icon} alt={title} width={30} />

        <h3 className="font-normal text-[#1D212A]">{title}</h3>

        <p className="text-[10px] text-[#646464] w-[140px]">{desc}</p>

        <DoubleButtons
          isHorizontal={false}
          text={"Generate"}
          bgColor={"#8770ff"}
          link1={link1}
          link2={link2}
        />
      </div>
    );
  };

  return (
    <div className="bg-[#F9FAFC] max-w-[300px] lg:max-w-[500px] w-full mx-auto h-[290px] mb-[70px] shadow-lg rounded-md relative flex items-end justify-end">
      <div className="flex gap-[18px] absolute left-10 -top-10 ">
        {DocumentsToGenerate.map((doc, index) => {
          return (
            <div key={index}>
              <DocumentCard
                icon={doc.icon}
                title={doc.title}
                desc={doc.desc}
                link1={doc.link1}
                link2={doc.link2}
              />
            </div>
          );
        })}
      </div>

      <div className="flex items-center gap-4 pr-[30px] pb-[20px]">
        <img src={leftShortBlackArrow} alt="left arrow icon" width={15} />

        <img src={rightShortBlackArrow} alt="right arrow icon" width={15} />
      </div>
    </div>
  );
};

export default Documents;
