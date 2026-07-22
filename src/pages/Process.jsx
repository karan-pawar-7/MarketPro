import Navbar from "../components/Navbar";
import ProcessCard from "../components/ProcessCard";
import process from "../data/process";

function Process() {
    return (
        <>
            <Navbar />

            <div className="min-h-screen bg-[#0B0B0B] pt-25 text-white ">

                <div className="flex flex-col gap-8 px-10 items-center justify-center">
                    <div className="flex flex-col items-center justify-center">
                        <button className="text-amber-500 mb-5">HOW WE WORK</button>
                        <h1 className="text-6xl font-bold">A Process</h1>
                        <h1 className="text-6xl font-bold text-amber-600">Built for Growth.</h1>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <p>No black-box agency mystery. You know what we are doing, why </p>
                        <p> we are doing it, and what the expected outcome is — at every stage.</p>
                    </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 my-10 px-20">
                    {process.map((item) => (
                        <ProcessCard
                            key={item.id}
                            item={item}
                        />
                    ))}
                </div>

                <div className="flex justify-between mx-20 mb-10  group relative bg-[#151311] border border-white/10 rounded-3xl p-8 overflow-hidden transition-all duration-500 hover:border-orange-500 hover:-translate-y-2">
                    <div className="">
                        <h1 className="text-[20px] ">Ready to accelerate your business growth?</h1>
                        <p className="text-gray-500">Most businesses start seeing measurable improvements
                            within the first 60–90 days of launch.</p>
                    </div>
                    <div>
                        <button className="rounded-4xl bg-amber-600 text-white p-3 hover:bg-amber-700 text-white">Let's Talk →</button>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Process;