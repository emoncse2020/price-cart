import React from "react";
import Feature from "../Feature/Feature";

const PriceOption = ({ option }) => {
  const { name, price, features } = option;
  return (
    <div className="bg-blue-300 rounded-md p-4 text-white text-center space-y-2 flex flex-col">
      <h2 className="">
        <span className="text-7xl">{price}</span>
        <span className="text-3xl">/mon</span>
      </h2>
      <h4 className="text-3xl">{name}</h4>

      <div className="pl-6 flex-grow">
        {features.map((feature, index) => (
          <Feature key={index} feature={feature}></Feature>
        ))}
      </div>
      <button className="bg-green-400 px-3 py-2 mt-12 w-full rounded font-bold hover:bg-green-800">
        Buy Now
      </button>
    </div>
  );
};

export default PriceOption;
