import Navbar from "../components/Navbar";
import ServiceCard from "../components/ServiceCard";
import services from "../data/services";
import SpotlightCard from "../components/SpotlightCard";
import ShinyText from "../components/ShinyText";
import FadeContent from "../components/FadeContent";


function Services() {
    return (
        <>
            <Navbar />

            <section className="bg-[#0B0B0B] min-h-screen pt-32 pb-20">

                <div className="max-w-7xl mx-auto px-6">

                    <div className="flex flex-col mb-15 items-center justify-center">

                        <div className="flex flex-col items-center justify-center">
                            <p className="text-orange-500 uppercase tracking-[4px] text-sm mb-3">
                                What We Do
                            </p>
                            <h1 className="text-6xl font-bold text-white">

                                <ShinyText
                                    text="Every Channel."
                                    speed={2}
                                    delay={0}
                                    color="#ffffff"
                                    shineColor="#FF5F15"
                                    spread={120}
                                    direction="left"
                                    yoyo={false}
                                    pauseOnHover={false}
                                    disabled={false}
                                />
                            </h1>
                            <p className="text-orange-500 text-6xl font-bold">
                                <ShinyText
                                    text=" One Team."
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
                            </p>
                        </div>
                        <div className="flex flex-col items-center ">
                            <p className="text-gray-400 max-w-2xl">
                                We provide end-to-end digital marketing services
                                designed to grow your business </p>
                            <p className="text-gray-400 max-w-2xl">
                                through strategy, creativity, and measurable results.
                            </p>
                        </div>

                    </div>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">

                        {services.map((service) => (
                            <FadeContent blur={true} duration={2000} easing="ease-out" initialOpacity={0}>

                                <SpotlightCard
                                    key={service.id}
                                    spotlightColor="rgba(249,115,22,0.18)"
                                >
                                    <ServiceCard service={service} />
                                </SpotlightCard>
                            </FadeContent>
                        ))}

                    </div>

                </div>

            </section>
        </>
    );
}

export default Services;

