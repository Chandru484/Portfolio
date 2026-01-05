import React from 'react'
import { Heart } from 'lucide-react'

const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="py-12 border-t border-slate-900 bg-slate-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div>
                        <div className="flex items-center space-x-2 mb-4">
                            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-sm">
                                CS
                            </div>
                            <span className="text-xl font-bold text-white">Chandru S</span>
                        </div>
                        <p className="text-slate-500 text-sm max-w-xs">
                            AI / ML Engineer & Full Stack Developer building the future of intelligent systems.
                        </p>
                    </div>

                    <div className="flex flex-col items-center md:items-end gap-4">
                        <nav className="flex space-x-6 text-sm font-medium text-slate-400">
                            <a href="#about" className="hover:text-primary transition-colors">About</a>
                            <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
                            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
                        </nav>
                        <div className="flex items-center text-slate-500 text-xs">
                            <span>© {currentYear} Chandru S. All rights reserved.</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
