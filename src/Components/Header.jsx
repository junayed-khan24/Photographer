import React from "react";
import Hero from "../assets/sakibheroimg.jpg"
import { Link } from "react-router";

const Header = () => {
  return (
    <section className="bg-base-200 w-full  pt-12 md:pt-20 ">
      <div className="max-w-7xl mx-auto px-4 py-10 lg:py-16">
        {/* Top Content */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">
          
          {/* Left Title */}
          <h1 className="text-2xl md:text-4xl  font-bold text-primary leading-tight">
            আমি, <span className="text-secondary">আপনার মুহূর্তগুলোকে</span>  <br />
            <span className="text-primary">চিরস্মরণীয়</span> করে তুলতে চাই।
          </h1>

          {/* Right Text + Button */}
          <div className=" max-w-md space-y-4">
            <p className="text-sm md:text-lg font-normal font-regular text-[#111111]">
              
              আপনার জীবনের সবচেয়ে মূল্যবান মুহূর্তগুলোকে যত্ন, ভালোবাসা এবং সৃজনশীলতার সাথে চিরস্মরণীয় করে তুলি।
            </p>

        <Link to="/booking">
            <button className="btn btn-primary bg-black text-white rounded-xl px-8 hover:bg-[#333333] transition duration-300" >
              Book a session
            </button>
        </Link>
          </div>
        </div>

        {/* Hero Image */}
        <div className="rounded-2xl overflow-hidden shadow-xl">
          <img
            src={Hero}
            alt="Camera Hero"
            className="w-full h-[250px] md:h-[400px] lg:h-[520px] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Header;