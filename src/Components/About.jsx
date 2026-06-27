import React, { useEffect } from "react";
import img from "../assets/hero.png";
import { Link } from "react-router";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div className="bg-base-100 w-full min-h-screen pt-12 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 py-10 lg:py-16">
        
        {/* Heading */}
        <h2
          data-aos="fade-right"
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
        >
          <span className="text-primary">I’M</span> EMILIA ROSE
        </h2>

        <p
          data-aos="fade-left"
          className="font-normal font-regular text-secondary text-sm md:text-xl sm:text-lg mb-10 max-w-3xl"
        >
          A passionate photographer with an eye for honest, powerful moments
        </p>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          <img
            data-aos="zoom-in"
            src={img}
            alt=""
            className="w-full h-64 sm:h-80 md:h-full object-cover rounded-2xl shadow-xl"
          />

          <div
            data-aos="fade-up"
            className="grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-4 md:block hidden space-y-2"
          >
            <img
              src={img}
              alt=""
              className="w-full h-48 sm:h-64 object-cover rounded-2xl shadow-xl"
            />
            <img
              src={img}

              alt=""
              className="w-full h-48 sm:h-64 object-cover rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </div>

      {/* My Story Section */}
      <section className="py-20 px-4 md:px-10 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            {/* Text */}
            <div
              data-aos="fade-right"
              className="text-center space-y-6 md:mx-12"
            >
              <h2 className="text-3xl md:text-4xl font-normal">
                My story
              </h2>

              <p className="text-[#707070] text-xl font-regular font-normal leading-relaxed">
                My love for photography started with a borrowed camera and a sunset.
              </p>

              <p className="text-[#707070] text-xl font-regular font-normal leading-relaxed">
                Since then, I’ve chased light, laughter, and the in-between moments
                that make life feel real.
              </p>

              <p className="text-[#707070] text-xl font-regular font-normal leading-relaxed">
                I photograph to preserve stories—the ones you’re living right now.
              </p>
            </div>

            {/* Overlapping Images */}
            <div
              data-aos="zoom-in-up"
              className=" flex justify-center items-center "
            >
              <img
                src={img}
                alt=""
                className=" lg:w-full  shadow-xl  top-6 left-6 md:left-0 border-4 hover:scale-105 transition"
              />

              {/* <img
                src={img}
                alt=""
                className="w-52 md:w-60 lg:w-68 rounded-2xl shadow-2xl rotate-[6deg]  z-10 border-4 border-white hover:scale-105 transition"
              /> */}
            </div>
          </div>

          {/* Quote */}
          <div
            data-aos="fade-up"
            className="text-center mt-36 md:mt-48 md:px-36"
          >
            <h3 className="text-xl md:text-4xl font-normal font-regular max-w-3xl mx-auto leading-relaxed">
              I believe great photography happens when people feel seen, not posed.
            </h3>
          </div>
        </div>
      </section>

      {/* Behind the Lens */}
      <section className="bg-base-100 py-16 px-4 md:px-10 lg:px-20">
        <div className="text-center mb-12">
          <h2
            data-aos="fade-up"
            className="text-3xl md:text-4xl font-normal"
          >
            Behind the Lens
          </h2>

          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-secondary mt-3 max-w-xl mx-auto font-normal font-regular text-xl leading-relaxed"
          >
            When I'm not behind the camera, I'm hiking,
            sipping coffee, or chasing sunsets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

          <div
            data-aos="fade-right"
            className="overflow-hidden rounded-2xl"
          >
            <img
              src={img}
              alt=""
              className="w-full md:h-[600px] object-cover hover:scale-110 transition duration-500"
            />
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="grid grid-rows-3 gap-5 md:h-[600px]"
          >
            <div className="overflow-hidden rounded-2xl">
              <img
                src={img}
                alt=""
                className="w-full h-full object-cover hover:scale-110 transition duration-500"
              />
            </div>

            <div className="overflow-hidden rounded-2xl">
              <img
                src={img}
                alt=""
                className="w-full h-full object-cover hover:scale-110 transition duration-500"
              />
            </div>

            <div className="overflow-hidden rounded-2xl">
              <img
                src={img}
                alt=""
                className="w-full h-full object-cover hover:scale-110 transition duration-500"
              />
            </div>
          </div>

          <div
            data-aos="fade-left"
            data-aos-delay="400"
            className="overflow-hidden rounded-2xl"
          >
            <img
              src={img}
              alt=""
              className="w-full h-full object-cover hover:scale-110 transition duration-500"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <div data-aos="zoom-in" className="text-center my-16">
        <h2 className="text-2xl md:text-4xl font-normal">
          Made up your mind yet?
        </h2>

        <p className="text-secondary mt-3 text-sm md:text-xl font-regular font-normal leading-relaxed">
          Let’s talk about your visions and how I can bring them to life.
        </p>
      </div>

      <div data-aos="fade-up" data-aos-delay="200" className="text-center">
        <Link
          to="/contact"
          className="btn btn-primary bg-black text-white rounded-xl px-8 mx-auto mb-8 md:mb-16"
        >
          Book a session
        </Link>
      </div>
    </div>
  );
};

export default About;