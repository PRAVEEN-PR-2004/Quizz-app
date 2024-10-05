import React from "react";

const Home = () => {
  return (
    <section className="lg:w-9/12 md:w-[90%] mx-auto mt-12 flex justify-between items-center ">
      <div className="w-full md:w-1/2">
        <h2 className="my-8 lg:text-4xl text-3xl font-medium text-[#333] md:w-4/6 lg:leading-normal leading-normal mb-3 ">
          Learn new concepts for each question
        </h2>
        <p className="py-2 pl-2 mb-6 text-gray-500 border-l-4">
          We help you prepare for exams and quizzes
        </p>
        <div>
          <button className="px-6 py-2 text-white rounded bg-primary">
            Start Quizz
          </button>
          <button className="px-6 py-2 ml-3 transition-all duration-300 ease-in border rounded text-primary hover:bg-primary hover:text-white">
            Know more
          </button>
        </div>
      </div>
      <div className="w-full md:w-1/2">right side</div>
    </section>
  );
};

export default Home;
