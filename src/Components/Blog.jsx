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
      title: "Capturing Golden Hour Magic",
      img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      desc: "How golden hour light can transform ordinary photos into magic.",
    },
    {
      id: 2,
      title: "Street Photography Tips",
      img: "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
      desc: "Learn to capture real life moments naturally on the street.",
    },
    {
      id: 3,
      title: "Portrait Lighting Guide",
      img: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
      desc: "Simple lighting tricks for professional portrait shots.",
    },
    {
      id: 4,
      title: "Travel With Camera",
      img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
      desc: "Travel photography gear and tips you should know.",
    },
    {
      id: 5,
      title: "Editing Like a Pro",
      img: "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
      desc: "Basic color grading to make your photos look cinematic.",
    },
    {
      id: 6,
      title: "Finding Your Style",
      img: "https://images.unsplash.com/photo-1522163182402-834f871fd851",
      desc: "Discover your own creative photography style.",
    },
  ];

  return (
    <section className="bg-base-200 py-24 px-4 md:px-10">

      {/* Title */}
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-semibold">Latest Blog</h2>
        <p className="text-secondary mt-3 font-normal font-regular text-lg md:text-xl">
          Stories, tips and photography experiences
        </p>
      </div>

      {/* Blog Grid */}
      <div className="max-w-7xl mx-auto grid gap-8 
                      grid-cols-1 
                      sm:grid-cols-2 
                      lg:grid-cols-3">

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
                alt=""
                className="w-full h-56 object-cover group-hover:scale-110 transition duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-6 space-y-3">
              <h3 className="text-lg font-semibold">
                {blog.title}
              </h3>

              <p className="text-secondary font-regular font-normal text-sm">
                {blog.desc}
              </p>

              <button className="btn btn-sm btn-neutral rounded-full mt-2 hover:animate-ping">
                Read More
              </button>
            </div>

          </div>
        ))}

      </div>
    </section>
  );
};

export default Blog;