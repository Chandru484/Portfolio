import React from 'react'
import { motion } from 'framer-motion'
import { Github, ExternalLink, Code, Layers } from 'lucide-react'

const Projects = () => {
    const projects = [
        {
            title: 'AI Resume Builder',
            subtitle: 'AI-Powered Resume Ecosystem',
            image: '/ai_resume_builder.svg',
            description: 'A full-stack platform for creating ATS-compliant resumes with real-time editing, parsing, scoring, and job matching using Groq LLM.',
            tech: ['React', 'Firebase', 'Groq AI', 'Node.js', 'ImageKit', 'Tailwind'],
            impact: 'Enabled ultra-low latency AI resume parsing and real-time career optimization for job seekers.',
            links: { github: 'https://github.com/Chandru484/Resume-Builder.git', demo: '#' }
        },
        {
            title: 'AI Terms & Conditions Summarizer',
            subtitle: 'Simplifying Legal Jargon with AI',
            image: '/ai_summarizer.png',
            description: 'An AI-powered system designed to summarize lengthy and complex terms and conditions into concise, readable points using transformer models.',
            tech: ['Python', 'FastAPI', 'Hugging Face', 'BART', 'T5'],
            impact: 'Improved user understanding by 80% with 90% summarization accuracy.',
            links: { github: 'https://github.com/Chandru484/termsandconditions-summarizer', demo: 'https://69837295d033e7359cd5b8cc--termsandconditionssummarizer.netlify.app/' }
        },
        {
            title: 'StockMaster',
            subtitle: 'Inventory Management System',
            image: '/stock_master.png',
            description: 'A robust Flask-based inventory management system supporting multi-location product tracking, real-time movement logs, and reporting.',
            tech: ['Python', 'Flask', 'SQLAlchemy', 'MySQL', 'Bootstrap'],
            impact: 'Full CRUD operations for products and locations with real-time movement tracking.',
            links: { github: 'https://github.com/Chandru484/Flask-Inventory-Management-System', demo: '#' }
        },
        {
            title: 'AI Course Generator',
            subtitle: 'AI-Powered Education Platform',
            image: '/ai_course_generator.svg',
            description: 'A comprehensive full-stack application for creating AI-powered educational courses with multimedia integration and YouTube support.',
            tech: ['Next.js 14', 'TypeScript', 'Tailwind', 'Clerk', 'Firebase', 'OpenAI'],
            impact: 'Automated course structure generation and content synthesis with integrated video and image assets.',
            links: { github: 'https://github.com/Chandru484/Ai-Course-Generator.git', demo: '#' }
        }
    ]

    return (
        <section id="projects" className="py-24 bg-slate-900/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div className="max-w-2xl">
                        <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-4">Portfolio</h2>
                        <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">Featured <span className="text-gradient">Projects</span></h3>
                        <p className="text-slate-400">
                            A selection of my recent work in AI and Full-Stack Development, focusing on solving practical problems with clean code.
                        </p>
                    </div>
                    <a
                        href="https://github.com/Chandru484"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 text-slate-300 hover:text-primary transition-colors font-medium"
                    >
                        <span>View all on GitHub</span>
                        <ExternalLink className="w-4 h-4" />
                    </a>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group relative flex flex-col"
                        >
                            {/* Project Image Container */}
                            <div className="relative aspect-[16/10] rounded-3xl overflow-hidden glass border border-white/5 mb-8 shadow-2xl group-hover:border-primary/30 transition-all duration-500">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                {/* Overlay on hover */}
                                <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-sm">
                                    <div className="flex space-x-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                        <a
                                            href={project.links.github}
                                            className="p-4 rounded-full bg-white text-slate-950 hover:bg-primary hover:text-white transition-colors"
                                            title="View Source"
                                        >
                                            <Github size={24} />
                                        </a>
                                        {project.links.demo !== '#' && (
                                            <a
                                                href={project.links.demo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-4 rounded-full bg-white text-slate-950 hover:bg-primary hover:text-white transition-colors"
                                                title="Live Demo"
                                            >
                                                <ExternalLink size={24} />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Project Details */}
                            <div className="flex-1 px-2">
                                <div className="flex items-center space-x-2 mb-3">
                                    {index === 0 ? <Code className="w-5 h-5 text-primary" /> : <Layers className="w-5 h-5 text-secondary" />}
                                    <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">{project.subtitle}</span>
                                </div>
                                <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors">{project.title}</h4>
                                <p className="text-slate-400 mb-6 leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="mb-6 p-4 rounded-2xl bg-primary/5 border border-primary/10">
                                    <p className="text-sm font-medium text-slate-300">
                                        <span className="text-primary mr-2 font-bold">Impact:</span>
                                        {project.impact}
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="px-3 py-1 rounded-full bg-slate-800 text-slate-400 text-xs font-medium border border-slate-700">
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                {/* Mobile Links */}
                                <div className="flex items-center gap-3 mt-6 lg:hidden">
                                    <a
                                        href={project.links.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-800 text-white font-medium border border-slate-700 hover:bg-slate-700 transition-colors"
                                    >
                                        <Github size={18} />
                                        <span>Source</span>
                                    </a>
                                    {project.links.demo !== '#' && (
                                        <a
                                            href={project.links.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-primary text-white font-medium hover:bg-primary/90 transition-colors"
                                        >
                                            <ExternalLink size={18} />
                                            <span>Demo</span>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects
