import React from "react";
import Navbar from "../components/Navbar";
import ShinyText from "../components/ShinyText";
import FadeContent from "../components/FadeContent";
import AnimatedContent from "../components/AnimatedContent";
import stats from "../data/stats";
import CountUp from "../components/CountUp";

import { useNavigate } from "react-router-dom";
FadeContent

const logos = [
    { src: "/marketpro.png", alt: "MarketPro" },

];
const brands = [
    "Google",
    "Meta",
    "HubSpot",
    "Shopify",
    "Amazon",
    "Adobe",
];
const Home = () => {

    const navigate = useNavigate();
    return (
        <>
            <Navbar />

            <section
                className="relative min-h-fit bg-cover bg-center bg-no-repeat pt-30"
                style={{
                    backgroundImage: "url('/hero.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/35"></div>

                {/* Hero Content */}

                <div className="relative z-10 min-h-screen max-w-7xl mx-auto px-6 flex items-center">
                    <div className="max-w-2xl">
                        <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
                            <div className="flex gap-3 mb-8">
                                <span className="px-4 py-2 rounded-full border border-white/20 bg-white/10 text-white text-sm">
                                    ⭐ 4.9 (340+ Clients)
                                </span>

                                <span className="px-4 py-2 rounded-full border border-white/20 bg-white/10 text-white text-sm">
                                    Avg. 3.8x ROI Delivered
                                </span>
                            </div>
                        </FadeContent>

                        {/* Heading */}
                        <FadeContent blur={true} duration={2000} easing="ease-out" initialOpacity={0}>


                            <h1 className="text-6xl md:text-8xl font-bold leading-[0.95] tracking-tight text-white">

                                <ShinyText
                                    text="Marketing that "
                                    speed={2}
                                    delay={0}
                                    color="#ffffff "
                                    shineColor="#FF5F15"
                                    spread={120}
                                    direction="left"
                                    yoyo={false}
                                    pauseOnHover={false}
                                    disabled={false}
                                />
                                <ShinyText
                                    text="moves the"
                                    speed={2}
                                    delay={0}
                                    color="#FF5F15 "
                                    shineColor="#ffffff"
                                    spread={120}
                                    direction="left"
                                    yoyo={false}
                                    pauseOnHover={false}
                                    disabled={false}
                                />
                                <ShinyText
                                    text=" needle."
                                    speed={2}
                                    delay={0}
                                    color="#FF5F15 "
                                    shineColor="#ffffff"
                                    spread={120}
                                    direction="left"
                                    yoyo={false}
                                    pauseOnHover={false}
                                    disabled={false}
                                />
                            </h1>
                        </FadeContent>
                        <FadeContent blur={true} duration={2000} easing="ease-out" initialOpacity={0}>



                            {/* Description */}
                            <p className="mt-8 text-gray-300 text-lg leading-8 max-w-xl">
                                MarketPro builds and runs full-funnel campaigns —
                                from brand positioning to paid media to SEO —
                                so your business grows faster than your competitors
                                can react.
                            </p>
                        </FadeContent>

                        {/* Buttons */}
                        <FadeContent blur={true} duration={2000} easing="ease-out" initialOpacity={0}>

                            <div className="flex flex-wrap gap-4 mt-10 mb-5 ">

                                <button onClick={() => navigate("/process")} className="px-8 py-4 rounded-full bg-orange-500 hover:bg-orange-700 duration-300 text-white font-semibold shadow-lg shadow-orange-500/30">
                                    Request a Free Quote →
                                </button>

                                <button onClick={() => navigate("/services")} className="px-8 py-4 rounded-full border border-white/20 hover:border-orange-500 hover:text-orange-500 duration-300 text-white transition-all">
                                    Explore Services →
                                </button>

                            </div>
                            {/* Badge */}
                        </FadeContent>
                        <div className="flex">
                            {stats.map((item) => {
                                const Icon = item.icon;

                                return (
                                    <div
                                        key={item.id}
                                        className="flex items-center gap-5 p-8 border-r border-white/10 last:border-r-0"
                                    >
                                        <Icon
                                            size={48}
                                            className="text-orange-500"
                                            strokeWidth={2.2}
                                        />

                                        <div>
                                            <h2 className="text-4xl font-bold text-white">
                                                
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
                                            </h2>

                                            <p className="text-gray-400">
                                                {item.title}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                    </div>
                </div>

            </section >
        </>
    );
};

export default Home;