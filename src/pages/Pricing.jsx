import { useState } from "react";
import { Field, Label, Switch } from "@headlessui/react";
import Nav from "../components/Nav";
import PreHeading from "../components/PreHeading";
import H2 from "../components/H2";
import P from "../components/P";
import { Fragment } from "react";
import { CheckIcon, MinusIcon } from "@heroicons/react/20/solid";
import {
  creditCardIcon,
  checkGreenIcon,
  checkPurpleIcon,
} from "../assets/icons";

const tiers = [
  {
    name: "For Startups",
    id: "tier-starter",
    href: "#",
    priceMonthly: "1",
    mostPopular: true,
    type: "Pro+",
    color: "#3EDE91",
    subScriptBefore: "$",
    subScriptAfter: "95",
    month: "/month",
    cta: "Choose Plan",
  },
  {
    name: "For Businesses",
    id: "tier-growth",
    href: "#",
    priceMonthly: "0",
    mostPopular: false,
    type: "Basic",
    color: "#8770FF",
    subScriptBefore: "$",
    subScriptAfter: "",
    month: "/one-time",
    cta: "Continue Free",
  },
];

const sections = [
  {
    name: "Content of Legal Policies",
    features: [
      {
        name: "GDPR, CCPA, CalOPPA",
        tiers: { Starter: true, Growth: true },
      },
      {
        name: "Any Remarketing Tools",
        tiers: { Starter: "1", Growth: "3" },
      },
      {
        name: "Any Ads Tools",
        tiers: { Starter: "3", Growth: "20" },
      },
      {
        name: "Any Analytics Tools",
        tiers: { Starter: false, Growth: false },
      },
      {
        name: "Any Payment Processors",
        tiers: { Starter: false, Growth: false },
      },
    ],
  },
  {
    name: "Integrate to Website",
    features: [
      {
        name: "Hosted Policies",
        tiers: { Starter: true, Growth: true },
      },
      {
        name: "Embed On Your Site",
        tiers: { Starter: false, Growth: true },
      },
      {
        name: "Regular Doc Updates",
        tiers: { Starter: false, Growth: false },
      },
    ],
  },
  {
    name: "Customize & Download",
    features: [
      {
        name: "TXT Format",
        tiers: { Starter: true, Growth: true },
      },
      {
        name: "HTML File (.html)",
        tiers: { Starter: false, Growth: true },
      },
      {
        name: "DOCX File (.doc)",
        tiers: { Starter: false, Growth: false },
      },
      {
        name: "Unlimited Downloads",
        tiers: { Starter: false, Growth: false },
      },
      {
        name: "Custom Logo on Document",
        tiers: { Starter: false, Growth: false },
      },
      {
        name: "Custom Font on Document",
        tiers: { Starter: false, Growth: false },
      },
    ],
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Pricing = () => {
  const [enabled, setEnabled] = useState(false);
  return (
    <>
      <main className="max-w-[800px] w-full mx-auto mb-[170px]">
        {/* MOBILE */}
        <div className="flex flex-col gap-2 text-center justify-center items-center mb-[30px] mt-[60px] lg:hidden max-w-[300px] mx-auto">
          <PreHeading>FLEXIBLE PRICING</PreHeading>
          <H2 textSize={28}>Simple, transparent Pricing</H2>
          <P width={330} marginTop={0} fontSize={14} fontWeight={400}>
            No contracts. No surprise fees.
          </P>

          <div className="mt-3" />

          <Field className="flex items-center justify-center">
            <Label as="span" className="ml-3 text-sm">
              <P width={70} fontWeight={600} marginTop={0}>
                First month
              </P>
            </Label>

            <Switch
              checked={enabled}
              onChange={setEnabled}
              className="group relative inline-flex h-4.5 w-8 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-[#8770ff] transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-offset-2 data-[checked]:bg-gray-200 ml-2"
            >
              <span
                aria-hidden="true"
                className="pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out group-data-[checked]:translate-x-3"
              />
            </Switch>

            <Label as="span" className="ml-3 text-sm">
              <P width={100} marginTop={0}>
                Following months
              </P>
            </Label>
          </Field>
        </div>

        {/* DESKTOP */}
        <div className="lg:flex flex-col gap-2 text-center justify-center items-center mb-[30px] mt-[60px] hidden">
          <PreHeading>FLEXIBLE PRICING</PreHeading>
          <H2 textSize={38}>Simple, transparent Pricing</H2>
          <P width={330} marginTop={0} fontSize={14} fontWeight={400}>
            No contracts. No surprise fees.
          </P>

          <div className="mt-3" />

          <Field className="flex items-center justify-center">
            <Label as="span" className="ml-3 text-sm">
              <P width={70} fontWeight={600} marginTop={0}>
                First month
              </P>
            </Label>

            <Switch
              checked={enabled}
              onChange={setEnabled}
              className="group relative inline-flex h-4.5 w-8 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-[#8770ff] transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-offset-2 data-[checked]:bg-gray-200 ml-2"
            >
              <span
                aria-hidden="true"
                className="pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out group-data-[checked]:translate-x-3"
              />
            </Switch>

            <Label as="span" className="ml-3 text-sm">
              <P width={100} marginTop={0}>
                Following months
              </P>
            </Label>
          </Field>
        </div>

        <div className="bg-transparent lg:bg-white pb-24 sm:pb-32">
          <div className="mx-auto w-full px-6 lg:px-8">
            {/* xs to lg */}
            <div className="mx-auto mt-12 max-w-md space-y-8 sm:mt-16 lg:hidden bg-white shadow-lg rounded-lg">
              {tiers.map((tier) => (
                <section
                  key={tier.id}
                  className={classNames(
                    tier.mostPopular
                      ? "rounded-xl bg-gray-400/5 ring-1 ring-inset ring-gray-200"
                      : "",
                    "p-8"
                  )}
                >
                  <h3 id={tier.id}>
                    <div className="text-[10px] font-semibold leading-7 text-[#565A65] bg-[rgba(182,191,217,0.12)] rounded-md w-[85px] text-center h-[20px] flex items-center justify-center">
                      {tier.name}
                    </div>
                  </h3>

                  <p
                    className={`${
                      tier.type === "Pro+" ? "text-[#3EDE91]" : "text-[#8770FF]"
                    } text-[22px] font-light`}
                  >
                    {tier.type}
                  </p>

                  <div className="flex items-baseline gap-x-1 text-gray-900 mt-4">
                    <span className="text-2xl font-light relative">
                      <span className="scriptBefore">
                        {tier.subScriptBefore}
                      </span>
                      <span className="pl-2.5">{tier.priceMonthly}</span>
                      <span className="scriptAfter">{tier.subScriptAfter}</span>
                    </span>
                    <span className="text-[10px] font-semibold leading-6 text-gray-400">
                      {tier.month}
                    </span>
                  </div>

                  <a
                    href={tier.href}
                    className={classNames(
                      tier.mostPopular
                        ? "bg-[#8770FF] text-[#f0f0f0] hover:bg-indigo-500"
                        : "text-[#8770FF] ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300",
                      "mt-2 block rounded-md px-2 py-[3px] text-center text-[10px] leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8770FF] w-[100px]"
                    )}
                  >
                    {tier.cta}
                  </a>

                  <ul
                    role="list"
                    className="mt-10 space-y-4 text-sm leading-6 text-gray-900 "
                  >
                    {sections.map((section) => (
                      <li key={section.name} className="">
                        <ul role="list" className="space-y-4">
                          {section.features.map((feature) =>
                            feature.tiers[tier.name] ? (
                              <li key={feature.name} className="flex gap-x-3">
                                <CheckIcon
                                  aria-hidden="true"
                                  className="h-6 w-5 flex-none text-indigo-600"
                                />
                                <span>
                                  {feature.name}{" "}
                                  {typeof feature.tiers[tier.name] ===
                                  "string" ? (
                                    <span className="text-sm leading-6 text-gray-500">
                                      ({feature.tiers[tier.name]})
                                    </span>
                                  ) : null}
                                </span>
                              </li>
                            ) : null
                          )}
                        </ul>
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>

            {/* lg+ */}
            <div className="isolate mt-20 hidden lg:block">
              <div className="relative -mx-8">
                {tiers.some((tier) => tier.mostPopular) ? (
                  <div className="absolute inset-x-4 inset-y-0 -z-10 flex">
                    <div
                      style={{
                        marginLeft: `${
                          (tiers.findIndex((tier) => tier.mostPopular) + 1) *
                          33.33
                        }%`,
                      }}
                      aria-hidden="true"
                      className="flex w-1/3 px-4 relative shadow-2xl"
                    >
                      <div className="w-full rounded-t-xl" />
                      <div className="absolute w-full top-[-3.3%] left-0 bg-[rgba(50,217,136,0.1)] text-[#32D989] text-[11px] text-center rounded-t-md py-2.5 font-medium shadow-2xl">
                        MOST POPULAR
                      </div>
                    </div>
                  </div>
                ) : null}
                <table className="w-full table-fixed border-separate border-spacing-x-8 text-left">
                  <caption className="sr-only">Pricing plan comparison</caption>
                  <colgroup>
                    <col className="w-1/3" />
                    <col className="w-1/3" />
                    <col className="w-1/3" />
                  </colgroup>
                  <thead>
                    <tr className="relative">
                      <td>
                        <img
                          src={creditCardIcon}
                          alt="credit card icon"
                          className="absolute left-[-15%] top-[-120%] w-[250px]"
                        />
                      </td>
                      {tiers.map((tier) => (
                        <th
                          key={tier.id}
                          scope="col"
                          className="pr-6 pt-6 xl:px-8 xl:pt-8 pl-4"
                        >
                          <div className="text-[7px] font-semibold leading-7 text-[#565A65] bg-[rgba(182,191,217,0.12)] rounded-sm w-[60px] text-center h-[15px] flex items-center justify-center">
                            {tier.name}
                          </div>
                          <p
                            className={classNames(
                              tier.type === "Pro+"
                                ? "text-[#3EDE91]"
                                : "text-[#8770FF]",
                              "text-[22px] font-light"
                            )}
                          >
                            {tier.type}
                          </p>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">
                        <span className="sr-only">Price</span>
                      </th>
                      {tiers.map((tier) => (
                        <td key={tier.id} className="pr-6 pt-2 xl:px-8">
                          <div className="flex items-baseline gap-x-1 text-gray-900 pl-4">
                            <span className="text-2xl font-light relative">
                              <span className="scriptBefore">
                                {tier.subScriptBefore}
                              </span>
                              <span className="pl-2.5">
                                {tier.priceMonthly}
                              </span>
                              <span className="scriptAfter">
                                {tier.subScriptAfter}
                              </span>
                            </span>
                            <span className="text-[10px] font-semibold leading-6 text-gray-400">
                              {tier.month}
                            </span>
                          </div>
                          <a
                            href="#"
                            className={classNames(
                              tier.mostPopular
                                ? "bg-[#8770FF] text-[#f0f0f0] hover:bg-indigo-500"
                                : "text-[#8770FF] ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300",
                              "mt-2 block rounded-md px-2 py-[3px] text-center text-[10px] leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8770FF] ml-4 w-[100px]"
                            )}
                          >
                            {tier.cta}
                          </a>
                        </td>
                      ))}
                    </tr>

                    {sections.map((section, sectionIdx) => (
                      <Fragment key={section.name}>
                        <tr>
                          <th
                            scope="colgroup"
                            colSpan={4}
                            className={classNames(
                              sectionIdx === 0 ? "pt-4" : "pt-8",
                              "pb-4 text-sm leading-6 text-gray-700"
                            )}
                          >
                            {section.name}
                          </th>
                        </tr>
                        {section.features.map((feature) => (
                          <tr key={feature.name}>
                            <th
                              scope="row"
                              className="py-2 text-sm font-normal leading-6 text-gray-900 text-[8px]"
                            >
                              {feature.name}
                              <div className="absolute inset-x-8 mt-4 h-px bg-gray-900/5" />
                            </th>
                            {tiers.map((tier) => (
                              <td key={tier.id} className="px-6 py-4 xl:px-8">
                                {typeof feature.tiers[tier.name] ===
                                "string" ? (
                                  <div className="text-center text-sm leading-6 text-gray-500">
                                    {feature.tiers[tier.name]}
                                  </div>
                                ) : (
                                  <>
                                    {feature.tiers[tier.name] === true ? (
                                      <div className="flex items-center justify-center">
                                        <img
                                          src={checkGreenIcon}
                                          alt="Included"
                                          width={20}
                                        />
                                      </div>
                                    ) : (
                                      <CheckIcon
                                        aria-hidden="true"
                                        className="mx-auto h-5 w-5 text-indigo-600"
                                      />
                                    )}
                                    <span className="sr-only">
                                      {feature.tiers[tier.name] === true
                                        ? "Included"
                                        : "Not included"}{" "}
                                      in {tier.name}
                                    </span>
                                  </>
                                )}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </Fragment>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Pricing;
