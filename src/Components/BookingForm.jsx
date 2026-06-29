import React, { useEffect } from "react";
import AOS from "aos";

const BookingForm = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <div className="py-16 px-4 md:px-10 bg-base-200">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-xl">

        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-black">
            📸 আপনার সেশন বুক করুন
          </h2>
          <p className="text-black mt-2">
            আপনার বিশেষ মুহূর্তগুলোকে চিরস্মরণীয় করে তুলতে আজই বুকিং করুন।
          </p>
        </div>

        {/* Form */}
        <form className="space-y-6">

          {/* Name */}
<div>
  <label className="font-semibold text-black mb-2 block">
    নাম *
  </label>

  <input
    type="text"
    placeholder="আপনার নাম লিখুন *"
    className="input input-bordered w-full rounded-xl"
  />
</div>

{/* Category */}
<div>
  <label className="font-semibold text-black mb-2 block">
    ফটোগ্রাফির ধরন *
  </label>

  <select className="select select-bordered w-full rounded-xl">
    <option disabled selected>একটি ক্যাটাগরি নির্বাচন করুন</option>
    <option>ইভেন্ট ফটোগ্রাফি</option>
    <option>বিয়ে ফটোগ্রাফি</option>
    <option>পোর্ট্রেট ফটোগ্রাফি</option>
    <option>প্রোডাক্ট ফটোগ্রাফি</option>
    <option>ট্রাভেল ফটোগ্রাফি</option>
  </select>
</div>

          {/* Phone */}
          <div>
            <label className="font-semibold text-black mb-2 block">
              মোবাইল নম্বর *
            </label>
            <input
              type="text"
              placeholder="মোবাইল নম্বর *"
              className="input input-bordered w-full rounded-xl"
            />
          </div>

          {/* Email */}
          <div>
            <label className="font-semibold text-black mb-2 block">
              ইমেইল ঠিকানা *
            </label>
            <input
              type="email"
              placeholder="ইমেইল ঠিকানা *"
              className="input input-bordered w-full rounded-xl"
            />
          </div>

          {/* Address */}
          <div>
            <label className="font-semibold text-black mb-2 block">
              ঠিকানা *
            </label>

            <input
              type="text"
              placeholder="রাস্তার ঠিকানা *"
              className="input input-bordered w-full mb-3 rounded-xl"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <input
                type="text"
                placeholder="শহর"
                className="input input-bordered w-full rounded-xl"
              />

              <input
                type="text"
                placeholder="জেলা"
                className="input input-bordered w-full rounded-xl"
              />

              <input
                type="text"
                placeholder="পোস্ট কোড"
                className="input input-bordered w-full rounded-xl"
              />
            </div>
          </div>

          {/* Date */}
          <div>
            <label className="text-black font-semibold mb-2 block">
              সেশনের তারিখ *
            </label>

            <input
              type="date"
              className="input input-bordered w-full md:w-1/2 rounded-xl"
            />
          </div>

          {/* Button */}
          <div className="pt-6">
            <button className="btn w-full text-lg font-semibold border-none hover:scale-105 transition-all duration-300 bg-black text-white shadow-lg">
              📅 বুকিং নিশ্চিত করুন
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default BookingForm;