import React from "react";
import uni40 from "../assets/uni40.png";

const FirstSegment = () => {
  return (
    <div className="bg-white w-full py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img src={uni40} alt="" className="w-[500px] mx-auto my-4" />
        <div className="flex flex-col justify-center">
          <p className="md:text-xl text-lg font-semibold text-[#01a37b]">
            This Is Real, Awesome & Massive
          </p>
          <h1 className="md:text-3xl sm:text-3xl text-2xl mb-5 pt-2 font-bold">
            G-Books Changing Lives
          </h1>
          <p className="text-gray-600">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores
            quo obcaecati debitis deleniti provident rem reprehenderit quisquam
            eius quae sint. Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Veniam hic distinctio laboriosam id, odio aspernatur dicta
            molestiae fugiat molestias perferendis.
          </p>
          <button className="py-2 w-[140px] mx-auto md:mx-0 bg-black my-6  text-[#01a37b] font-medium">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default FirstSegment;
