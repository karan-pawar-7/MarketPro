import Navbar from "../components/Navbar";
import ServiceCard from "../components/ServiceCard";
import services from "../data/services";

function Services() {
    return (
        <>
            <Navbar />

            <section className="bg-[#0B0B0B] min-h-screen pt-32 pb-20">

                <div className="max-w-7xl mx-auto px-6">

                    <div className="flex flex-col mb-5 items-center justify-center">

                        <div className="flex flex-col items-center justify-center">
                            <p className="text-orange-500 uppercase tracking-[4px] text-sm mb-3">
                                What We Do
                            </p>
                            <h1 className="text-6xl font-bold text-white">
                                Every Channel.
                            </h1>
                            <p className="text-orange-500 text-6xl font-bold">
                                One Team.
                            </p>
                        </div>
                        {/* <div>
                             <p className="text-gray-400 max-w-2xl leading-8 mb-16">
                            We provide end-to-end digital marketing services
                            designed to grow your business through strategy,
                            creativity, and measurable results.
                        </p>
                        </div> */}

                    </div>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">

                        {services.map((service) => (
                            <ServiceCard
                                key={service.id}
                                service={service}
                            />
                        ))}

                    </div>

                </div>

            </section>
        </>
    );
}

export default Services;