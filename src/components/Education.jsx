import React from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, Award, BookOpen, CheckCircle2 } from 'lucide-react'

const Education = () => {
    const education = [
        {
            degree: 'B.Tech – Artificial Intelligence and Data Science',
            institution: 'Erode Sengunthar Engineering College, Erode',
            period: '2022 – Present',
            score: 'CGPA: 8.5',
            icon: <GraduationCap className="w-6 h-6" />
        },
        {
            degree: 'Higher Secondary Education',
            institution: 'Government Higher Secondary School, Erode',
            period: '2020 – 2022',
            score: 'Grade: 88%',
            icon: <BookOpen className="w-6 h-6" />
        }
    ]

    const certifications = [
        {
            title: 'Python Programming Certification',
            issuer: 'Guvi',
            date: 'May 2025',
            logo: 'G'
        },
        {
            title: 'Python and Flask Framework',
            issuer: 'Udemy',
            date: 'Sep 2025',
            logo: 'U'
        },
        {
            title: 'GenAI Powered Data Analytics',
            issuer: 'Forage',
            date: 'Oct 2025',
            logo: 'F'
        }
    ]

    return (
        <section id="education" className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

                    {/* Education Side */}
                    <div>
                        <div className="mb-12">
                            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-4">Academic</h2>
                            <h3 className="text-3xl md:text-4xl font-bold text-white">Education <span className="text-gradient">History</span></h3>
                        </div>

                        <div className="space-y-8">
                            {education.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="relative p-6 rounded-3xl glass border border-white/5 hover:border-primary/20 transition-all group"
                                >
                                    <div className="flex items-start space-x-5">
                                        <div className="p-4 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                            {item.icon}
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold text-white mb-1">{item.degree}</h4>
                                            <p className="text-slate-400 mb-2">{item.institution}</p>
                                            <div className="flex items-center space-x-4">
                                                <span className="text-xs font-mono text-slate-500">{item.period}</span>
                                                <span className="px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-500 text-xs font-bold border border-emerald-500/20">
                                                    {item.score}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Certifications Side */}
                    <div>
                        <div className="mb-12">
                            <h2 className="text-sm font-bold tracking-widest text-secondary uppercase mb-4">Recognition</h2>
                            <h3 className="text-3xl md:text-4xl font-bold text-white">Certifications & <span className="text-gradient">Badges</span></h3>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {certifications.map((cert, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="p-6 rounded-3xl bg-slate-900 border border-slate-800 hover:border-secondary/30 transition-all flex flex-col items-center text-center group"
                                >
                                    <div className="w-16 h-16 rounded-2xl bg-slate-800 flex items-center justify-center text-2xl font-bold text-secondary mb-4 border border-slate-700 shadow-xl group-hover:bg-secondary group-hover:text-white transition-all transform group-hover:rotate-6">
                                        {cert.logo}
                                    </div>
                                    <h4 className="text-white font-bold mb-1 line-clamp-2">{cert.title}</h4>
                                    <p className="text-sm text-slate-500 mb-4">{cert.issuer}</p>
                                    <div className="mt-auto flex items-center text-xs text-slate-600 font-medium">
                                        <Award className="w-3 h-3 mr-1" />
                                        {cert.date}
                                    </div>
                                </motion.div>
                            ))}

                            {/* Special Badge Callout */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="p-6 rounded-3xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-white/10 flex flex-col items-center justify-center text-center"
                            >
                                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-4">
                                    <CheckCircle2 className="w-6 h-6 text-white" />
                                </div>
                                <p className="text-white font-bold text-sm">Always Learning</p>
                                <p className="text-xs text-slate-300 mt-1">Expanding skillset with new AI technologies daily.</p>
                            </motion.div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Education
