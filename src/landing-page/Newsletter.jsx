import React from "react";

const Newsletter = () => {
  return (
    <div className="w-full py-16 text-white px-4">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2 my-4">
          <h1 className="md:text-3xl sm:text-2xl py-2 text-xl font-bold">
            Want secrets to unlocking your superpowers?
          </h1>
          <p>Sign-up to our newsletter to get latest updates</p>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            <input
              className="p-2 w-full text-black"
              type="email"
              placeholder="Email"
            />
            <button className="py-2 rounded-md w-[150px] mx-auto md:mx-3 bg-[#01a37b] my-6  text-black ml-4 font-medium">
              Notify Me
            </button>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.{" "}
            <span className="text-[#01a37b]">Privacy Policy</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
