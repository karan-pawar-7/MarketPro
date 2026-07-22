import React from "react";
// import { FaArrowRight } from "react-icons/fa6";

const ProcessCard = ({ item }) => {
  const Icon = item.icon;

  return (
    <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#151515] p-8 transition-all duration-500 hover:-translate-y-2 hover:border-orange-500">

      {/* Background Glow */}
      <div className="absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-orange-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition duration-500"></div>

      {/* Step Number */}
      <span className="absolute top-6 right-6 text-6xl font-bold text-white/10 group-hover:text-white/20 transition duration-500">
        {item.id}
      </span>

      {/* Icon */}
      <div className="relative z-10 w-16 h-16 rounded-2xl bg-orange-500/10 flex items-center justify-center text-3xl text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition duration-300">
        <Icon />
      </div>

      {/* Title */}
      <h2 className="relative z-10 mt-8 text-2xl font-bold text-white">
        {item.title}
      </h2>

      {/* Description */}
      <p className="relative z-10 mt-4 text-gray-400 leading-7">
        {item.desc}
      </p>

      {/* Footer */}
      <div className="relative z-10 mt-8 flex items-center justify-between border-t border-white/10 pt-5">

        <span className="rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-sm text-orange-500">
          {item.tag}
        </span>

        <button className="flex h-12 w-12 items-center justify-center rounded-full border border-orange-500 text-orange-500 transition duration-300 group-hover:bg-orange-500 group-hover:text-white">
          {/* <FaArrowRight /> */}
        </button>

      </div>
    </div>
  );
};

export default ProcessCard;