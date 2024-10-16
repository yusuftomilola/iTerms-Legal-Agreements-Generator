import React, { useState } from "react";
import { shortDownArrowIcon, shortRightArrowIcon } from "../assets/icons";
import ButtonWithBg from "../components/buttons/ButtonWithBg";
import { Switch } from "@headlessui/react";

const SubscriptionTable = () => {
  const [enabled, setEnabled] = useState(false);
  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="mb-2">
        <tr className="mb-2">
          <th className="px-4 py-3 text-left text-[11px] font-light text-gray-500 tracking-wider">
            Plan name
          </th>
          <th className="px-6 py-3 text-left text-[11px] font-light text-gray-500 tracking-wider">
            Active Plan
          </th>
          <th className="px-6 py-3 text-left text-[11px] font-light text-gray-500 tracking-wider">
            Paid before
          </th>
          <th className="px-6 py-3 text-left text-[11px] font-light text-gray-500 tracking-wider">
            Price
          </th>
        </tr>
      </thead>
      <tbody className=" divide-y divide-gray-200">
        <tr className="bg-gray-100 rounded-lg">
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
            Pro+
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
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
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            03-26-2021
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            $7.60 /month
          </td>
        </tr>
      </tbody>
    </table>
  );
};

const billingHistory = [
  {
    id: 1,
    isPositive: true,
    description: "Invoice for 04-26-2021",
    download: "PDF | CSV",
    date: "03-26-2021",
    amount: "$7.60",
  },
  {
    id: 2,
    isPositive: false,
    description: "Payment (Visa 8214)",
    download: "",
    date: "02-26-2021",
    amount: "-$7.60",
  },
  {
    id: 3,
    isPositive: true,
    description: "Invoice for 02-26-2021",
    download: "PDF | CSV",
    date: "01-26-2021",
    amount: "$7.60",
  },
  {
    id: 4,
    isPositive: false,
    description: "Payment (Visa 8214)",
    download: "",
    date: "12-26-2020",
    amount: "-$7.60",
  },
];

const SubscriptionTable2 = () => {
  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="mb-2">
        <tr className="mb-2">
          <th className="px-4 py-3 text-left text-[11px] font-light text-gray-500 tracking-wider">
            Description
          </th>
          <th className="px-6 py-3 text-left text-[11px] font-light text-gray-500 tracking-wider">
            Download
          </th>
          <th className="px-6 py-3 text-left text-[11px] font-light text-gray-500 tracking-wider">
            Date
          </th>
          <th className="px-6 py-3 text-left text-[11px] font-light text-gray-500 tracking-wider">
            Amount
          </th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200">
        {billingHistory.map((billing) => {
          return (
            <tr key={billing.id} className="bg-gray-100 rounded-md mb-2">
              <td
                className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${
                  billing.isPositive ? "text-[#8770ff]" : "text-[#646464]"
                }`}
              >
                {billing.description}
              </td>
              <td
                className={`px-6 py-4 whitespace-nowrap text-sm ${
                  billing.isPositive ? "text-[#8770ff]" : "text-[#646464]"
                }`}
              >
                {billing.download}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-[#646464]">
                {billing.date}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-[#646464]">
                {billing.amount}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

const Subscriptions = () => {
  return (
    <main className="flex flex-grow flex-col gap-6  mb-10 pl-4 pr-7 md:pr-4 lg:pr-0 md:pl-0 overflow-x-hidden">
      {/* DESKTOP */}
      <div className="bg-white rounded-lg shadow-xl px-4 py-8 lg:flex flex-col  gap-2 items-start w-full hidden">
        <h2 className="">Your Subscriptions</h2>

        <p className="text-[#646464] text-[10px]">
          As well as the billing history
        </p>
      </div>

      {/* FIRST TABLE */}
      <div className="bg-white rounded-lg shadow-xl px-4 py-8 w-full overflow-x-auto">
        <div className="w-full">
          <div className="flex flex-col gap-2 mb-6">
            <h2 className="lg:text-xl text-[16px]">Subscriptions</h2>

            <p className="text-[10px]">
              Your plan: <span>Basic</span>{" "}
              <span className="text-[#8770FF]">$0.00/month</span>
            </p>
          </div>

          <div className="overflow-x-auto">
            <SubscriptionTable />
          </div>
        </div>
      </div>

      {/* SECOND TABLE */}

      <div className="bg-white rounded-lg shadow-xl px-4 py-8 w-full overflow-x-auto">
        <div className="w-full">
          <div className="flex flex-col gap-2 mb-6">
            <h2 className="lg:text-xl text-[16px]">Billing History</h2>
          </div>

          <div className="overflow-x-auto">
            <SubscriptionTable2 />
          </div>

          {/* PAGINATION */}
          <div className="flex justify-center items-center mt-6 space-x-2 text-[12px]">
            <div className="rotate-[180deg]">
              <img src={shortRightArrowIcon} alt="" />
            </div>
            <span className="bg-gray-300 text-[#202020] w-5 h-5 flex items-center justify-center rounded-sm">
              1
            </span>
            <span className="text-[#202020]">2</span>
            <span className="text-[#202020]">3</span>
            <span className="text-[#202020]">...</span>
            <img src={shortRightArrowIcon} alt="right arrow" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Subscriptions;
