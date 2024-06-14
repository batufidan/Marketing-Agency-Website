"use client";

import React from "react";
import { CardHoverEffectDemo } from "./snippets/card-hover-effect-snippet";

const Services = () => {
  return (
    <div className="max-w-5xl  mx-auto py-20">
      <div className="text-4xl  md:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-b from-blue-500 to-neutral-50 bg-opacity-50">
        Streamline your business with our services
      </div>
      <p className="mt-4 text-lg font-normal  text-neutral-300 max-w-lg text-center mx-auto px-4">
        From website design to social media management, We offer a wide range of
        services to help you grow your business.
      </p>
      <CardHoverEffectDemo />
    </div>
  );
};

export default Services;
