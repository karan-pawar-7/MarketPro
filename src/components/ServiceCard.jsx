import React from "react";
// import { FaArrowRight } from "react-icons/fa6";

const ServiceCard = ({ service }) => {
  const Icon = service.icon;

  return (
    <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#151515] p-8 transition-all duration-500 hover:-translate-y-2 hover:border-orange-500">

      {/* Background Glow */}
      <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-orange-500/10 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100"></div>

      {/* Top */}
      <div className="relative z-10 flex items-center justify-between mb-8">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500/10 text-2xl text-orange-500 transition duration-300 group-hover:bg-orange-500 group-hover:text-white">
          <Icon />
        </div>

        <span className="text-5xl font-bold text-white/10 transition duration-300 group-hover:text-white/20">
          {service.id}
        </span>
      </div>

      {/* Title */}
      <h2 className="relative z-10 text-2xl font-bold text-white mb-4">
        {service.title}
      </h2>

      {/* Description */}
      <p className="relative z-10 text-gray-400 leading-7 mb-8">
        {service.desc}
      </p>

      {/* Bottom */}
      <div className="relative z-10 flex items-center justify-between border-t border-white/10 pt-5">

        <div>
          <h3 className="text-3xl font-bold text-orange-500">
            {service.stat}
          </h3>

          <p className="text-sm text-gray-500 mt-1">
            {service.text}
          </p>
        </div>

        <button className="flex h-12 w-12 items-center justify-center rounded-full border border-orange-500 text-orange-500 transition duration-300 group-hover:bg-orange-500 group-hover:text-white">
          {/* <FaArrowRight /> */}
        </button>

      </div>
    </div>
  );
};

export default ServiceCard;