import React from "react";
import results from "../data/results";
import CountUp from "../components/CountUp";

const ResultCard= () => {
    return (

        // {/* Cards */ }

                results.map((item) => (
                    <div
                        key={item.id}
                        className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#151515] p-8 transition-all duration-500 hover:-translate-y-2 hover:border-orange-500"
                    >

                        {/* Glow */}
                        <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-orange-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition duration-500"></div>

                        {/* Icon */}
                        <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition duration-300">
                            {item.icon}
                        </div>

                        {/* Number */}
                        <h3 className="relative z-10 mt-8 text-5xl font-bold text-orange-500">
                            <CountUp
                                from={0}
                                to={item.number}
                                separator=","
                                direction="up"
                                duration={1}
                                className="count-up-text"
                                delay={0}
                            />
                            {item.suffix}
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
                ))

    );
};

export default ResultCard;