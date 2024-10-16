import BlogData from "../BlogData";
import Nav from "../components/Nav";
import H2 from "../components/H2";
import H3 from "../components/H3";
import Li from "../components/Li";
import H1 from "../components/H1";
import P from "../components/P";
import { useState } from "react";
import {
  facebookIconIterms,
  twitterIconIterms,
  linkedinIconIterms,
  pinterestIconIterms,
} from "../assets/icons";
import BlogCard from "../components/cards/BlogCard";

const EachBlogPage = () => {
  const [activeLink, setActiveLink] = useState("#intro");

  const data = [
    { id: 1, desc: "LessAccounting’s Shopify invoice application" },
    { id: 2, desc: "Shopify account" },
    { id: 3, desc: "iPhone or Android mobile device" },
    { id: 4, desc: "LessAccounting paid plan" },
    { id: 5, desc: "Printer" },
  ];

  // Function to handle link click
  const handleLinkClick = (e, link) => {
    e.preventDefault();
    setActiveLink(link);
  };

  const shareUrl = encodeURIComponent(window.location.href);
  const shareTitle = encodeURIComponent("How to Print an Invoice on Shopify");

  const shareSocial = (platform) => {
    let url;
    switch (platform) {
      case "facebook":
        url = `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`;
        break;
      case "twitter":
        url = `https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}`;
        break;
      case "pinterest":
        url = `https://pinterest.com/pin/create/button/?url=${shareUrl}&description=${shareTitle}`;
        break;
      case "linkedin":
        url = `https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}&title=${shareTitle}`;
        break;
      default:
        return;
    }
    window.open(url, "_blank", "width=600,height=400");
  };

  return (
    <>
      <main className="max-w-[550px] lg:max-w-[650px] w-full mx-auto mb-[170px] mt-[60px] pl-6 pr-10 lg:pl-0 lg:pr-0">
        <section className="flex gap-8">
          {/* left section */}
          <div className="w-[100%] lg:w-[70%]">
            <div className="bg-[#8770ff] w-full h-[200px] mb-5" />

            <H1 textSize={30} fontWeight={300} id={"intro"}>
              How to Print an Invoice on Shopify
            </H1>

            <P widthFull={100} marginTop={15}>
              Sending invoices via email is the standard when it comes to
              Shopify orders, but the days of print invoices aren’t gone just
              yet. Sometimes, you need to print an order invoice if you’re
              shipping it to a retailer. That sounds fine until you need to
              print invoices in bulk – that’s where the trouble begins.
              <br />
              <br />
              You’d think that there’s a built-in Shopify “print invoice”
              feature for that, but there isn’t. Luckily, there are
              user-friendly tools to support your business, though, and I’ll
              introduce you to how to print an invoice on Shopify using
              LessAccounting’s Shopify invoice app to help you.
            </P>

            <div className="mb-4" />

            <H2 fontWeight={400} textSize={13} id={"requirements"}>
              What You Will Need to Follow This Tutorial
            </H2>

            <ol className="flex flex-col items-start gap-1 mt-2 ml-4">
              {data.map((item) => {
                return (
                  <li
                    className="flex items-center gap-1 justify-center text-[#646464] text-[10px]"
                    key={item.id}
                  >
                    <div className="bg-green-400 rounded-full w-1 h-1" />
                    {item.desc}
                  </li>
                );
              })}
            </ol>

            <div className="mb-4" />

            <H2 fontWeight={400} textSize={13} id={"instructions"}>
              Step by Step Instructions
            </H2>

            <P widthFull={100} marginTop={15}>
              There are several ways to print invoices for your Shopify orders,
              even if they’re in bulk. We’ll provide you with a tutorial for
              each of them so that you could use the one that seems easier for
              you, and the results will be the same. Let’s get into your total
              solution that’ll put an end to the inconvenience of using the
              Order Printer app! No HTML knowledge required!
            </P>

            <div className="mb-4" />

            <H3 fontWeight={400} textSize={12}>
              1. Using the Filtration Method
            </H3>

            <P widthFull={100} marginTop={6}>
              The final method can actually be done through your Shopify admin
              dashboard, and it’s actually pretty straightforward as well. Sign
              in to your Shopify store/account like you usually would, and then
              click on “Orders” on the dashboard. Then, you have two options:
              you could either select two or more orders or filter the orders
              using the options we’ve discussed (date range or financial
              status.) <br />
              <br />
              After you’ve selected the orders that you want to print the
              invoice(s) for, click on “Actions” and then choose “Send or Print
              Invoices.” It’s in a blue icon in case you don’t see it at first
              sight. Simply, you’ll then be redirected to our app, which will
              receive the same exact orders you’ve selected. <br />
              <br /> Go ahead and click on the “Print Invoices” button so that
              the system receives and processes the request. Just like the other
              two methods, click on “Bulk Print Batches” to download the PDF
              document that has the invoices you’ll print.
            </P>

            <div className="mb-4" />

            <H3 fontWeight={400} textSize={12}>
              2. By Selecting Two or More Orders
            </H3>

            <P widthFull={100} marginTop={6}>
              An alternative method is to select two orders or more to print
              their invoices. Like the previous one, you’ll first start by
              clicking on “Invoices” in the menu bar on the left of the app and
              then “+New Invoice” followed by “Invoice for Shopify Order.”{" "}
              <br />
              <br />
              Now, you’ll proceed to select two orders or more from the list of
              orders (choose the ones you want to print). You’ll then find a
              “Print Invoices” button, which you’ll click on to prompt the
              system to receive and process the bulk print invoices request that
              you’ve selected. <br />
              <br />
              Like the earlier method, you’ll find a “Bulk Print Batches”
              appearing in the left menu bar. Click on it to download the PDF
              file that contains your bulk orders’ invoices. <br />
              <br /> By the way, you could customize your invoice template and
              even set automatic reminders for customers to nudge them to make
              the payment. Play around with these features!
            </P>

            <div className="mb-4" />

            <H3 fontWeight={400} textSize={12}>
              3. Through Your Shopify Admin Dashboard
            </H3>

            <P widthFull={100} marginTop={6}>
              The final method can actually be done through your Shopify admin
              dashboard, and it’s actually pretty straightforward as well. Sign
              in to your Shopify store/account like you usually would, and then
              click on “Orders” on the dashboard. Then, you have two options:
              you could either select two or more orders or filter the orders
              using the options we’ve discussed (date range or financial
              status.) <br />
              <br />
              After you’ve selected the orders that you want to print the
              invoice(s) for, click on “Actions” and then choose “Send or Print
              Invoices.” It’s in a blue icon in case you don’t see it at first
              sight. Simply, you’ll then be redirected to our app, which will
              receive the same exact orders you’ve selected. <br></br>Go ahead
              and click on the “Print Invoices” button so that the system
              receives and processes the request. Just like the other two
              methods, click on “Bulk Print Batches” to download the PDF
              document that has the invoices you’ll print.
            </P>

            <div className="mb-4" />

            <H2 fontWeight={400} textSize={12} id={"conclusion"}>
              Conclusion
            </H2>

            <P widthFull={100} marginTop={6}>
              The way I see it, invoices and packing slips will always be
              necessary. Not just that, but they’ll also always go hand in hand
              and complement each other. <br />
              <br />
              While a packing slip contains the actual product information for
              customers, the invoice contains the important order details, like
              the payment information, delivery, details, and more that the
              customers will need to be able to make the order payment to your
              store. It’s like the printed version of the order confirmation
              page. <br />
              <br />
              Now that I’ve shown you the steps for how to print an invoice on
              Shopify in this guide, let me know how do you usually go about
              printing invoices? <br />
              <br /> If you haven’t tried LessAccounting’s Shopify invoice app,
              try it out now! It’ll certainly help keep your business going by
              handling your bookkeeping and everything accounting-related with
              your Shopify store. From documentation to invoices, it just made
              my life so much easier as someone who really isn’t into
              accounting.
            </P>
          </div>

          {/* right section */}
          <div className="min-h-screen w-[30%] hidden lg:flex">
            <div className=" flex flex-col gap-3 sticky top-[0px]">
              <H2 textSize={16} fontWeight={400}>
                Contents
              </H2>

              <ol className="flex flex-col gap-1">
                <Li
                  link={"#intro"}
                  textColor={"#646464"}
                  fontSize={9}
                  isActive={activeLink === "#intro"}
                  handleClick={handleLinkClick}
                >
                  1 How to Print an Invoice on Shopify
                </Li>
                <Li
                  link={"#requirements"}
                  pl={20}
                  textColor={"#646464"}
                  fontSize={9}
                  isActive={activeLink === "#requirements"}
                  handleClick={handleLinkClick}
                >
                  1.1 What You Will Need to Follow This Tutorial
                </Li>
                <Li
                  link={"#instructions"}
                  pl={20}
                  textColor={"#646464"}
                  fontSize={9}
                  isActive={activeLink === "#instructions"}
                  handleClick={handleLinkClick}
                >
                  1.2 Steb by Step Instructions
                </Li>
                <Li
                  link={"#conclusion"}
                  pl={20}
                  textColor={"#646464"}
                  fontSize={9}
                  isActive={activeLink === "#conclusion"}
                  handleClick={handleLinkClick}
                >
                  1.3 Conclusion
                </Li>
              </ol>
            </div>
          </div>
        </section>

        {/* Social share icons */}
        <div className="flex gap-2 justify-start items-center mt-8">
          <P marginTop={0} width={35}>
            Share:
          </P>
          <div className="flex justify-start items-center gap-1.5">
            <img
              src={facebookIconIterms}
              alt="Facebook share"
              width={17}
              className="cursor-pointer"
              onClick={() => shareSocial("facebook")}
            />
            <img
              src={twitterIconIterms}
              alt="Twitter share"
              width={17}
              className="cursor-pointer"
              onClick={() => shareSocial("twitter")}
            />
            <img
              src={pinterestIconIterms}
              alt="Pinterest share"
              width={17}
              className="cursor-pointer"
              onClick={() => shareSocial("pinterest")}
            />
            <img
              src={linkedinIconIterms}
              alt="LinkedIn share"
              width={17}
              className="cursor-pointer"
              onClick={() => shareSocial("linkedin")}
            />
          </div>
        </div>

        {/* related blog cards */}
        <div className="flex flex-col items-start mt-[80px]">
          <H2 textSize={24} fontWeight={400}>
            Related Posts
          </H2>

          {/* grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10 */}

          {/* flex flex-wrap gap-4 mt-10 */}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
            {BlogData.splice(0, 4).map((blog) => {
              return (
                <BlogCard
                  key={blog.id}
                  title={blog.title}
                  desc={blog.desc}
                  link={`/blog/${blog.id}`}
                />
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
};

export default EachBlogPage;
