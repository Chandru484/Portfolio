import React from 'react'
import { motion } from 'framer-motion'
import { User, Target, TrendingUp, Cpu } from 'lucide-react'

const About = () => {
    const highlights = [
        {
            icon: <Cpu className="w-6 h-6 text-primary" />,
            title: 'AI & Data Science',
            description: 'Specializing in building intelligent systems that learn and adapt.'
        },
        {
            icon: <Target className="w-6 h-6 text-secondary" />,
            title: 'Problem Solver',
            description: 'Solved 150+ algorithmic problems on LeetCode with a focus on optimization.'
        },
        {
            icon: <TrendingUp className="w-6 h-6 text-accent" />,
            title: 'Growth Mindset',
            description: 'Committed to continuous learning and staying ahead of technology trends.'
        }
    ]

    return (
        <section id="about" className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:w-1/2 relative"
                    >
                        <div className="relative z-10 rounded-3xl overflow-hidden glass border border-white/10 p-2">
                            <div className="aspect-square relative rounded-2xl overflow-hidden bg-slate-800 flex items-center justify-center">
                                <img
                                    src="/profile.jpg"
                                    alt="Chandru S"
                                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60"></div>
                                <div className="absolute bottom-6 left-6 right-6">
                                    <div className="p-4 rounded-xl glass border border-white/5 backdrop-blur-md">
                                        <p className="text-sm font-medium text-slate-300 italic">
                                            "I build scalable, real-world solutions that bridge the gap between AI theory and practical application."
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Decorative background circle */}
                        <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl -z-10"></div>
                        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl -z-10"></div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:w-1/2"
                    >
                        <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-4 flex items-center">
                            <span className="w-8 h-px bg-primary mr-4"></span>
                            About Me
                        </h2>
                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            AI Enthusiast & <span className="text-secondary">Full Stack Developer</span>
                        </h3>
                        <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                            I am a passionate student currently pursuing my B.Tech in Artificial Intelligence and Data Science at Erode Sengunthar Engineering College.
                            With a CGPA of 8.5, I've developed a strong foundation in both the theoretical and practical aspects of modern computing.
                        </p>
                        <p className="text-lg text-slate-400 mb-10 leading-relaxed">
                            My journey is driven by a curiosity to understand how data can be leveraged to create intelligent systems. I am currently **actively looking for full-time roles and internship opportunities** where I can contribute my problem-solving skills and passion for AI.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-6">
                            {highlights.map((item, index) => (
                                <div key={index} className="p-4 rounded-2xl bg-slate-900 border border-slate-800 hover:border-primary/50 transition-colors group">
                                    <div className="mb-3">{item.icon}</div>
                                    <h4 className="text-white font-bold mb-1">{item.title}</h4>
                                    <p className="text-sm text-slate-500">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default About
