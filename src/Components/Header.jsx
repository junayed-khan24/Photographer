import React from "react";
import Hero from "../assets/hero.png"
import { Link } from "react-router";

const Header = () => {
  return (
    <section className="bg-base-200 w-full  pt-12 md:pt-20 ">
      <div className="max-w-7xl mx-auto px-4 py-10 lg:py-16">
        {/* Top Content */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">
          
          {/* Left Title */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight">
            YOU,
            <br />
            THROUGH MY <span className="text-secondary">LENS</span>
          </h1>

          {/* Right Text + Button */}
          <div className="lg:text-right max-w-md space-y-4">
            <p className="text-sm md:text-lg font-normal font-regular text-[#111111]">
              I help you see your life the way it deserves to be seen.
              Honest, Raw, Beautiful.
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