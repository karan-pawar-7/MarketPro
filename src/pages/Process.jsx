// import Navbar from "../components/Navbar";
// import ProcessCard from "../components/ProcessCard";
// import process from "../data/process";
// import ShinyText from "../components/ShinyText";
// import SpotlightCard from "../components/SpotlightCard";
// import FadeContent from "../components/FadeContent";


// function Process() {
//     return (
//         <>
//             <Navbar />

//             <div className="min-h-screen bg-[#0B0B0B] pt-25 text-white ">

//                 <div className="flex flex-col gap-8 px-10 items-center justify-center">
//                     <div className="flex flex-col items-center justify-center">
//                         <button className="text-amber-600 mb-5">HOW WE WORK</button>
//                         <h1 className="text-6xl font-bold">
//                             <ShinyText
//                                 text="A Process"
//                                 speed={2}
//                                 delay={0}
//                                 color="#ffffff "
//                                 shineColor="#FF5F15"
//                                 spread={120}
//                                 direction="left"
//                                 yoyo={false}
//                                 pauseOnHover={false}
//                                 disabled={false}
//                             />
//                         </h1>
//                         <h1 className="text-6xl font-bold text-amber-600">
//                             <ShinyText
//                                 text="Built for Growth."
//                                 speed={2}
//                                 delay={0}
//                                 color="#FF5F15 "
//                                 shineColor="#ffffff"
//                                 spread={120}
//                                 direction="left"
//                                 yoyo={false}
//                                 pauseOnHover={false}
//                                 disabled={false}
//                             />
//                         </h1>
//                     </div>
//                     <div className="flex flex-col items-center justify-center">
//                         <p>No black-box agency mystery. You know what we are doing, why </p>
//                         <p> we are doing it, and what the expected outcome is — at every stage.</p>
//                     </div>
//                 </div>

//                 <div className="grid lg:grid-cols-2 gap-8 my-10 px-20">
//                     {process.map((item) => (
//                         <FadeContent blur={true} duration={2000} easing="ease-out" initialOpacity={0}>

//                             <SpotlightCard
//                                 key={item.id}
//                                 spotlightColor="rgba(249,115,22,0.15)"
//                                 className="p-0 rounded-3xl h-full"
//                             >
//                                 <ProcessCard item={item} />
//                             </SpotlightCard>
//                         </FadeContent>

//                     ))}
//                 </div>
//                 <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>

//                     <div className="flex justify-between mx-20 mb-10  group relative bg-[#151311] border border-white/10 rounded-3xl p-8 overflow-hidden transition-all duration-500 hover:border-orange-500 hover:-translate-y-2">

//                         <div className="">
//                             <h1 className="text-[20px] ">Ready to accelerate your business growth?</h1>
//                             <p className="text-gray-500">Most businesses start seeing measurable improvements
//                                 within the first 60–90 days of launch.</p>
//                         </div>
//                         <div>
//                             <button className="rounded-4xl bg-amber-600 text-white p-3 hover:bg-amber-700 text-white">Let's Talk →</button>
//                         </div>
//                     </div>
//                 </FadeContent >

//             </div>
//         </>
//     );
// }

// export default Process;



import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import ProcessCard from "../components/ProcessCard";
import process from "../data/process";
import ShinyText from "../components/ShinyText";
import SpotlightCard from "../components/SpotlightCard";
import FadeContent from "../components/FadeContent";
import { ThemeContext } from "../context/ThemeContext";

function Process() {
    const { darkMode } = useContext(ThemeContext);

    return (
        <>
            <Navbar />

            <div
                className={`min-h-screen pt-25 transition-all duration-500 ${darkMode
                        ? "bg-[#0B0B0B] text-white"
                        : "bg-gray-100 text-gray-900"
                    }`}
            >
                {/* Heading */}

                <div className="flex flex-col gap-8 px-10 items-center justify-center">

                    <div className="flex flex-col items-center justify-center">

                        <button className="text-orange-500 mb-5 tracking-[3px]">
                            HOW WE WORK
                        </button>

                        <h1
                            className={`text-6xl font-bold ${darkMode ? "text-white" : "text-gray-900"
                                }`}
                        >
                            <ShinyText
                                text="A Process"
                                speed={2}
                                color={darkMode ? "#ffffff" : "#111827"}
                                shineColor="#FF5F15"
                                spread={120}
                                direction="left"
                            />
                        </h1>

                        <h1 className="text-6xl font-bold text-orange-500">
                            <ShinyText
                                text="Built for Growth."
                                speed={2}
                                color="#FF5F15"
                                shineColor={darkMode ? "#ffffff" : "#111827"}
                                spread={120}
                                direction="left"
                            />
                        </h1>

                    </div>

                    <div
                        className={`flex flex-col items-center justify-center ${darkMode
                                ? "text-gray-400"
                                : "text-gray-600"
                            }`}
                    >
                        <p>
                            No black-box agency mystery. You know what we are
                            doing, why
                        </p>

                        <p>
                            we are doing it, and what the expected outcome is —
                            at every stage.
                        </p>

                    </div>

                </div>

                {/* Cards */}

                <div className="grid lg:grid-cols-2 gap-8 my-10 px-20">

                    {process.map((item) => (

                        <FadeContent
                            key={item.id}
                            blur
                            duration={2000}
                            easing="ease-out"
                            initialOpacity={0}
                        >

                            <SpotlightCard
                                spotlightColor={
                                    darkMode
                                        ? "rgba(249,115,22,0.15)"
                                        : "rgba(249,115,22,0.08)"
                                }
                                className="p-0 rounded-3xl h-full"
                            >
                                <ProcessCard
                                    item={item}
                                    darkMode={darkMode}
                                />
                            </SpotlightCard>

                        </FadeContent>

                    ))}

                </div>
                {/* Bottom CTA */}

                <FadeContent
                    blur={true}
                    duration={1000}
                    easing="ease-out"
                    initialOpacity={0}
                >
                    <div
                        className={`flex flex-col lg:flex-row items-center justify-between mx-20 mb-10 rounded-3xl p-8 border transition-all duration-500 hover:border-orange-500 hover:-translate-y-2 ${darkMode
                                ? "bg-[#151311] border-white/10"
                                : "bg-white border-gray-200 shadow-xl"
                            }`}
                    >
                        <div>

                            <h1
                                className={`text-[20px] font-semibold ${darkMode
                                        ? "text-white"
                                        : "text-gray-900"
                                    }`}
                            >
                                Ready to accelerate your business growth?
                            </h1>

                            <p
                                className={`mt-2 ${darkMode
                                        ? "text-gray-400"
                                        : "text-gray-600"
                                    }`}
                            >
                                Most businesses start seeing measurable
                                improvements within the first 60–90 days of
                                launch.
                            </p>

                        </div>

                        <div className="mt-6 lg:mt-0">

                            <button className="rounded-full bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 transition-all duration-300">
                                Let's Talk →
                            </button>

                        </div>

                    </div>
                </FadeContent>

            </div>
        </>
    );
}

export default Process;