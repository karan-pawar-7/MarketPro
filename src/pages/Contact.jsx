
import ShinyText from "../components/ShinyText";
import SpotlightCard from "../components/SpotlightCard";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaLocationDot, FaPaperPlane } from "react-icons/fa6";
import React, { useState } from 'react';
import Navbar from "../components/Navbar";
import FadeContent from "../components/FadeContent";

import Footer from "../components/Footer";


export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submitted:', formData);
        alert('Thank you! Your message has been sent.');
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    return (
        <>
            <Navbar />
            <div className="min-h-screen mt-20 bg-[#0d0d0e] text-white flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
                <div className="text-center mb-5">
                    <p className="uppercase tracking-[4px] text-orange-500 text-sm font-semibold">
                        Contact Us
                    </p>

                    <h1 className="text-5xl md:text-6xl font-bold mt-4">
                        <ShinyText
                            text=" Let's Build"
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
                        <br />
                        <ShinyText
                            text="Something Amazing."
                            speed={2}
                            delay={0}
                            color="#FF5F15 "
                            shineColor="#FFFFFF"
                            spread={120}
                            direction="left"
                            yoyo={false}
                            pauseOnHover={false}
                            disabled={false}
                        />
                    </h1>

                    <p className="text-gray-400 mt-6 max-w-2xl mx-auto leading-8">
                        Ready to grow your business? Tell us about your project and
                        we'll get back to you within 24 hours.
                    </p>
                </div>
                <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>

                    <div className="w-full max-w-6xl bg-[#141416] rounded-2xl border  border-[#26262a] shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 mb-20">


                        {/* Left Side: Image Banner */}
                        <div className="relative min-h-[300px] lg:min-h-[600px] w-full">
                            {/* Apni generated image ka path yahan replace karein */}
                            <img
                                src="/marketpro-office.jpg"
                                alt="MarketPro Office"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-black/20"></div>

                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-6 sm:p-10">
                                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2 leading-tight">
                                    <ShinyText
                                        text=" Let's Build Something Great Together"
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
                                </h2>
                                <p className="text-zinc-400 text-sm sm:text-base">
                                    Connect with our expert marketing team today and elevate your brand.
                                </p>
                            </div>
                        </div>

                        {/* Right Side: Contact Form */}
                        <SpotlightCard
                            spotlightColor="rgba(249,115,22,0.18)"
                        >
                            <div className="p-6 sm:p-10 lg:p-12 flex flex-col justify-center">

                                {/* Header */}
                                <div className="mb-8">
                                    <span className="inline-block bg-orange-500/10 text-orange-500 border border-orange-500/20 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-3">
                                        Get In Touch
                                    </span>
                                    <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                                        Contact <span className="text-orange-500">MarketPro</span>
                                    </h1>
                                    <p className="text-zinc-400 text-sm mt-2">
                                        Have a project in mind or need expert marketing insights? Drop us a message!
                                    </p>
                                </div>

                                {/* Form */}
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div>
                                        <label htmlFor="name" className="block text-xs font-medium text-zinc-300 mb-1.5">
                                            Full Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            placeholder="Enter Your Name"
                                            className="w-full bg-[#1c1c20] border border-[#2e2e35] rounded-lg px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-xs font-medium text-zinc-300 mb-1.5">
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            placeholder="Enter Your Email"
                                            className="w-full bg-[#1c1c20] border border-[#2e2e35] rounded-lg px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="subject" className="block text-xs font-medium text-zinc-300 mb-1.5">
                                            Subject
                                        </label>
                                        <input
                                            type="text"
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                            placeholder="Enter Subject"
                                            className="w-full bg-[#1c1c20] border border-[#2e2e35] rounded-lg px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-xs font-medium text-zinc-300 mb-1.5">
                                            Your Message
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows="4"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            placeholder="Tell us about your project..."
                                            className="w-full bg-[#1c1c20] border border-[#2e2e35] rounded-lg px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all resize-none"
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3.5 px-6 rounded-lg transition-colors duration-200 shadow-lg shadow-orange-500/25 mt-2"
                                    >
                                        Send Message
                                    </button>
                                </form>

                                {/* Quick Details Section */}
                                <div className="mt-8 pt-6 border-t border-[#26262a] flex flex-wrap gap-6 text-sm text-zinc-400">
                                    <div className="flex items-center gap-2">
                                        <svg className="w-4 h-4 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 002-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                        <span>hello@marketpro.com</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <svg className="w-4 h-4 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                        <span>+1 (555) 019-2834</span>
                                    </div>
                                </div>

                            </div>
                        </SpotlightCard>

                    </div>
                </FadeContent>
                         <Footer />

            </div>
        </>
    );
}

