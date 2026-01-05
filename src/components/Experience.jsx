import React from 'react'
import { motion } from 'framer-motion'
import { Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react'

const Experience = () => {
    const experiences = [
        {
            company: 'CubeAI Solutions',
            role: 'AI/ML Intern',
            period: 'September 2025 – Present',
            location: 'Remote/Hybrid',
            description: [
                'Developed and trained machine learning models for real-world problems.',
                'Performed data preprocessing, feature engineering, and exploratory data analysis (EDA).',
                'Worked with Python, data science workflows, and n8n automation agents.',
                'Built intelligent automated pipelines for data processing and model deployment.'
            ],
            tags: ['Python', 'ML', 'n8n', 'Data Science', 'Automation']
        }
    ]

    return (
        <section id="experience" className="py-24 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-4">Journey</h2>
                    <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">Work <span className="text-gradient">Experience</span></h3>
                </div>

                <div className="max-w-4xl mx-auto">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="relative pl-8 pb-12 last:pb-0 border-l border-slate-800"
                        >
                            {/* Timeline dot */}
                            <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-slate-950 shadow-[0_0_10px_rgba(139,92,246,0.5)]"></div>

                            <div className="group relative glass p-8 rounded-3xl border border-white/5 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5">
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                                    <div>
                                        <h4 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">{exp.role}</h4>
                                        <div className="flex items-center text-slate-400 mt-1 font-medium">
                                            <Briefcase className="w-4 h-4 mr-2" />
                                            <span>{exp.company}</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col md:items-end gap-2">
                                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-mono border border-slate-700 font-medium">
                                            <Calendar className="w-3 h-3 mr-2" />
                                            {exp.period}
                                        </div>
                                        <div className="inline-flex items-center text-slate-500 text-xs mt-1">
                                            <MapPin className="w-3 h-3 mr-1" />
                                            {exp.location}
                                        </div>
                                    </div>
                                </div>

                                <ul className="space-y-3 mb-8">
                                    {exp.description.map((item, i) => (
                                        <li key={i} className="flex items-start text-slate-400 leading-relaxed">
                                            <span className="text-primary mr-3 mt-1.5">•</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>

                                <div className="flex flex-wrap gap-2">
                                    {exp.tags.map((tag, i) => (
                                        <span key={i} className="px-3 py-1 rounded-lg bg-primary/5 text-primary text-xs font-semibold border border-primary/10">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Experience
