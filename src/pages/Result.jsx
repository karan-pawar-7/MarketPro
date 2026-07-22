import { FaArrowTrendUp } from "react-icons/fa6";
import results from "../data/results";
import testimonials from "../data/testimonials";
import Navbar from "../components/Navbar";
function Result() {

    return (

        <>
            <Navbar />
            <section className="bg-[#0B0B0B] py-28">
                <div className="max-w-7xl mx-auto px-6">

                    {/* Heading */}
                    <div className="text-center mb-16">
                        <p className="text-orange-500 uppercase tracking-[4px] text-sm">
                            Results That Matter
                        </p>

                        <h2 className="text-5xl md:text-6xl font-bold text-white mt-4">
                            Proven Growth.
                            <br />
                            <span className="text-orange-500">Real Business Impact.</span>
                        </h2>

                        <p className="text-gray-400 max-w-2xl mx-auto mt-6 leading-8">
                            Every campaign is backed by data, creativity, and measurable
                            performance to help businesses grow faster.
                        </p>
                    </div>

                    {/* Cards */}

                    <div className="flex flex-col gap-15">


                        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">

                            {results.map((item, index) => (
                                <div
                                    key={index}
                                    className="group bg-[#151515] border border-white/10 rounded-3xl p-8 hover:border-orange-500 transition-all duration-500 hover:-translate-y-2"
                                >
                                    <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500 mb-8 group-hover:bg-orange-500 group-hover:text-white duration-300">
                                        <FaArrowTrendUp />
                                    </div>

                                    <h3 className="text-5xl font-bold text-orange-500">
                                        {item.number}
                                    </h3>

                                    <h4 className="text-xl text-white font-semibold mt-5">
                                        {item.title}
                                    </h4>

                                    <p className="text-gray-400 leading-7 mt-4">
                                        {item.desc}
                                    </p>
                                </div>
                            ))}


                        </div>

                        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
                            {testimonials.map((item, index) => (
                                <div
                                    key={index}
                                    className="group bg-[#151515] border border-white/10 rounded-3xl p-8 hover:border-orange-500 transition-all duration-500 hover:-translate-y-2"
                                >

                                    <h3 className="text-[13px] font-bold text-orange-300">
                                        {item.star}
                                    </h3>

                                    <h4 className="text-sm text-white mt-5 ">
                                       "{item.review}"
                                    </h4>
                                    <div className="border-t mt-5 border-gray-100 ">
                                        <div>

                                        </div>
                                        <div className="leading-0.1">
                                            <p className="text-white leading-7 mt-4 ">
                                                    {item.name} <br />
                                               <span className="text-gray-500"> {item.role}, {item.company}</span> 
                                            </p>
                                           
                                        </div>
                                    </div>

                                </div>
                            ))}


                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Result;