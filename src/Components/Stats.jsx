import React from "react";
import img from "../assets/hero.png"

const Stats = () => {
  return (
    <section className="bg-[#F5F5F5] py-20">
      <div className="max-w-6xl mx-auto px-4 text-center">

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-regular font-normal mb-2">
          My stats
        </h2>

        <p className=" mb-14 max-w-2xl mx-auto  text-1xl md:text-2xl font-normal text-neutral mt-0 md:mt-4">
          Every photo tells a story. These numbers show my commitment to
          capturing them well.
        </p>

        {/* Custom Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* LEFT BIG CARD */}
          <div className="bg-base-100 rounded-2xl shadow-md flex flex-col justify-center items-center p-14 hover:shadow-xl transition">
            <h3 className="text-5xl md:text-7xl font-medium mb-8">
              200+
            </h3>
            <div>
            <img src={img} alt="Project" className="w-full h-48 object-cover rounded-xl hover:scale-105 transition " />
            </div>
            <p className="text-xl md:text-2xl text-[#575757] font-normal mt-12">
              Projects <br className="" /> Completed
            </p>
          </div>

          {/* RIGHT SIDE (2 stacked cards) */}
          <div className="flex flex-col gap-6">

            {/* TOP DARK */}
            <div className="font-semibold bg-gradient-to-r from-[#373737]  to-[#000000] text-neutral-content rounded-2xl p-12 shadow-lg flex flex-col justify-center items-center hover:scale-105 transition">
              <h3 className="text-5xl md:text-7xl font-medium text-white mb-2">
                6+ yrs
              </h3>
              <p className="text-xl md:text-2xl text-[#B9B9B9] font-normal mt-12">
                Behind the lens
              </p>
            </div>

            {/* BOTTOM LIGHT */}
            <div className="bg-base-100 rounded-2xl shadow-md p-12 flex flex-col justify-center items-center hover:shadow-xl transition">
              <h3 className="text-5xl md:text-7xl font-medium mb-2">
                100%
              </h3>
              <p className="text-xl md:text-2xl text-[#575757] font-normal mt-12">
                Client satisfaction
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;