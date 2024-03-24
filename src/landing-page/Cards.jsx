import React from "react";
import j9 from "../assets/j9.jpg";
import uni2 from "../assets/uni2.jpg";

const Cards = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full flex flex-col p-4 my-4 rounded-lg shadow-xl hover:scale-105 duration-300">
          <img
            className="w-20 h-20 mx-auto rounded-full mt-[-3rem]"
            src={j9}
            alt=""
          />
          <h3 className="text-xl md:text-2xl font-bold text-center py-4">
            Unlock your mind
          </h3>
          <p className="text-center text-3xl font-bold">$100</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-5">Enjoy Unlimited Access</p>
            <p className="py-2 border-b mx-8">
              Be the best version of yourself
            </p>
            <p className="py-2 border-b mx-8">Mind Booster</p>
          </div>
          <button className="py-2 sm:py-3 md:py-3 md:w-[180px] sm:w-[180px] w-[140px] mx-auto my-6 bg-[#27b692] text-teal-950 font-medium">
            Free Trial
          </button>
        </div>
        <div className="bg-gray-100 w-full flex flex-col p-4 my-4 rounded-lg shadow-xl hover:scale-105 duration-300">
          <img
            className="w-20 h-20 mx-auto rounded-full mt-[-3rem]"
            src={j9}
            alt=""
          />
          <h3 className="text-xl md:text-2xl font-bold text-center py-4">
            Unlock your mind
          </h3>
          <p className="text-center text-3xl font-bold">$100</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-5">Enjoy Unlimited Access</p>
            <p className="py-2 border-b mx-8">
              Be the best version of yourself
            </p>
            <p className="py-2 border-b mx-8">Mind Booster</p>
          </div>
          <button className="py-2 sm:py-3 md:py-3 md:w-[180px] sm:w-[180px] w-[140px] mx-auto my-6 bg-black text-[#27b692] font-medium">
            Free Trial
          </button>
        </div>
        <div className="w-full flex flex-col p-4 my-4 rounded-lg shadow-xl hover:scale-105 duration-300">
          <img
            className="w-20 h-20 mx-auto rounded-full mt-[-3rem]"
            src={j9}
            alt=""
          />
          <h3 className="text-xl md:text-2xl font-bold text-center py-4">
            Unlock your mind
          </h3>
          <p className="text-center text-3xl font-bold">$100</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-5">Enjoy Unlimited Access</p>
            <p className="py-2 border-b mx-8">
              Be the best version of yourself
            </p>
            <p className="py-2 border-b mx-8">Mind Booster</p>
          </div>
          <button className="py-2 sm:py-3 md:py-3 md:w-[180px] sm:w-[180px] w-[140px] mx-auto my-6 bg-[#27b692] text-teal-950 font-medium">
            Free Trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
