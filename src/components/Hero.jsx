import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Terminal, Eye } from 'lucide-react'

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-full -z-10">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[128px] animate-pulse delay-700"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:40px_40px] opacity-20"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 mb-6 glass">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        <span className="text-xs font-medium text-slate-300 uppercase tracking-wider">
                            Open to Jobs & Internships
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
                        Hi, I'm <span className="text-gradient">Chandru S</span>
                    </h1>

                    <h2 className="text-2xl md:text-3xl font-bold text-slate-300 mb-8 max-w-3xl mx-auto">
                        AI / ML Engineer <span className="text-primary">&</span> Full Stack Python Developer
                    </h2>

                    <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                        Passionate about building scalable, real-world solutions.
                        Focused on the intersection of Artificial Intelligence and Data Science.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                        <motion.a
                            href="#projects"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-primary rounded-full font-bold text-white shadow-lg shadow-primary/25 flex items-center group transition-all"
                        >
                            View Projects
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </motion.a>

                        <div className="flex space-x-4">
                            <motion.a
                                href="/S.Chandru.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 bg-slate-800 text-white rounded-full font-bold border border-slate-700 hover:bg-slate-700 transition-all flex items-center"
                            >
                                <Eye className="mr-2 w-5 h-5" />
                                Resume
                            </motion.a>
                            <motion.a
                                href="#contact"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 bg-slate-800 text-white rounded-full font-bold border border-slate-700 hover:bg-slate-700 transition-all flex items-center"
                            >
                                Contact Me
                            </motion.a>
                        </div>
                    </div>
                </motion.div>

                {/* Floating elements/Visuals */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 1 }}
                    className="mt-20 relative max-w-4xl mx-auto"
                >
                    <div className="glass rounded-2xl p-4 border border-white/10 shadow-2xl relative overflow-hidden group">
                        <div className="flex items-center space-x-2 mb-4 border-b border-white/5 pb-2">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            <div className="text-[10px] text-slate-500 font-mono flex items-center ml-4">
                                <Terminal className="w-3 h-3 mr-1" /> ~/portfolio/workspace
                            </div>
                        </div>
                        <div className="font-mono text-sm text-left text-slate-300 space-y-1">
                            <p><span className="text-emerald-400">➜</span> <span className="text-primary">skillset</span> git branch <span className="text-slate-500"># main</span></p>
                            <p><span className="text-emerald-400">➜</span> <span className="text-primary">specialization</span> AI & Data Science</p>
                            <p><span className="text-emerald-400">➜</span> <span className="text-primary">tech_stack</span> Python, Flask, React, SQL, ML, DL</p>
                            <p><span className="text-emerald-400">➜</span> <span className="text-primary">mission</span> Build intelligent systems for complex problems</p>
                            <p className="animate-pulse"><span className="text-emerald-400">➜</span> <span className="bg-slate-700 text-slate-700">_</span></p>
                        </div>
                    </div>

                    {/* Subtle decorative glow behind code block */}
                    <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-full -z-10 group-hover:bg-primary/10 transition-colors duration-700"></div>
                </motion.div>
            </div>
        </section>
    )
}

export default Hero
