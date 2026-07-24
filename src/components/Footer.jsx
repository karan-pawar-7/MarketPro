import React from 'react';
import ShinyText from "../components/ShinyText";

const Footer = () => {
    return (
        <footer className="bg-[#0c0d10] text-gray-200 pt-5 pb-8 px-6 md:px-16 border-t border-gray-800/60 font-sans">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-gray-800/80">

                {/* Column 1: Brand Info & Socials */}
                <div className="lg:col-span-2 space-y-4">
                    <div className="flex items-center space-x-2 text-white font-bold text-2xl tracking-wide">
                        {/* Orange Square Logo Icon */}
                        <div className="flex items-end gap-[3px]">
                            <span className="w-1 h-[5px] bg-orange-500 "></span>
                            <span className="w-1 h-[10px] bg-orange-500 "></span>
                            <span className="w-1 h-[15px] bg-orange-500 "></span>
                            <span className="w-1 h-[20px] bg-orange-500 "></span>
                        </div>  
                         <ShinyText
                  text="MarketPro"
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
                    </div>
                    <p className="text-sm text-gray-400 max-w-sm leading-relaxed">
                        MarketPro builds and runs full-funnel campaigns — from brand positioning to paid media and SEO — driving measurable growth.
                    </p>

                    {/* Social Links */}
                    <div className="flex space-x-4 pt-2">
                        {/* LinkedIn */}
                        <a href="#linkedin" className="w-9 h-9 rounded-full bg-[#16181d] border border-gray-800 flex items-center justify-center text-gray-300 hover:border-[#ff6600] hover:text-[#ff6600] transition-colors">
                            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.239-2.762-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                            </svg>
                        </a>
                        {/* Twitter / X */}
                        <a href="#twitter" className="w-9 h-9 rounded-full bg-[#16181d] border border-gray-800 flex items-center justify-center text-gray-300 hover:border-[#ff6600] hover:text-[#ff6600] transition-colors">
                            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Column 2: Navigation */}
                <div>
                    <h4 className="text-white font-semibold mb-4 text-sm tracking-wider uppercase">Navigation</h4>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#home" className="hover:text-[#ff6600] transition-colors">Home</a></li>
                        <li><a href="#services" className="hover:text-[#ff6600] transition-colors">Services</a></li>
                        <li><a href="#results" className="hover:text-[#ff6600] transition-colors">Results</a></li>
                        <li><a href="#process" className="hover:text-[#ff6600] transition-colors">Our Process</a></li>
                        <li><a href="#contact" className="hover:text-[#ff6600] transition-colors">Contact</a></li>
                    </ul>
                </div>

                {/* Column 3: Services */}
                <div>
                    <h4 className="text-white font-semibold mb-4 text-sm tracking-wider uppercase">Services</h4>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#paid-ads" className="hover:text-[#ff6600] transition-colors">Paid Media Ads</a></li>
                        <li><a href="#seo" className="hover:text-[#ff6600] transition-colors">SEO Marketing</a></li>
                        <li><a href="#branding" className="hover:text-[#ff6600] transition-colors">Brand Strategy</a></li>
                        <li><a href="#cro" className="hover:text-[#ff6600] transition-colors">Conversion Rate</a></li>
                    </ul>
                </div>

                {/* Column 4: Newsletter */}
                <div>
                    <h4 className="text-white font-semibold mb-4 text-sm tracking-wider uppercase">Stay Updated</h4>
                    <p className="text-xs text-gray-400 mb-3">Get our weekly marketing insights straight to your inbox.</p>
                    <form className="space-y-2" onSubmit={(e) => e.preventDefault()}>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full bg-[#16181d] border border-gray-800 text-white text-sm rounded-lg px-3 py-2.5 focus:outline-none focus:border-[#ff6600] transition-colors"
                        />
                        <button
                            type="submit"
                            className="w-full bg-[#ff6600] hover:bg-[#e05500] text-white font-medium text-sm py-2.5 rounded-lg transition-all shadow-lg shadow-[#ff6600]/20">
                            Subscribe →
                        </button>
                    </form>
                </div>

            </div>

            {/* Bottom Bar */}
            <div className="max-w-7xl mx-auto mt-4 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4">
                <p>© 2026 MarketPro Agency Inc. All rights reserved.</p>
                <div className="flex space-x-6">
                    <a href="#privacy" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
                    <a href="#terms" className="hover:text-gray-300 transition-colors">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;