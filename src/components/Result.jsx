import React from "react";
// import { FaArrowTrendUp } from "react-icons/fa6";
import results from "../data/results";

const Result = () => {
  return (
    <section className="bg-[#0B0B0B] py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-orange-500 uppercase tracking-[4px] text-sm">
            Results That Matter
          </p>

          <h2 className="mt-4 text-5xl md:text-6xl font-bold text-white">
            Proven Results.
            <br />
            <span className="text-orange-500">
              Measurable Growth.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-gray-400 leading-8">
            We don't just create campaigns—we deliver measurable
            business growth through data-driven marketing strategies.
          </p>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">

          {results.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#151515] p-8 transition-all duration-500 hover:-translate-y-2 hover:border-orange-500"
            >

              {/* Glow */}
              <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-orange-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition duration-500"></div>

              {/* Icon */}
              <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition duration-300">
                {/* <FaArrowTrendUp /> */}
              </div>

              {/* Number */}
              <h3 className="relative z-10 mt-8 text-5xl font-bold text-orange-500">
                {item.number}
              </h3>

              {/* Title */}
              <h4 className="relative z-10 mt-4 text-xl font-semibold text-white">
                {item.title}
              </h4>

              {/* Description */}
              <p className="relative z-10 mt-4 text-gray-400 leading-7">
                {item.desc}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Result;