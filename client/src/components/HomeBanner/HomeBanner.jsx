import React from "react";

const HomeBanner = () => {
  return (
    <div className="mt-6 relative">
      <img data-aos="zoom-in"
        className="w-full h-[650px] object-cover rounded-sm"
        src="https://w.wallhaven.cc/full/4y/wallhaven-4y3gxg.jpg"
        alt=""
      />
      <div className="absolute top-0 p-10 flex flex-col text-center justify-center w-full h-[650px] bg-[#0000007b]">
        <h2 data-aos="zoom-out" className="text-4xl text-white font-bold">
          The Best Toys for Kids of All Ages
        </h2>
        <p data-aos="fade-up" className="mt-4 text-slate-200">
          Looking for the best toys for kids? Look no further! Our website has a
          wide variety of toys to choose from, <br /> all designed to help
          children learn, grow, and have fun. Whether you're looking for Action
          toys, imaginative toys, or <br /> creative toys, we have something for
          everyone.
        </p>
      </div>
    </div>
  );
};

export default HomeBanner;
