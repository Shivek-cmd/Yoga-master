import React from "react";
import bgImg from "../../../assets/home/banner-1.jpg";
const Hero = () => {
  return (
    <div
      className="min-h-screen bg-cover"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="min-h-screen flex justify-start items-center pl-11 text-white bg-black bg-opacity-60">
        <div>
          <div className="'space-y-4 ">
            <p className="md:text-4xl text-2xl">We Provides</p>
            <h1 className="md:text-7xl text-4xl font-bold">
              Best Yoga Course Online
            </h1>
            <div className="md:w-1/2">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Distinctio in tempora fuga error animi obcaecati nihil odit!
                Quos mollitia animi nobis itaque. Placeat aliquid consectetur,
                maiores itaque rerum perferendis. Dolorum.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-5">
              <button className="px-7 py-3 rounded-lg bg-secondary font-bold uppercase">
                Join Today
              </button>
              <button className="px-7 py-3 rounded-lg border hover:bg-secondary font-bold uppercase">
                View Courses
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
