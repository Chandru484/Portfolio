import React, { useState, useEffect } from 'react'
import { Menu, X, Sun, Moon, Github, Linkedin, Mail, Terminal } from 'lucide-react'
import { cn } from '../lib/utils'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const [isDark, setIsDark] = useState(true)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const toggleTheme = () => {
        setIsDark(!isDark)
        // In a real app, you'd toggle a class on protected document.documentElement
    }

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ]

    return (
        <nav
            className={cn(
                'fixed top-0 w-full z-50 transition-all duration-300',
                isScrolled ? 'glass py-3' : 'bg-transparent py-5'
            )}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <div className="flex-shrink-0">
                        <a href="#" className="flex items-center space-x-2">
                            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-primary/20">
                                CS
                            </div>
                            <span className="text-xl font-bold bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent hidden sm:block">
                                Chandru S
                            </span>
                        </a>
                    </div>

                    {/* Desktop Nav */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-center space-x-8">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    target={link.target || "_self"}
                                    rel={link.target === "_blank" ? "noopener noreferrer" : ""}
                                    className="text-slate-300 hover:text-primary transition-colors duration-200 text-sm font-medium"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <div className="flex items-center space-x-4 ml-4 border-l border-slate-700 pl-4">
                                <a
                                    href="https://github.com/Chandru484"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-slate-400 hover:text-white transition-colors"
                                >
                                    <Github size={20} />
                                </a>
                                <a
                                    href="https://linkedin.com/in/chandru-s-547a75273/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-slate-400 hover:text-white transition-colors"
                                >
                                    <Linkedin size={20} />
                                </a>
                                <a
                                    href="https://leetcode.com/u/Chandru484/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-slate-400 hover:text-[#FFA116] transition-colors"
                                    title="LeetCode Profile"
                                >
                                    <Terminal size={20} />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center space-x-4">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-slate-300 hover:text-white"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <div className="md:hidden glass absolute top-full left-0 w-full py-4 px-4 shadow-xl border-t border-slate-800 animate-in fade-in slide-in-from-top-4">
                    <div className="flex flex-col space-y-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                target={link.target || "_self"}
                                rel={link.target === "_blank" ? "noopener noreferrer" : ""}
                                onClick={() => setIsOpen(false)}
                                className="text-slate-300 hover:text-primary text-lg font-medium"
                            >
                                {link.name}
                            </a>
                        ))}
                        <div className="flex items-center space-x-6 py-4 border-t border-slate-800">
                            <a href="https://github.com/Chandru484" className="text-slate-400">
                                <Github size={24} />
                            </a>
                            <a href="https://linkedin.com/in/chandru-s-547a75273/" className="text-slate-400">
                                <Linkedin size={24} />
                            </a>
                            <a href="https://leetcode.com/u/Chandru484/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#FFA116]">
                                <Terminal size={24} />
                            </a>
                            <a href="mailto:chandru4842193@gmail.com" className="text-slate-400">
                                <Mail size={24} />
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar
