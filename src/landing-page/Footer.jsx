import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-400">
      <div>
        <h2 className="w-full text-3xl font-bold text-[#27b692]">G-BOOKS</h2>
        <p className=" py-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
          perspiciatis non natus facilis cumque. Temporibus necessitatibus culpa
          quaerat sapiente, eos delectus eveniet?
        </p>
        <div className="flex justify-between md:w-[75%] my-6 text-white">
          <FaFacebookSquare size={30} />
          <FaInstagram size={30} />
          <FaGithubSquare size={30} />
          <FaTwitterSquare size={30} />
          <FaDribbbleSquare size={30} />
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-between mt-6">
        <div>
          <h6 className="font-medium text-white">What We Do</h6>
          <ul>
            <li className="py-2 text-sm">Bookstore</li>
            <li className="py-2 text-sm">Marketing</li>
            <li className="py-2 text-sm">Bookstore</li>
            <li className="py-2 text-sm">Marketing</li>
            <li className="py-2 text-sm">Bookstore</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-white">Custom</h6>
          <ul>
            <li className="py-2 text-sm">Marketing</li>
            <li className="py-2 text-sm">Pricing</li>
            <li className="py-2 text-sm">Marketing</li>
            <li className="py-2 text-sm">Pricing</li>
            <li className="py-2 text-sm">Marketing</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-white">Company Offer</h6>
          <ul>
            <li className="py-2 text-sm">Goals</li>
            <li className="py-2 text-sm">Mission</li>
            <li className="py-2 text-sm">Vision</li>
            <li className="py-2 text-sm">Marketing</li>
            <li className="py-2 text-sm">Bookstore</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-white">Prime</h6>
          <ul>
            <li className="py-2 text-sm">Belief</li>
            <li className="py-2 text-sm">Policy</li>
            <li className="py-2 text-sm">Terms</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
