import React from 'react'
import { motion } from 'framer-motion'
import {
    Code2,
    Globe,
    Database,
    Library,
    Settings2,
    BrainCircuit,
    Layout,
    Terminal,
    Activity
} from 'lucide-react'

const Skills = () => {
    const skillCategories = [
        {
            title: 'Programming',
            icon: <Code2 className="w-5 h-5" />,
            skills: [
                { name: 'Python', level: 90 },
                { name: 'C (Basics)', level: 75 },
                { name: 'Java (Basics)', level: 70 },
            ]
        },
        {
            title: 'Web Technologies',
            icon: <Globe className="w-5 h-5" />,
            skills: [
                { name: 'HTML/CSS/JS', level: 80 },
                { name: 'ReactJS', level: 75 },
                { name: 'Flask ', level: 85 },
            ]
        },
        {
            title: 'AI & Data Science',
            icon: <BrainCircuit className="w-5 h-5" />,
            skills: [
                { name: 'NumPy / Pandas', level: 85 },
                { name: 'Hugging Face / Transformers', level: 80 },
                { name: 'Machine & Deep Learning', level: 80 },
            ]
        },
        {
            title: 'Tools & Security',
            icon: <Database className="w-5 h-5" />,
            skills: [
                { name: 'MySQL', level: 85 },
                { name: 'Git/GitHub', level: 90 },
                { name: 'JWT / Authentication', level: 75 },
                { name: 'Docker / Render', level: 70 },
            ]
        }
    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    }

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    }

    return (
        <section id="skills" className="py-24 bg-slate-900/50 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-sm font-bold tracking-widest text-primary uppercase mb-4"
                    >
                        Capabilities
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-bold text-white mb-6"
                    >
                        Technical <span className="text-gradient">Skillset</span>
                    </motion.h3>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-400 max-w-2xl mx-auto"
                    >
                        A comprehensive look at my technical expertise across programming, data science, and web development.
                    </motion.p>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {skillCategories.map((category, idx) => (
                        <motion.div
                            key={idx}
                            variants={itemVariants}
                            className="p-6 rounded-3xl bg-slate-950 border border-slate-800 hover:border-primary/50 transition-all duration-300 group shadow-lg shadow-black/20"
                        >
                            <div className="flex items-center space-x-3 mb-8">
                                <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                    {category.icon}
                                </div>
                                <h4 className="text-lg font-bold text-slate-200">{category.title}</h4>
                            </div>

                            <div className="space-y-6">
                                {category.skills.map((skill, sIdx) => (
                                    <div key={sIdx}>
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-sm font-medium text-slate-400">{skill.name}</span>
                                            <span className="text-xs font-mono text-slate-500">{skill.level}%</span>
                                        </div>
                                        <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1, delay: 0.5 + (sIdx * 0.1) }}
                                                className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Soft Skills Section */}
                <div className="mt-20 pt-10 border-t border-slate-800/50">
                    <div className="flex flex-wrap justify-center gap-4">
                        {['150+ LeetCode Solved', 'Team Player', 'Adaptability', 'Leadership', 'Critical Thinking'].map((skill, i) => (
                            <span key={i} className="px-5 py-2 rounded-full bg-slate-800/50 text-slate-300 border border-slate-700 text-sm font-medium animate-pulse hover:bg-slate-700 transition-colors">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills
