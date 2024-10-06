import React from "react";

const Home = () => {
  return (
    <section className="lg:w-9/12 md:w-[90%] mx-auto mt-12 flex flex-col md:flex-row-reverse justify-between items-center px-4">
      <div className="w-full md:w-1/2">
        <img
          src="../../public/images/banner.png"
          alt="banner"
          className="w-full mx-auto"
        ></img>
      </div>
      <div className="w-full space-y-8 md:w-1/2">
        <h2 className="my-8 lg:text-4xl text-3xl font-medium text-[#333] md:w-4/6 lg:leading-normal leading-normal mb-3 ">
          Learn new concepts for each question
        </h2>
        <p className="py-2 pl-2 mb-6 text-gray-500 border-l-4">
          We help you prepare for exams and quizzes
        </p>
        <div className="flex items-center">
          <button className="px-6 py-2 text-white rounded bg-primary">
            Start Quizz
          </button>
          <button className="inline-flex items-center px-6 py-2 ml-3 transition-all duration-300 ease-in border rounded text-primary hover:bg-primary hover:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
            Know more
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
