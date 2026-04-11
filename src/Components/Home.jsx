import { FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import { SiMongodb, SiTypescript } from "react-icons/si";

const Home = () => {
    return (
        <>
            <div className="hero bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 min-h-screen relative overflow-hidden px-3 sm:px-6">
                {/* Animated Background Elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute w-96 h-96 bg-purple-500/20 rounded-full blur-3xl top-10 -left-20 animate-pulse"></div>
                    <div className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl bottom-20 -right-20 animate-pulse" style={{animationDelay: '1s'}}></div>
                </div>

                <div className="hero-content text-center relative z-10 py-12 sm:py-16">
                    <div className="max-w-2xl">
                        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
                            Find Your Code<span className="block">mate</span>
                        </h1>
                        <p className="py-6 sm:py-8 text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed font-light">
                            Where developers meet developers. Connect with like-minded programmers, 
                            <span className="block text-purple-300 font-medium">collaborate on projects, and build amazing things together.</span>
                        </p>
                        <button className="btn btn-md sm:btn-lg bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 border-0 text-white font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">Got to Feed</button>
                    </div>
                </div>
            </div>
            
            {/* 2nd section */}
            <div className="w-full py-12 px-3 sm:px-6 bg-gradient-to-b from-slate-900 to-slate-800 flex justify-center">
                <div className="stats shadow-2xl w-full max-w-6xl bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl">
                    <div className="stat hover:bg-white/10 transition-all duration-300 rounded-xl">
                        <div className="stat-figure text-blue-400">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="inline-block h-10 w-10 stroke-current"
                        >
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                            ></path>
                        </svg>
                        </div>
                        <div className="stat-title text-gray-300">Active Connections</div>
                        <div className="stat-value text-blue-400">25.6K</div>
                        <div className="stat-desc text-gray-400">↗︎ 21% more this month</div>
                    </div>

                    <div className="stat hover:bg-white/10 transition-all duration-300 rounded-xl">
                        <div className="stat-figure text-purple-400">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="inline-block h-10 w-10 stroke-current"
                        >
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                            ></path>
                        </svg>
                        </div>
                        <div className="stat-title text-gray-300">Total Users</div>
                        <div className="stat-value text-purple-400">45.6K</div>
                        <div className="stat-desc text-gray-400">↗︎ 28% increased from last year</div>
                    </div>

                    <div className="stat hover:bg-white/10 transition-all duration-300 rounded-xl">
                        <div className="stat-figure text-pink-400">
                        <div className="avatar avatar-online">
                            <div className="w-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                                <span className="text-2xl">👥</span>
                            </div>
                        </div>
                        </div>
                        <div className="stat-value text-gray-100">86%</div>
                        <div className="stat-title text-gray-300">Match Success Rate</div>
                        <div className="stat-desc text-gray-400">2K+ partnerships formed</div>
                    </div>
                </div>
            </div>

            {/* tech section */}
            <div className="w-full py-16 sm:py-20 px-3 sm:px-6 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-center relative overflow-hidden">
                
                {/* Animated bg */}
                <div className="absolute inset-0 opacity-20 pointer-events-none">
                    <div className="absolute w-72 h-72 bg-purple-500 rounded-full blur-3xl top-1/2 left-1/4 mix-blend-screen"></div>
                    <div className="absolute w-72 h-72 bg-indigo-500 rounded-full blur-3xl bottom-0 right-1/4 mix-blend-screen"></div>
                </div>

                {/* Heading */}
                <h2 className="text-3xl md:text-5xl font-black text-white mb-4 relative z-10 bg-gradient-to-r from-purple-200 to-blue-200 bg-clip-text text-transparent">
                    Tech Stack We Love ❤️
                </h2>
                <p className="text-gray-300 mb-16 relative z-10 max-w-2xl mx-auto">
                    Built by developers, for developers - supporting all your favorite technologies
                </p>

                {/* Icons Grid */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-8 max-w-5xl mx-auto relative z-10">

                    {/* Item */}
                    <div className="flex flex-col items-center gap-4 text-gray-300 hover:scale-125 hover:text-blue-300 transition-all duration-300 group cursor-pointer">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-md rounded-xl flex items-center justify-center border border-blue-400/30 group-hover:bg-blue-500/40 group-hover:border-blue-400/60 transition-all duration-300 shadow-lg group-hover:shadow-blue-500/50">
                        <FaReact size={32} className="text-blue-400" />
                    </div>
                    <span className="text-sm font-semibold">React</span>
                    </div>

                    <div className="flex flex-col items-center gap-4 text-gray-300 hover:scale-125 hover:text-green-300 transition-all duration-300 group cursor-pointer">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-md rounded-xl flex items-center justify-center border border-green-400/30 group-hover:bg-green-500/40 group-hover:border-green-400/60 transition-all duration-300 shadow-lg group-hover:shadow-green-500/50">
                        <FaNodeJs size={32} className="text-green-400" />
                    </div>
                    <span className="text-sm font-semibold">Node.js</span>
                    </div>

                    <div className="flex flex-col items-center gap-4 text-gray-300 hover:scale-125 hover:text-green-300 transition-all duration-300 group cursor-pointer">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-600/20 to-lime-500/20 backdrop-blur-md rounded-xl flex items-center justify-center border border-green-400/30 group-hover:bg-green-600/40 group-hover:border-green-400/60 transition-all duration-300 shadow-lg group-hover:shadow-green-600/50">
                        <SiMongodb size={32} className="text-green-400" />
                    </div>
                    <span className="text-sm font-semibold">MongoDB</span>
                    </div>

                    <div className="flex flex-col items-center gap-4 text-gray-300 hover:scale-125 hover:text-blue-300 transition-all duration-300 group cursor-pointer">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600/20 to-indigo-500/20 backdrop-blur-md rounded-xl flex items-center justify-center border border-blue-400/30 group-hover:bg-blue-600/40 group-hover:border-blue-400/60 transition-all duration-300 shadow-lg group-hover:shadow-blue-600/50">
                        <FaPython size={32} className="text-blue-400" />
                    </div>
                    <span className="text-sm font-semibold">Python</span>
                    </div>

                    <div className="flex flex-col items-center gap-4 text-gray-300 hover:scale-125 hover:text-cyan-300 transition-all duration-300 group cursor-pointer">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-md rounded-xl flex items-center justify-center border border-cyan-400/30 group-hover:bg-cyan-500/40 group-hover:border-cyan-400/60 transition-all duration-300 shadow-lg group-hover:shadow-cyan-500/50">
                        <SiTypescript size={32} className="text-cyan-400" />
                    </div>
                    <span className="text-sm font-semibold">TypeScript</span>
                    </div>

                </div>

            </div>

            {/* third last section */}
            <div className="relative w-full py-16 sm:py-24 px-3 sm:px-6 text-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden text-white">

                {/* Animated Glow Effects */}
                <div className="absolute w-[600px] h-[600px] bg-purple-500 opacity-25 blur-[150px] rounded-full top-[-200px] left-1/2 -translate-x-1/2 animate-pulse"></div>
                <div className="absolute w-[600px] h-[600px] bg-pink-500 opacity-20 blur-[150px] rounded-full bottom-[-200px] left-1/3 animate-pulse" style={{animationDelay: '1s'}}></div>

                {/* Content */}
                <div className="relative z-10 max-w-3xl mx-auto">
                    {/* Heading */}
                    <h1 className="text-3xl sm:text-4xl md:text-6xl font-black leading-tight mb-6">
                        Ready to Find Your <br />
                        <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
                            Perfect Codemate?
                        </span>
                    </h1>

                    {/* Subtext */}
                    <p className="mt-6 sm:mt-8 text-gray-300 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
                        Join <span className="text-purple-300 font-semibold">50,000+ developers</span> who've found their perfect coding partner. 
                        <br/>Connect, collaborate, and build amazing projects together.
                    </p>

                    {/* CTA + Features */}
                    <div className="mt-12 flex flex-col items-center gap-8">

                        {/* Button Group */}
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
                            <button className="px-10 py-4 rounded-xl font-bold text-lg text-white 
                            bg-gradient-to-r from-pink-500 to-purple-600 
                            hover:from-pink-400 hover:to-purple-500 
                            hover:scale-110 transition-all duration-300 shadow-2xl hover:shadow-pink-500/50 cursor-pointer">
                            Start Your Journey 🚀
                            </button>
                            <button className="px-10 py-4 rounded-xl font-bold text-lg 
                            border-2 border-purple-400 text-purple-300
                            hover:bg-purple-400/10 hover:scale-105 transition-all duration-300 cursor-pointer">
                            Learn More
                            </button>
                        </div>

                        {/* Features Grid */}
                        <div className="text-sm text-gray-300 flex flex-wrap justify-center gap-8 pt-4 max-w-xl">
                            <span className="flex items-center gap-2"><span className="text-green-400">✓</span> Free Forever</span>
                            <span className="flex items-center gap-2"><span className="text-blue-400">✓</span> Instant Access</span>
                            <span className="flex items-center gap-2"><span className="text-purple-400">✓</span> No Credit Card</span>
                        </div>

                        {/* Social Proof */}
                        <div className="pt-8 border-t border-white/10">
                            <p className="text-xs text-gray-400 mb-3">⭐ Trusted by developers worldwide</p>
                            <div className="flex justify-center gap-2 flex-wrap">
                                <span className="bg-white/10 backdrop-blur px-3 py-1 rounded-full text-xs text-gray-300">React Devs</span>
                                <span className="bg-white/10 backdrop-blur px-3 py-1 rounded-full text-xs text-gray-300">Node.js Masters</span>
                                <span className="bg-white/10 backdrop-blur px-3 py-1 rounded-full text-xs text-gray-300">Full Stack Heroes</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* Logo Scroll Section */}
            <div className="w-full py-20 bg-gradient-to-b from-slate-800 to-slate-900 overflow-hidden relative">

                {/* Animated Glow */}
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <div className="absolute w-96 h-96 bg-purple-500 rounded-full blur-3xl top-1/2 left-1/4 mix-blend-screen"></div>
                </div>

                <h3 className="text-center text-gray-400 mb-16 text-sm tracking-widest uppercase font-semibold relative z-10">
                    ✨ Trusted by Developers Using
                </h3>

                {/* fade edges */}
                <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-slate-900 to-transparent z-20"></div>
                <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-slate-900 to-transparent z-20"></div>


                <div className="relative z-10 flex animate-scroll gap-24 whitespace-nowrap py-6">

                    {[...Array(2)].map((_, i) => (
                        <div key={i} className="flex items-center gap-24">

                            <div className="flex flex-col items-center gap-2 group cursor-pointer">
                                <div className="p-4 rounded-xl bg-blue-500/10 group-hover:bg-blue-500/20 transition-all duration-300 group-hover:scale-110">
                                    <FaReact size={40} className="text-blue-400" />
                                </div>
                                <span className="text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">React</span>
                            </div>

                            <div className="flex flex-col items-center gap-2 group cursor-pointer">
                                <div className="p-4 rounded-xl bg-green-500/10 group-hover:bg-green-500/20 transition-all duration-300 group-hover:scale-110">
                                    <FaNodeJs size={40} className="text-green-400" />
                                </div>
                                <span className="text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Node.js</span>
                            </div>

                            <div className="flex flex-col items-center gap-2 group cursor-pointer">
                                <div className="p-4 rounded-xl bg-green-600/10 group-hover:bg-green-600/20 transition-all duration-300 group-hover:scale-110">
                                    <SiMongodb size={40} className="text-green-500" />
                                </div>
                                <span className="text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">MongoDB</span>
                            </div>

                            <div className="flex flex-col items-center gap-2 group cursor-pointer">
                                <div className="p-4 rounded-xl bg-yellow-500/10 group-hover:bg-yellow-500/20 transition-all duration-300 group-hover:scale-110">
                                    <FaPython size={40} className="text-yellow-400" />
                                </div>
                                <span className="text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Python</span>
                            </div>

                            <div className="flex flex-col items-center gap-2 group cursor-pointer">
                                <div className="p-4 rounded-xl bg-cyan-500/10 group-hover:bg-cyan-500/20 transition-all duration-300 group-hover:scale-110">
                                    <SiTypescript size={40} className="text-cyan-400" />
                                </div>
                                <span className="text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">TypeScript</span>
                            </div>

                        </div>
                    ))}

                </div>

                {/* Bottom Accent */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-20 blur-lg"></div>
            </div>
        </>
    )
}

export default Home
