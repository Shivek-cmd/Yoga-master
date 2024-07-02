import React from "react";
import useAxiosFetch from "../../../hooks/useAxiosFetch";
const PopularClasses = () => {
  const axiosFetch = useAxiosFetch();
  return (
    <div className="md:w-[80%] mx-auto my-36">
      <div>
        <h1 className="text-5xl font-bold text-center dark:text-white">
          Our <span className="text-secondary">Popular</span> Classes
        </h1>
        <div className="w-[40%] text-center mx-auto my-4">
          <p className="text-gray-500">
            Explore our Popular Classes. Here is some popular classes based on
            How many student enrolled
          </p>
        </div>
      </div>
    </div>
  );
};

export default PopularClasses;
