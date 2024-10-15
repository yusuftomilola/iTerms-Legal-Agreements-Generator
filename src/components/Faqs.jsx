import { useState } from "react";
import PreHeading from "../components/PreHeading";
import H2 from "../components/H2";
import H3 from "../components/H3";
import P from "../components/P";

const TableOfContents = () => (
  <div className="w-1/4 pr-8">
    <H3 textSize={13} fontWeight={400}>
      Table of Contents
    </H3>
    <ul className="space-y-1 text-[9px] mt-2">
      <li className="text-[#8770ff]">General</li>
      <li>Trust & Safety</li>
      <li>Payment</li>
      <li>Help</li>
      <li>Contacts</li>
    </ul>
  </div>
);

const FAQItem = ({ question, answer, isOpen, toggle }) => (
  <div className="border-b border-gray-300 py-1">
    <button
      className="flex justify-start items-center w-full text-left gap-2"
      onClick={toggle}
    >
      <span
        className={`text-[#8770ff] text-2xl transition-transform duration-200 ${
          isOpen ? "transform rotate-180" : ""
        }`}
      >
        {isOpen ? "−" : "+"}
      </span>
      <H3 textSize={13} fontWeight={400}>
        {question}
      </H3>
    </button>
    {isOpen && (
      <P widthFull={100} marginTop={0} fontSize={10}>
        {answer}
      </P>
    )}
  </div>
);

export default function Faqs() {
  const [openIndex, setOpenIndex] = useState(2);

  const faqData = [
    {
      question: "What is a Privacy Policy?",
      answer:
        "A Privacy Policy is a legal document that outlines how an organization collects, uses, and protects personal information from its users or customers.",
    },
    {
      question: "What is Personal Information?",
      answer:
        "Personal Information refers to any data that can be used to identify an individual, such as name, email address, phone number, or location data.",
    },
    {
      question: "Why do I need a Privacy Policy?",
      answer: (
        <>
          <P widthFull={100} marginTop={0} fontSize={10}>
            There are two main reasons why you need a Privacy Policy:
          </P>

          <h4 className="font-semibold mt-2">They're legally required</h4>
          <P widthFull={100} marginTop={10} fontSize={10}>
            If you collect or use personal information, you'll have to comply
            with privacy laws put in place around the world to protect consumer
            privacy. These laws will apply regardless of where your business
            itself is located, as they work to protect consumers in specific
            regions. For example, if your business is located in the U.S. but
            you have users in the EU, the EU's GDPR will still apply to you.
          </P>
          <h4 className="font-semibold mt-2">Consumers expect to see them</h4>
          <P widthFull={100} marginTop={10} fontSize={10}>
            In a world where consumer privacy is more important than ever and
            consumers are starting to take their privacy more seriously, not
            having a Privacy Policy can mean you may lose customers. People
            expect to see a Privacy Policy that they can easily access whenever
            they want. Not having one will make you seem untrustworthy.
          </P>
        </>
      ),
    },
    {
      question: "Can I request an email address without a Privacy Policy?",
      answer:
        "It is not recommended to collect any personal information, including email addresses, without a Privacy Policy. Doing so may violate privacy laws and erode user trust.",
    },
    {
      question: "How should I write my Privacy Policy?",
      answer:
        "Your Privacy Policy should be clear, concise, and easy to understand. It should cover what information you collect, how you use it, how you protect it, and how users can control their data. Consider consulting with a legal professional to ensure compliance with relevant laws.",
    },
  ];

  return (
    <section className=" max-w-[700px] mx-auto w-full flex flex-col gap-6 mb-[150px]">
      <div className="lg:flex flex-col text-center items-center justify-center gap-2 hidden">
        <PreHeading>SOLUTIONS TO YOUR PROBLEMS</PreHeading>

        <H2 textSize={26}>Do You Have any Questions?</H2>

        <P width={400} marginTop={0} fontSize={9}>
          Take a look through our answers! Still, have questions? <br /> Please
          don't be afraid to contact our team at any time.
        </P>
      </div>

      <div className="flex flex-col items-start justify-center gap-2 lg:hidden pl-6">
        <PreHeading>SOLUTIONS TO YOUR PROBLEMS</PreHeading>

        <H2 textSize={18}>Questions? Look here</H2>

        <P width={0} marginTop={0} fontSize={9}>
          More than 140,000 businesses use <br />
          iTerms. Join our community of <br />
          amazing companies
        </P>
      </div>

      <div className="flex pl-6 lg:pl-0 pr-6 lg:pr-0">
        <div className="hidden lg:block">
          <TableOfContents />
        </div>
        <div className="lg:w-3/4 w-full -mt-2">
          {faqData.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={index === openIndex}
              toggle={() => setOpenIndex(index === openIndex ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
