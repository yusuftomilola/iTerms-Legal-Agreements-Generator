import { useState } from "react";

import Nav from "../components/Nav";
import H2 from "../components/H2";
import P from "../components/P";
import PreHeading from "../components/PreHeading";
import BlogData, { BlogCategories } from "../BlogData";
import BlogCard from "../components/cards/BlogCard";
import H3 from "../components/H3";
import { shortRightArrowIcon } from "../assets/icons";

const Blog = () => {
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  // Calculate the total number of pages
  const totalPages = Math.ceil(BlogData.length / itemsPerPage);

  // Get the current set of data for the current page
  const currentData = BlogData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Handle Previous Page
  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Handle Next Page
  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <>
      <main className="max-w-[650px] w-full mx-auto mb-[170px]">
        <div className="flex flex-col gap-2 text-center justify-center items-center mb-[30px] mt-[60px]">
          <PreHeading>KEEP UP WITH THE LATEST</PreHeading>
          <H2 textSize={24}>Discover What's New</H2>
          <P width={330} marginTop={0}>
            Learn from the experts at iTerms to ensure you stay on top of
            industry legalities and changing legal landscapes at all times.
          </P>
        </div>

        <section className="flex gap-8">
          {/* categories */}
          <div className="w-[20%] hidden lg:block">
            <H3 textSize={14} fontWeight={400}>
              Categories
            </H3>
            {BlogCategories.map((category) => {
              const categoriesInBlogArray = BlogData.filter(
                (blog) => blog.Category === category
              );

              const nrOfCategories = categoriesInBlogArray.length;

              return (
                <P>
                  {category} ({nrOfCategories})
                </P>
              );
            })}
          </div>

          {/* blog cards */}
          <div className="w-[80%] mx-auto lg:mx-0 flex flex-col items-center">
            {/* current blog cards data */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-[650px] w-full mx-auto">
              {currentData.map((blog) => {
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

            {/* Pagination Controls */}
            <div className="flex items-center justify-between px-4 py-3 sm:px-6 mt-8">
              <div className="flex flex-1 justify-between sm:hidden">
                <button
                  onClick={handlePrevious}
                  disabled={currentPage === 1}
                  className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  Previous
                </button>

                <button
                  onClick={handleNext}
                  disabled={currentPage === totalPages}
                  className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  Next
                </button>
              </div>

              <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                <div>
                  <nav aria-label="Pagination" className="isolate inline-flex">
                    <button
                      onClick={handlePrevious}
                      disabled={currentPage === 1}
                      className="relative inline-flex items-center px-2 py-2"
                    >
                      <span className="sr-only">Previous</span>
                      <img
                        src={shortRightArrowIcon}
                        alt="right arrow"
                        aria-hidden="true"
                        className="h-4 w-4 rotate-[180deg]"
                      />
                    </button>

                    {/* Dynamic page numbers */}
                    {[...Array(totalPages).keys()].map((page) => (
                      <button
                        key={page + 1}
                        onClick={() => setCurrentPage(page + 1)}
                        className={`relative inline-flex items-center px-2 text-[10px] font-semibold text-gray-600 rounded-md ${
                          currentPage === page + 1 && "bg-gray-200"
                        } `}
                      >
                        {page + 1}
                      </button>
                    ))}

                    <button
                      onClick={handleNext}
                      disabled={currentPage === totalPages}
                      className="relative inline-flex items-center px-2 py-2"
                    >
                      <span className="sr-only">Next</span>

                      <img
                        src={shortRightArrowIcon}
                        alt="right arrow"
                        aria-hidden="true"
                        className="h-4 w-4"
                      />
                    </button>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Blog;
