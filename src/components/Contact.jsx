import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageSquare, Terminal } from 'lucide-react'

const Contact = () => {
    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-4">Get in Touch</h2>
                    <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">Let's <span className="text-gradient">Connect</span></h3>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Have a project in mind or looking for a talented AI/ML Engineer? I'm currently **open to full-time roles and internships**. Feel free to reach out!
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
                    {/* Contact Info Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-5 space-y-6"
                    >
                        <div className="glass p-8 rounded-3xl border border-white/5 space-y-8 h-full">
                            <h4 className="text-2xl font-bold text-white">Contact Information</h4>
                            <p className="text-slate-400">Feel free to reach out via any of these channels.</p>

                            <div className="space-y-6">
                                <div className="flex items-center space-x-4 p-4 rounded-2xl bg-slate-900 border border-slate-800 hover:border-primary/50 transition-colors group">
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-500 uppercase font-bold tracking-wider">Email</p>
                                        <a href="mailto:chandru4842193@gmail.com" className="text-slate-200 font-medium hover:text-primary transition-colors">chandru4842193@gmail.com</a>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4 p-4 rounded-2xl bg-slate-900 border border-slate-800 hover:border-primary/50 transition-colors group">
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-500 uppercase font-bold tracking-wider">Phone</p>
                                        <a href="tel:+918667354328" className="text-slate-200 font-medium hover:text-primary transition-colors">+91 8667354328</a>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4 p-4 rounded-2xl bg-slate-900 border border-slate-800 hover:border-primary/50 transition-colors group">
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-500 uppercase font-bold tracking-wider">Location</p>
                                        <p className="text-slate-200 font-medium">Erode, Tamil Nadu, India</p>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-8 border-t border-slate-800">
                                <p className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4">Follow Me</p>
                                <div className="flex space-x-4">
                                    <a href="https://github.com/Chandru484" className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all transform hover:-translate-y-1">
                                        <Github size={20} />
                                    </a>
                                    <a href="https://linkedin.com/in/chandru-s-547a75273/" className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all transform hover:-translate-y-1">
                                        <Linkedin size={20} />
                                    </a>
                                    <a href="https://leetcode.com/u/Chandru484/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-[#FFA116] hover:text-white transition-all transform hover:-translate-y-1" title="LeetCode Profile">
                                        <Terminal size={20} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-7"
                    >
                        <div className="glass p-8 md:p-10 rounded-3xl border border-white/5 shadow-2xl">
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-slate-400 ml-1">Full Name</label>
                                        <input
                                            type="text"
                                            placeholder="John Doe"
                                            className="w-full px-5 py-4 rounded-2xl bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-primary transition-colors"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-slate-400 ml-1">Email Address</label>
                                        <input
                                            type="email"
                                            placeholder="john@example.com"
                                            className="w-full px-5 py-4 rounded-2xl bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-primary transition-colors"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-400 ml-1">Subject</label>
                                    <input
                                        type="text"
                                        placeholder="Project Inquiry"
                                        className="w-full px-5 py-4 rounded-2xl bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-primary transition-colors"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-400 ml-1">Message</label>
                                    <textarea
                                        rows="5"
                                        placeholder="How can I help you?"
                                        className="w-full px-5 py-4 rounded-2xl bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-primary transition-colors resize-none"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full py-5 rounded-2xl bg-primary text-white font-bold flex items-center justify-center space-x-2 shadow-lg shadow-primary/20 hover:opacity-90 active:scale-[0.98] transition-all"
                                >
                                    <Send size={20} className="mr-2" />
                                    <span>Send Message</span>
                                </button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Background Glows */}
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-primary/5 rounded-full blur-[100px] -z-10"></div>
            <div className="absolute top-1/2 right-0 w-60 h-60 bg-secondary/5 rounded-full blur-[100px] -z-10"></div>
        </section>
    )
}

export default Contact
