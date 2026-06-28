
import React, { useEffect } from "react";
import AOS from "aos";

const Blog = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
    });
  }, []);

  const blogs = [
    {
      id: 1,
      title: "সোনালী বিকেলের আলোয় ছবির জাদু",
      img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      desc: "গোল্ডেন আওয়ারের কোমল আলো কীভাবে একটি সাধারণ ছবিকে অসাধারণ করে তুলতে পারে, তা জানুন।",
    },
    {
      id: 2,
      title: "স্ট্রিট ফটোগ্রাফির সেরা কৌশল",
      img: "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
      desc: "রাস্তার স্বাভাবিক ও বাস্তব মুহূর্তগুলোকে সুন্দরভাবে ক্যামেরাবন্দী করার সহজ কিছু টিপস।",
    },
    {
      id: 3,
      title: "পোর্ট্রেট লাইটিং গাইড",
      img: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
      desc: "প্রফেশনাল মানের পোর্ট্রেট ছবির জন্য সহজ ও কার্যকর লাইটিং কৌশল শিখুন।",
    },
    {
      id: 4,
      title: "ভ্রমণে ক্যামেরা সঙ্গী",
      img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
      desc: "ভ্রমণের সময় কোন ক্যামেরা গিয়ার ব্যবহার করবেন এবং কীভাবে দারুণ ছবি তুলবেন, সে সম্পর্কে জানুন।",
    },
    {
      id: 5,
      title: "প্রফেশনালের মতো ছবি এডিটিং",
      img: "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
      desc: "সহজ কালার গ্রেডিং ও এডিটিংয়ের মাধ্যমে আপনার ছবিকে আরও আকর্ষণীয় ও সিনেম্যাটিক করে তুলুন।",
    },
    {
      id: 6,
      title: "নিজস্ব ফটোগ্রাফির স্টাইল খুঁজে নিন",
      img: "https://images.unsplash.com/photo-1522163182402-834f871fd851",
      desc: "আপনার সৃজনশীলতা প্রকাশ করে এমন একটি স্বতন্ত্র ফটোগ্রাফি স্টাইল গড়ে তোলার উপায় জানুন।",
    },
  ];

  return (
    <section className="bg-base-200 py-24 px-4 md:px-10">
      {/* Title */}
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-semibold">
          সর্বশেষ ব্লগ
        </h2>

        <p className="text-secondary mt-3 font-normal text-lg md:text-xl">
          ফটোগ্রাফি নিয়ে গল্প, অভিজ্ঞতা ও প্রয়োজনীয় পরামর্শ
        </p>
      </div>

      {/* Blog Grid */}
      <div
        className="max-w-7xl mx-auto grid gap-8
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3"
      >
        {blogs.map((blog, index) => (
          <div
            key={blog.id}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            className="bg-base-100 rounded-2xl shadow-md overflow-hidden group hover:shadow-xl transition"
          >
            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={blog.img}
                alt={blog.title}
                className="w-full h-56 object-cover group-hover:scale-110 transition duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-6 space-y-3">
              <h3 className="text-lg font-semibold">
                {blog.title}
              </h3>

              <p className="text-secondary font-normal text-sm">
                {blog.desc}
              </p>

              <button className="btn btn-sm btn-neutral rounded-full mt-2">
                বিস্তারিত পড়ুন
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
