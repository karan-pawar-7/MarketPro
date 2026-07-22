import React from "react";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />

      <section
        className="relative min-h-screen bg-cover bg-center bg-no-repeat pt-20"
        style={{
          backgroundImage: "url('/hero.jpg')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/15"></div>

        {/* Hero Content */}
        <div className="relative z-10 h-[calc(100vh-80px)] max-w-7xl mx-auto px-6 flex items-center">
          <div className="max-w-2xl">

            {/* Badge */}
            <div className="flex gap-3 mb-8">
              <span className="px-4 py-2 rounded-full border border-white/20 bg-white/10 text-white text-sm">
                ⭐ 4.9 (340+ Clients)
              </span>

              <span className="px-4 py-2 rounded-full border border-white/20 bg-white/10 text-white text-sm">
                Avg. 3.8x ROI Delivered
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-6xl md:text-8xl font-bold leading-[0.95] tracking-tight text-white">
              Marketing that
              <br />
              <span className="text-orange-300">
                moves the
              </span>
              <br />
              <span className="text-orange-500">
                needle.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-8 text-gray-300 text-lg leading-8 max-w-xl">
              MarketPro builds and runs full-funnel campaigns —
              from brand positioning to paid media to SEO —
              so your business grows faster than your competitors
              can react.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-10">

              <button className="px-8 py-4 rounded-full bg-orange-500 hover:bg-orange-700 duration-300 text-white font-semibold shadow-lg shadow-orange-500/30">
                Request a Free Quote →
              </button>

              <button className="px-8 py-4 rounded-full border border-white/20 hover:border-orange-500 hover:text-orange-500 duration-300 text-white">
                Explore Services →
              </button>

            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Home;