
// import ShinyText from "../components/ShinyText";
// import SpotlightCard from "../components/SpotlightCard";
// import { IoCall } from "react-icons/io5";
// import { MdEmail } from "react-icons/md";
// import { FaLocationDot, FaPaperPlane } from "react-icons/fa6";
// import React, { useState } from 'react';
// import Navbar from "../components/Navbar";
// import FadeContent from "../components/FadeContent";



// export default function Contact() {
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         subject: '',
//         message: '',
//     });

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log('Form Submitted:', formData);
//         alert('Thank you! Your message has been sent.');
//         setFormData({ name: '', email: '', subject: '', message: '' });
//     };

//     return (
//         <>
//             <Navbar />
//             <div className="min-h-screen mt-20 bg-[#0d0d0e] text-white flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
//                 <div className="text-center mb-5">
//                     <p className="uppercase tracking-[4px] text-orange-500 text-sm font-semibold">
//                         Contact Us
//                     </p>

//                     <h1 className="text-5xl md:text-6xl font-bold mt-4">
//                         <ShinyText
//                             text=" Let's Build"
//                             speed={2}
//                             delay={0}
//                             color="#ffffff "
//                             shineColor="#FF5F15"
//                             spread={120}
//                             direction="left"
//                             yoyo={false}
//                             pauseOnHover={false}
//                             disabled={false}
//                         />
//                         <br />
//                         <ShinyText
//                             text="Something Amazing."
//                             speed={2}
//                             delay={0}
//                             color="#FF5F15 "
//                             shineColor="#FFFFFF"
//                             spread={120}
//                             direction="left"
//                             yoyo={false}
//                             pauseOnHover={false}
//                             disabled={false}
//                         />
//                     </h1>

//                     <p className="text-gray-400 mt-6 max-w-2xl mx-auto leading-8">
//                         Ready to grow your business? Tell us about your project and
//                         we'll get back to you within 24 hours.
//                     </p>
//                 </div>
//                 <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>

//                     <div className="w-full max-w-6xl bg-[#141416] rounded-2xl border  border-[#26262a] shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">


//                         {/* Left Side: Image Banner */}
//                         <div className="relative min-h-[300px] lg:min-h-[600px] w-full">
//                             {/* Apni generated image ka path yahan replace karein */}
//                             <img
//                                 src="/marketpro-office.jpg"
//                                 alt="MarketPro Office"
//                                 className="absolute inset-0 w-full h-full object-cover"
//                             />
//                             {/* Gradient Overlay */}
//                             <div className="absolute inset-0 bg-black/20"></div>

//                             <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-6 sm:p-10">
//                                 <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2 leading-tight">
//                                     <ShinyText
//                                         text=" Let's Build Something Great Together"
//                                         speed={2}
//                                         delay={0}
//                                         color="#ffffff "
//                                         shineColor="#FF5F15"
//                                         spread={120}
//                                         direction="left"
//                                         yoyo={false}
//                                         pauseOnHover={false}
//                                         disabled={false}
//                                     />
//                                 </h2>
//                                 <p className="text-zinc-400 text-sm sm:text-base">
//                                     Connect with our expert marketing team today and elevate your brand.
//                                 </p>
//                             </div>
//                         </div>

//                         {/* Right Side: Contact Form */}
//                         <SpotlightCard
//                             spotlightColor="rgba(249,115,22,0.18)"
//                         >
//                             <div className="p-6 sm:p-10 lg:p-12 flex flex-col justify-center">

//                                 {/* Header */}
//                                 <div className="mb-8">
//                                     <span className="inline-block bg-orange-500/10 text-orange-500 border border-orange-500/20 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-3">
//                                         Get In Touch
//                                     </span>
//                                     <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
//                                         Contact <span className="text-orange-500">MarketPro</span>
//                                     </h1>
//                                     <p className="text-zinc-400 text-sm mt-2">
//                                         Have a project in mind or need expert marketing insights? Drop us a message!
//                                     </p>
//                                 </div>

//                                 {/* Form */}
//                                 <form onSubmit={handleSubmit} className="space-y-4">
//                                     <div>
//                                         <label htmlFor="name" className="block text-xs font-medium text-zinc-300 mb-1.5">
//                                             Full Name
//                                         </label>
//                                         <input
//                                             type="text"
//                                             id="name"
//                                             name="name"
//                                             value={formData.name}
//                                             onChange={handleChange}
//                                             required
//                                             placeholder="Enter Your Name"
//                                             className="w-full bg-[#1c1c20] border border-[#2e2e35] rounded-lg px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all"
//                                         />
//                                     </div>

//                                     <div>
//                                         <label htmlFor="email" className="block text-xs font-medium text-zinc-300 mb-1.5">
//                                             Email Address
//                                         </label>
//                                         <input
//                                             type="email"
//                                             id="email"
//                                             name="email"
//                                             value={formData.email}
//                                             onChange={handleChange}
//                                             required
//                                             placeholder="Enter Your Email"
//                                             className="w-full bg-[#1c1c20] border border-[#2e2e35] rounded-lg px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all"
//                                         />
//                                     </div>

//                                     <div>
//                                         <label htmlFor="subject" className="block text-xs font-medium text-zinc-300 mb-1.5">
//                                             Subject
//                                         </label>
//                                         <input
//                                             type="text"
//                                             id="subject"
//                                             name="subject"
//                                             value={formData.subject}
//                                             onChange={handleChange}
//                                             required
//                                             placeholder="Enter Subject"
//                                             className="w-full bg-[#1c1c20] border border-[#2e2e35] rounded-lg px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all"
//                                         />
//                                     </div>

//                                     <div>
//                                         <label htmlFor="message" className="block text-xs font-medium text-zinc-300 mb-1.5">
//                                             Your Message
//                                         </label>
//                                         <textarea
//                                             id="message"
//                                             name="message"
//                                             rows="4"
//                                             value={formData.message}
//                                             onChange={handleChange}
//                                             required
//                                             placeholder="Tell us about your project..."
//                                             className="w-full bg-[#1c1c20] border border-[#2e2e35] rounded-lg px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all resize-none"
//                                         ></textarea>
//                                     </div>

//                                     <button
//                                         type="submit"
//                                         className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3.5 px-6 rounded-lg transition-colors duration-200 shadow-lg shadow-orange-500/25 mt-2"
//                                     >
//                                         Send Message
//                                     </button>
//                                 </form>

//                                 {/* Quick Details Section */}
//                                 <div className="mt-8 pt-6 border-t border-[#26262a] flex flex-wrap gap-6 text-sm text-zinc-400">
//                                     <div className="flex items-center gap-2">
//                                         <svg className="w-4 h-4 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 002-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//                                         </svg>
//                                         <span>hello@marketpro.com</span>
//                                     </div>
//                                     <div className="flex items-center gap-2">
//                                         <svg className="w-4 h-4 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
//                                         </svg>
//                                         <span>+1 (555) 019-2834</span>
//                                     </div>
//                                 </div>

//                             </div>
//                         </SpotlightCard>

//                     </div>
//                 </FadeContent>
//             </div>
//         </>
//     );
// }


// import React, { useState, useContext } from "react";
// import Navbar from "../components/Navbar";
// import ShinyText from "../components/ShinyText";
// import SpotlightCard from "../components/SpotlightCard";
// import FadeContent from "../components/FadeContent";
// import { ThemeContext } from "../context/ThemeContext";

// export default function Contact() {
//     const { darkMode } = useContext(ThemeContext);

//     const [formData, setFormData] = useState({
//         name: "",
//         email: "",
//         subject: "",
//         message: "",
//     });

//     const handleChange = (e) => {
//         setFormData({
//             ...formData,
//             [e.target.name]: e.target.value,
//         });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         alert("Thank you! Your message has been sent.");
//         console.log(formData);

//         setFormData({
//             name: "",
//             email: "",
//             subject: "",
//             message: "",
//         });
//     };

//     return (
//         <>
//             <Navbar />

//             <div
//                 className={`min-h-screen mt-20 flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8 transition-all duration-500 ${darkMode
//                     ? "bg-[#0d0d0e] text-white"
//                     : "bg-gray-100 text-gray-900"
//                     }`}
//             >
//                 {/* Heading */}

//                 <div className="text-center mb-5">

//                     <p className="uppercase tracking-[4px] text-orange-500 text-sm font-semibold">
//                         Contact Us
//                     </p>

//                     <h1
//                         className={`text-5xl md:text-6xl font-bold mt-4 ${darkMode
//                             ? "text-white"
//                             : "text-gray-900"
//                             }`}
//                     >
//                         <ShinyText
//                             text="Let's Build"
//                             speed={2}
//                             color={darkMode ? "#ffffff" : "#111827"}
//                             shineColor="#FF5F15"
//                             spread={120}
//                             direction="left"
//                         />

//                         <br />

//                         <ShinyText
//                             text="Something Amazing."
//                             speed={2}
//                             color="#FF5F15"
//                             shineColor={
//                                 darkMode ? "#ffffff" : "#111827"
//                             }
//                             spread={120}
//                             direction="left"
//                         />
//                     </h1>

//                     <p
//                         className={`mt-6 max-w-2xl mx-auto leading-8 ${darkMode
//                             ? "text-gray-400"
//                             : "text-gray-600"
//                             }`}
//                     >
//                         Ready to grow your business? Tell us about your project
//                         and we'll get back to you within 24 hours.
//                     </p>

//                 </div>

//                 <FadeContent
//                     blur
//                     duration={1000}
//                     easing="ease-out"
//                     initialOpacity={0}
//                 >
//                     <div
//                         className={`w-full max-w-6xl rounded-2xl border overflow-hidden grid grid-cols-1 lg:grid-cols-2 transition-all duration-500 ${darkMode
//                             ? "bg-[#141416] border-[#26262a]"
//                             : "bg-white border-gray-200 shadow-xl"
//                             }`}
//                     >
//                         {/* Left Image */}

//                         <div className="relative min-h-[300px] lg:min-h-[600px] w-full">

//                             <img
//                                 src="/marketpro-office.jpg"
//                                 alt="MarketPro Office"
//                                 className="absolute inset-0 w-full h-full object-cover"
//                             />

//                             <div className="absolute inset-0 bg-black/20"></div>

//                             <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-6 sm:p-10">

//                                 <h2 className="text-3xl font-bold text-white mb-2">

//                                     <ShinyText
//                                         text="Let's Build Something Great Together"
//                                         speed={2}
//                                         color="#ffffff"
//                                         shineColor="#FF5F15"
//                                         spread={120}
//                                         direction="left"
//                                     />

//                                 </h2>

//                                 <p className="text-zinc-300">
//                                     Connect with our expert marketing team today
//                                     and elevate your brand.
//                                 </p>

//                             </div>

//                         </div>

//                         {/* Right Side */}

//                         <SpotlightCard
//                             spotlightColor={
//                                 darkMode
//                                     ? "rgba(249,115,22,0.18)"
//                                     : "rgba(249,115,22,0.10)"
//                             }
//                         >
//                             <div className="p-6 sm:p-10 lg:p-12">

//                                 <span className="inline-block bg-orange-500/10 text-orange-500 border border-orange-500/20 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-3">
//                                     Get In Touch
//                                 </span>

//                                 <h1
//                                     className={`text-4xl font-extrabold ${darkMode
//                                         ? "text-white"
//                                         : "text-gray-900"
//                                         }`}
//                                 >
//                                     Contact
//                                     <span className="text-orange-500">
//                                         {" "}
//                                         MarketPro
//                                     </span>
//                                 </h1>

//                                 <p
//                                     className={`text-sm mt-2 ${darkMode
//                                         ? "text-zinc-400"
//                                         : "text-gray-600"
//                                         }`}
//                                 >
//                                     Have a project in mind? Drop us a message.
//                                 </p>

//                                 <form
//                                     onSubmit={handleSubmit}
//                                     className="space-y-4 mt-8"
//                                 >
//                                     {/* Name */}
//                                     <div>
//                                         <label
//                                             className={`block text-xs font-medium mb-2 ${darkMode
//                                                 ? "text-zinc-300"
//                                                 : "text-gray-700"
//                                                 }`}
//                                         >
//                                             Full Name
//                                         </label>

//                                         <input
//                                             type="text"
//                                             name="name"
//                                             value={formData.name}
//                                             onChange={handleChange}
//                                             placeholder="Enter Your Name"
//                                             required
//                                             className={`w-full rounded-lg px-4 py-3 text-sm transition-all focus:outline-none focus:ring-2 focus:ring-orange-500 ${darkMode
//                                                 ? "bg-[#1c1c20] border border-[#2e2e35] text-white placeholder-zinc-500"
//                                                 : "bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-400"
//                                                 }`}
//                                         />
//                                     </div>

//                                     {/* Email */}
//                                     <div>
//                                         <label
//                                             className={`block text-xs font-medium mb-2 ${darkMode
//                                                 ? "text-zinc-300"
//                                                 : "text-gray-700"
//                                                 }`}
//                                         >
//                                             Email Address
//                                         </label>

//                                         <input
//                                             type="email"
//                                             name="email"
//                                             value={formData.email}
//                                             onChange={handleChange}
//                                             placeholder="Enter Your Email"
//                                             required
//                                             className={`w-full rounded-lg px-4 py-3 text-sm transition-all focus:outline-none focus:ring-2 focus:ring-orange-500 ${darkMode
//                                                 ? "bg-[#1c1c20] border border-[#2e2e35] text-white placeholder-zinc-500"
//                                                 : "bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-400"
//                                                 }`}
//                                         />
//                                     </div>

//                                     {/* Subject */}
//                                     <div>
//                                         <label
//                                             className={`block text-xs font-medium mb-2 ${darkMode
//                                                 ? "text-zinc-300"
//                                                 : "text-gray-700"
//                                                 }`}
//                                         >
//                                             Subject
//                                         </label>

//                                         <input
//                                             type="text"
//                                             name="subject"
//                                             value={formData.subject}
//                                             onChange={handleChange}
//                                             placeholder="Enter Subject"
//                                             required
//                                             className={`w-full rounded-lg px-4 py-3 text-sm transition-all focus:outline-none focus:ring-2 focus:ring-orange-500 ${darkMode
//                                                 ? "bg-[#1c1c20] border border-[#2e2e35] text-white placeholder-zinc-500"
//                                                 : "bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-400"
//                                                 }`}
//                                         />
//                                     </div>

//                                     {/* Message */}
//                                     <div>
//                                         <label
//                                             className={`block text-xs font-medium mb-2 ${darkMode
//                                                 ? "text-zinc-300"
//                                                 : "text-gray-700"
//                                                 }`}
//                                         >
//                                             Your Message
//                                         </label>

//                                         <textarea
//                                             name="message"
//                                             rows="5"
//                                             value={formData.message}
//                                             onChange={handleChange}
//                                             placeholder="Tell us about your project..."
//                                             required
//                                             className={`w-full rounded-lg px-4 py-3 text-sm resize-none transition-all focus:outline-none focus:ring-2 focus:ring-orange-500 ${darkMode
//                                                 ? "bg-[#1c1c20] border border-[#2e2e35] text-white placeholder-zinc-500"
//                                                 : "bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-400"
//                                                 }`}
//                                         />

//                                     </div>

//                                     <button
//                                         type="submit"
//                                         className="w-full mt-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3.5 rounded-lg transition duration-300 shadow-lg shadow-orange-500/20"
//                                     >
//                                         Send Message →
//                                     </button>

//                                 </form>

//                                 {/* Contact Info */}

//                                 <div
//                                     className={`mt-8 pt-6 border-t flex flex-wrap gap-6 text-sm ${darkMode
//                                         ? "border-[#26262a] text-zinc-400"
//                                         : "border-gray-200 text-gray-600"
//                                         }`}
//                                 >
//                                     <div className="flex items-center gap-2">
//                                         {/* <MdEmail className="text-orange-500" /> */}
//                                         <span>hello@marketpro.com</span>
//                                     </div>

//                                     <div className="flex items-center gap-2">
//                                         {/* <IoCall className="text-orange-500" /> */}
//                                         <span>+1 (555) 019-2834</span>
//                                     </div>

//                                     <div className="flex items-center gap-2">
//                                         {/* <FaLocationDot className="text-orange-500" /> */}
//                                         <span>New York, USA</span>
//                                     </div>
//                                 </div>

//                             </div>
//                         </SpotlightCard>

//                     </div>
//                 </FadeContent>

//             </div>
//         </>
//     );
// }


// import React, { useState, useContext } from "react";
// import Navbar from "../components/Navbar";
// import ShinyText from "../components/ShinyText";
// import SpotlightCard from "../components/SpotlightCard";
// import FadeContent from "../components/FadeContent";
// import { ThemeContext } from "../context/ThemeContext";
// import { FiMail, FiPhone, FiMapPin, FiSend } from "react-icons/fi";

// export default function Contact() {
//     const { darkMode } = useContext(ThemeContext);

//     const [formData, setFormData] = useState({
//         name: "",
//         email: "",
//         subject: "",
//         message: "",
//     });

//     const [isSubmitting, setIsSubmitting] = useState(false);

//     const handleChange = (e) => {
//         setFormData({
//             ...formData,
//             [e.target.name]: e.target.value,
//         });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         setIsSubmitting(true);

//         // Simulate API Call
//         setTimeout(() => {
//             alert("Thank you! Your message has been sent successfully.");
//             console.log(formData);
//             setFormData({
//                 name: "",
//                 email: "",
//                 subject: "",
//                 message: "",
//             });
//             setIsSubmitting(false);
//         }, 1000);
//     };

//     return (
//         <>
//             <Navbar />

//             <div
//                 className={`min-h-screen pt-24 pb-16 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 transition-colors duration-500 ${darkMode ? "bg-[#0B0C0E] text-white" : "bg-gray-50 text-gray-900"
//                     }`}
//             >
//                 {/* Header Section */}
//                 <div className="text-center max-w-3xl mx-auto mb-12">
//                     <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-widest text-orange-500 bg-orange-500/10 rounded-full border border-orange-500/20 mb-4">
//                         Contact Us
//                     </span>

//                     <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
//                         <ShinyText
//                             text="Let's Build"
//                             speed={2}
//                             color={darkMode ? "#FFFFFF" : "#111827"}
//                             shineColor="#FF5F15"
//                             spread={120}
//                             direction="left"
//                         />
//                         <br />
//                         <ShinyText
//                             text="Something Amazing."
//                             speed={2}
//                             color="#FF5F15"
//                             shineColor={darkMode ? "#FFFFFF" : "#111827"}
//                             spread={120}
//                             direction="left"
//                         />
//                     </h1>

//                     <p
//                         className={`mt-4 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed ${darkMode ? "text-zinc-400" : "text-gray-600"
//                             }`}
//                     >
//                         Have a project in mind or want to scale your business? Drop us a
//                         message and our team will get back to you within 24 hours.
//                     </p>
//                 </div>

//                 {/* Main Card Container */}
//                 <FadeContent
//                     blur
//                     duration={800}
//                     easing="ease-out"
//                     initialOpacity={0}
//                 >
//                     <div
//                         className={`w-full max-w-6xl rounded-3xl gap-4 border overflow-hidden grid grid-cols-1 lg:grid-cols-12 shadow-2xl transition-all duration-500 ${darkMode
//                                 ? "bg-[#121316] border-[#222327] shadow-black/50"
//                                 : "bg-white border-gray-100 shadow-gray-200/80"
//                             }`}
//                     >
//                         {/* Left Side: Visual Banner */}
//                         <div className="lg:col-span-5 relative min-h-[350px] lg:min-h-full w-full overflow-hidden flex flex-col justify-end p-8 sm:p-10">
//                             <img
//                                 src="/marketpro-office.jpg"
//                                 alt="MarketPro Office"
//                                 className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
//                             />
//                             {/* Gradient Overlay */}
//                             <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />

//                             <div className="relative z-10 space-y-3">
//                                 <h2 className="text-2xl sm:text-3xl font-bold text-white leading-snug">
//                                     <ShinyText
//                                         text="Ready to elevate your brand?"
//                                         speed={2}
//                                         color="#ffffff"
//                                         shineColor="#FF5F15"
//                                         spread={120}
//                                         direction="left"
//                                     />
//                                 </h2>
//                                 <p className="text-sm text-zinc-300 leading-relaxed">
//                                     Our marketing experts are here to turn your vision into a high-performing reality.
//                                 </p>
//                             </div>
//                         </div>

//                         {/* Right Side: Interactive Form */}
//                         <div className="lg:col-span-7">
//                             <SpotlightCard
//                                 spotlightColor={
//                                     darkMode
//                                         ? "rgba(249, 115, 22, 0.15)"
//                                         : "rgba(249, 115, 22, 0.08)"
//                                 }
//                             >
//                                 <div className="p-6 sm:p-10 lg:p-12">
//                                     <div className="mb-8">
//                                         <h3 className="text-2xl font-bold tracking-tight">
//                                             Send us a Message
//                                         </h3>
//                                         <p
//                                             className={`text-sm mt-1 ${darkMode ? "text-zinc-400" : "text-gray-500"
//                                                 }`}
//                                         >
//                                             Fill in the details below to get started.
//                                         </p>
//                                     </div>

//                                     <form onSubmit={handleSubmit} className="space-y-5">
//                                         {/* Name & Email Row */}
//                                         <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
//                                             <div>
//                                                 <label
//                                                     className={`block text-xs font-semibold uppercase tracking-wider mb-2 ${darkMode ? "text-zinc-300" : "text-gray-700"
//                                                         }`}
//                                                 >
//                                                     Full Name *
//                                                 </label>
//                                                 <input
//                                                     type="text"
//                                                     name="name"
//                                                     value={formData.name}
//                                                     onChange={handleChange}
//                                                     placeholder="John Doe"
//                                                     required
//                                                     className={`w-full rounded-xl px-4 py-3.5 text-sm transition-all outline-none border focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 ${darkMode
//                                                             ? "bg-[#1A1B1E] border-[#2E3036] text-white placeholder-zinc-500"
//                                                             : "bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400"
//                                                         }`}
//                                                 />
//                                             </div>

//                                             <div>
//                                                 <label
//                                                     className={`block text-xs font-semibold uppercase tracking-wider mb-2 ${darkMode ? "text-zinc-300" : "text-gray-700"
//                                                         }`}
//                                                 >
//                                                     Email Address *
//                                                 </label>
//                                                 <input
//                                                     type="email"
//                                                     name="email"
//                                                     value={formData.email}
//                                                     onChange={handleChange}
//                                                     placeholder="john@example.com"
//                                                     required
//                                                     className={`w-full rounded-xl px-4 py-3.5 text-sm transition-all outline-none border focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 ${darkMode
//                                                             ? "bg-[#1A1B1E] border-[#2E3036] text-white placeholder-zinc-500"
//                                                             : "bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400"
//                                                         }`}
//                                                 />
//                                             </div>
//                                         </div>

//                                         {/* Subject */}
//                                         <div>
//                                             <label
//                                                 className={`block text-xs font-semibold uppercase tracking-wider mb-2 ${darkMode ? "text-zinc-300" : "text-gray-700"
//                                                     }`}
//                                             >
//                                                 Subject *
//                                             </label>
//                                             <input
//                                                 type="text"
//                                                 name="subject"
//                                                 value={formData.subject}
//                                                 onChange={handleChange}
//                                                 placeholder="Project Inquiry / Marketing Strategy"
//                                                 required
//                                                 className={`w-full rounded-xl px-4 py-3.5 text-sm transition-all outline-none border focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 ${darkMode
//                                                         ? "bg-[#1A1B1E] border-[#2E3036] text-white placeholder-zinc-500"
//                                                         : "bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400"
//                                                     }`}
//                                             />
//                                         </div>

//                                         {/* Message */}
//                                         <div>
//                                             <label
//                                                 className={`block text-xs font-semibold uppercase tracking-wider mb-2 ${darkMode ? "text-zinc-300" : "text-gray-700"
//                                                     }`}
//                                             >
//                                                 Your Message *
//                                             </label>
//                                             <textarea
//                                                 name="message"
//                                                 rows="4"
//                                                 value={formData.message}
//                                                 onChange={handleChange}
//                                                 placeholder="Tell us about your goals, budget, or timeline..."
//                                                 required
//                                                 className={`w-full rounded-xl px-4 py-3.5 text-sm resize-none transition-all outline-none border focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 ${darkMode
//                                                         ? "bg-[#1A1B1E] border-[#2E3036] text-white placeholder-zinc-500"
//                                                         : "bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400"
//                                                     }`}
//                                             />
//                                         </div>

//                                         {/* Submit Button */}
//                                         <button
//                                             type="submit"
//                                             disabled={isSubmitting}
//                                             className="w-full mt-2 bg-orange-500 hover:bg-orange-600 active:scale-[0.99] text-white font-semibold py-4 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-orange-500/25 disabled:opacity-70 cursor-pointer"
//                                         >
//                                             {isSubmitting ? (
//                                                 <span>Sending...</span>
//                                             ) : (
//                                                 <>
//                                                     <span>Send Message</span>
//                                                     <FiSend className="text-lg" />
//                                                 </>
//                                             )}
//                                         </button>
//                                     </form>

//                                     {/* Contact Info Footer */}
//                                     <div
//                                         className={`mt-10 pt-6 border-t grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-medium ${darkMode
//                                                 ? "border-[#222327] text-zinc-400"
//                                                 : "border-gray-200 text-gray-600"
//                                             }`}
//                                     >
//                                         <div className="flex items-center gap-2.5">
//                                             <div className="p-2 rounded-lg bg-orange-500/10 text-orange-500">
//                                                 <FiMail className="text-base" />
//                                             </div>
//                                             <span className="truncate">hello@marketpro.com</span>
//                                         </div>

//                                         <div className="flex items-center gap-2.5">
//                                             <div className="p-2 rounded-lg bg-orange-500/10 text-orange-500">
//                                                 <FiPhone className="text-base" />
//                                             </div>
//                                             <span>+1 (555) 019-2834</span>
//                                         </div>

//                                         <div className="flex items-center gap-2.5">
//                                             <div className="p-2 rounded-lg bg-orange-500/10 text-orange-500">
//                                                 <FiMapPin className="text-base" />
//                                             </div>
//                                             <span>New York, USA</span>
//                                         </div>
//                                     </div>

//                                 </div>
//                             </SpotlightCard>
//                         </div>
//                     </div>
//                 </FadeContent>
//             </div>
//         </>
//     );
// }
















import React, { useState, useContext } from "react";
import Navbar from "../components/Navbar";
import ShinyText from "../components/ShinyText";
import SpotlightCard from "../components/SpotlightCard";
import FadeContent from "../components/FadeContent";
import { ThemeContext } from "../context/ThemeContext";

// Icons Imports
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaLocationDot, FaPaperPlane } from "react-icons/fa6";

export default function Contact() {
    const { darkMode } = useContext(ThemeContext);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted:", formData);
        alert("Thank you! Your message has been sent.");
        setFormData({ name: "", email: "", subject: "", message: "" });
    };

    return (
        <>
            <Navbar />

            {/* Main Container - Dynamic Theme Background */}
            <div
                className={`min-h-screen pt-24 mt-20 pb-16 flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8 transition-colors duration-500 ${darkMode ? "bg-[#0d0d0e] text-white" : "bg-gray-50 text-gray-900"
                    }`}
            >
                {/* Top Header Section */}
                <div className="text-center mb-8">
                    <p className="uppercase tracking-[4px] text-orange-500 text-sm font-semibold">
                        Contact Us
                    </p>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mt-4 leading-tight">
                        <ShinyText
                            text="Let's Build"
                            speed={2}
                            delay={0}
                            color={darkMode ? "#ffffff" : "#111827"}
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
                            color="#FF5F15"
                            shineColor={darkMode ? "#ffffff" : "#111827"}
                            spread={120}
                            direction="left"
                            yoyo={false}
                            pauseOnHover={false}
                            disabled={false}
                        />
                    </h1>

                    <p
                        className={`mt-6 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed ${darkMode ? "text-gray-400" : "text-gray-600"
                            }`}
                    >
                        Ready to grow your business? Tell us about your project and we'll
                        get back to you within 24 hours.
                    </p>
                </div>

                {/* Form Container */}
                <FadeContent
                    blur={true}
                    duration={1000}
                    easing="ease-out"
                    initialOpacity={0}
                >
                    <div
                        className={`w-full max-w-6xl  border shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 transition-all duration-500 ${darkMode
                                ? "bg-[#141416] border-[#26262a] shadow-black/40"
                                : "bg-white border-gray-200 shadow-gray-200/80"
                            }`}
                    >
                        {/* Left Side: Image Banner */}
                        <div className="relative min-h-[300px] lg:min-h-[600px] w-full overflow-hidden">
                            <img
                                src="/marketpro-office.jpg"
                                alt="MarketPro Office"
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/20" />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-6 sm:p-10">
                                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2 leading-tight">
                                    <ShinyText
                                        text="Let's Build Something Great Together"
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
                                </h2>
                                <p className="text-zinc-300 text-sm sm:text-base">
                                    Connect with our expert marketing team today and elevate your
                                    brand.
                                </p>
                            </div>
                        </div>

                        {/* Right Side: Contact Form */}
                        <SpotlightCard
                            spotlightColor={
                                darkMode
                                    ? "rgba(249, 115, 22, 0.18)"
                                    : "rgba(249, 115, 22, 0.08)"
                            }
                        >
                            <div className="p-6 sm:p-10 lg:p-12 flex flex-col justify-center">
                                {/* Section Header */}
                                <div className="mb-8">
                                    <span className="inline-block bg-orange-500/10 text-orange-500 border border-orange-500/20 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-3">
                                        Get In Touch
                                    </span>
                                    <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-amber-50">
                                        Contact <span className="text-orange-500">MarketPro</span>
                                    </h3>
                                    <p
                                        className={`text-sm mt-2 ${darkMode ? "text-zinc-400" : "text-gray-500"
                                            }`}
                                    >
                                        Have a project in mind or need expert marketing insights? Drop us a message!
                                    </p>
                                </div>

                                {/* Form Elements */}
                                <form onSubmit={handleSubmit} className="space-y-4 ">
                                    {/* Full Name */}
                                    <div>
                                        <label
                                            htmlFor="name"
                                            className={`block text-xs font-semibold uppercase tracking-wider mb-1.5 ${darkMode ? "text-zinc-300" : "text-gray-700"
                                                }`}
                                        >
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            placeholder="Enter Your Name"
                                            className={`w-full rounded-lg px-4 py-3 text-sm transition-all outline-none border focus:ring-1 focus:ring-orange-500 focus:border-orange-500 ${darkMode
                                                    ? "bg-[#1c1c20] border-[#2e2e35] text-white placeholder-zinc-500"
                                                    : "bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400"
                                                }`}
                                        />
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <label
                                            htmlFor="email"
                                            className={`block text-xs font-semibold uppercase tracking-wider mb-1.5 ${darkMode ? "text-zinc-300" : "text-gray-700"
                                                }`}
                                        >
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            placeholder="Enter Your Email"
                                            className={`w-full rounded-lg px-4 py-3 text-sm transition-all outline-none border focus:ring-1 focus:ring-orange-500 focus:border-orange-500 ${darkMode
                                                    ? "bg-[#1c1c20] border-[#2e2e35] text-white placeholder-zinc-500"
                                                    : "bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400"
                                                }`}
                                        />
                                    </div>

                                    {/* Subject */}
                                    <div>
                                        <label
                                            htmlFor="subject"
                                            className={`block text-xs font-semibold uppercase tracking-wider mb-1.5 ${darkMode ? "text-zinc-300" : "text-gray-700"
                                                }`}
                                        >
                                            Subject *
                                        </label>
                                        <input
                                            type="text"
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                            placeholder="Enter Subject"
                                            className={`w-full rounded-lg px-4 py-3 text-sm transition-all outline-none border focus:ring-1 focus:ring-orange-500 focus:border-orange-500 ${darkMode
                                                    ? "bg-[#1c1c20] border-[#2e2e35] text-white placeholder-zinc-500"
                                                    : "bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400"
                                                }`}
                                        />
                                    </div>

                                    {/* Message */}
                                    <div>
                                        <label
                                            htmlFor="message"
                                            className={`block text-xs font-semibold uppercase tracking-wider mb-1.5 ${darkMode ? "text-zinc-300" : "text-gray-700"
                                                }`}
                                        >
                                            Your Message *
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows="4"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            placeholder="Tell us about your project..."
                                            className={`w-full rounded-lg px-4 py-3 text-sm resize-none transition-all outline-none border focus:ring-1 focus:ring-orange-500 focus:border-orange-500 ${darkMode
                                                    ? "bg-[#1c1c20] border-[#2e2e35] text-white placeholder-zinc-500"
                                                    : "bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400"
                                                }`}
                                        />
                                    </div>

                                    {/* Submit Button */}
                                    <button
                                        type="submit"
                                        className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3.5 px-6 rounded-lg transition-all duration-200 shadow-lg shadow-orange-500/25 mt-2 flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99]"
                                    >
                                        <span>Send Message</span>
                                        <FaPaperPlane className="text-xs" />
                                    </button>
                                </form>

                                {/* Quick Details Footer with Icons */}
                                <div
                                    className={`mt-8 pt-6 border-t flex flex-wrap gap-6 text-sm ${darkMode
                                            ? "border-[#26262a] text-zinc-400"
                                            : "border-gray-200 text-gray-600"
                                        }`}
                                >
                                    <div className="flex items-center gap-2">
                                        <MdEmail className="text-orange-500 text-lg" />
                                        <span>hello@marketpro.com</span>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <IoCall className="text-orange-500 text-base" />
                                        <span>+1 (555) 019-2834</span>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <FaLocationDot className="text-orange-500 text-sm" />
                                        <span>New York, USA</span>
                                    </div>
                                </div>
                            </div>
                        </SpotlightCard>
                    </div>
                </FadeContent>
            </div>
        </>
    );
}