import React from "react";

const Background = () => {
  return (
    <div className="text-white ">
      <div className="max-w-[800px] mt-[-66px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <h6 className="md:text-xl text-lg text-[#27b692]">
          Develop positive energy from within
        </h6>
        <h1 className="md:text-5xl sm:text-4xl text-3xl mb-5 font-semibold">
          Motivational book that inspires
        </h1>
        <p className="text-gray-400 mb-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa officia
          maiores omnis reprehenderit unde fugiat distinctio totam iusto?
        </p>
        <button className="py-2 md:py-3 md:w-[180px]  w-[140px] mx-auto bg-[#27b692] text-teal-950 font-medium">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Background;
