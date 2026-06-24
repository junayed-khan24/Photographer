import React, { useEffect } from "react";
import AOS from "aos";

const BookingForm = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <div className="min-h-screen text-black to-black flex items-center justify-center px-4 py-12">

      <div
        className="w-full max-w-4xl backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl p-6 md:p-10"
        data-aos="fade-up"
      >

        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-black">
            📸 Book Your Session
          </h2>
          <p className="text-black mt-2">
            Let’s capture your special moments beautifully
          </p>
        </div>

        {/* Form */}
        <form className="space-y-6">

          {/* Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First Name *"
              className="input input-bordered w-full rounded-xl"
            />
            <input
              type="text"
              placeholder="Last Name *"
              className="input input-bordered w-full rounded-xl"
            />
          </div>

          {/* Phone */}
          <input
            type="text"
            placeholder="Phone Number *"
            className="input input-bordered w-full rounded-xl"
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Email Address *"
            className="input input-bordered w-full rounded-xl"
          />

        

          {/* Address */}
          <div>
            <input
              type="text"
              placeholder="Street Address *"
              className="input input-bordered w-full mb-3 rounded-xl"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <input
                type="text"
                placeholder="City"
                className="input input-bordered w-full rounded-xl"
              />
              <input
                type="text"
                placeholder="State"
                className="input input-bordered w-full rounded-xl"
              />
              <input
                type="text"
                placeholder="Zip Code"
                className="input input-bordered w-full rounded-xl"
              />
            </div>
          </div>

          {/* Date */}
          <div>
            <label className="text-white font-semibold mb-2 block">
              Session Date *
            </label>
            <input
              type="date"
              className="input input-bordered w-full md:w-1/2 rounded-xl"
            />
          </div>

          {/* Button */}
          <div className="pt-6">
            <button className="btn w-full text-lg font-semibold border-none hover:scale-105 transition-all duration-300 bg-black text-white shadow-lg">
              🚀 Confirm Booking
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default BookingForm;