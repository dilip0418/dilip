/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useActiveSection } from '../hooks/useActiveSection';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const { theme, toggleTheme } = useTheme();
    const location = useLocation();
    const menuRef = useRef(null); // Ref for menu container

    // Define section IDs to track
    const sectionIds = ['hero', 'about', 'journey', 'projects', 'contact'];
    const activeSection = useActiveSection(sectionIds);

    // Update the URL hash based on the active section
    useEffect(() => {
        if (activeSection) {
            window.history.replaceState(null, '', `#${activeSection}`);
        }
    }, [activeSection]);

    // Change navbar appearance on scroll
    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => setIsOpen(false), [location]);

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isOpen]);

    const navLinks = [
        { name: 'Home', path: '#hero' },
        { name: 'About', path: '#about' },
        { name: 'Journey', path: '#journey' },
        { name: 'Projects', path: '#projects' },
        { name: 'Contact', path: '#contact' },
    ];

    // Conditionally render links based on the page
    const isOnBlogsPage = location.pathname === '/blogs';

    const NavLink = ({ path, children }) => {
        const isActive = activeSection && `#${activeSection}` === path;
        return (
            <HashLink
                smooth
                to={path}
                className={`relative px-3 py-2 transition-colors duration-200 ${isActive
                    ? 'text-blue-600 dark:text-blue-400'
                    : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                    }`}
            >
                {children}
                {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 dark:bg-blue-400 rounded-full" />
                )}
            </HashLink>
        );
    };

    return (
        <nav
            className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled
                ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg'
                : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <HashLink smooth to="/" className="flex items-center space-x-2">
                        <span className="text-xl font-bold text-gray-900 dark:text-white">
                            Dilip
                        </span>
                    </HashLink>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-4">
                        {!isOnBlogsPage && navLinks.map((link) => (
                            <NavLink key={link.path} path={link.path}>
                                {link.name}
                            </NavLink>
                        ))}
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-lg text-gray-600 dark:text-gray-300 
                                hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                            aria-label="Toggle theme"
                        >
                            {theme === 'light' ? (
                                <Moon className="w-5 h-5" />
                            ) : (
                                <Sun className="w-5 h-5" />
                            )}
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 rounded-lg text-gray-600 dark:text-gray-300 
                            hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            <div
                ref={menuRef}
                className={`md:hidden transition-all duration-300 ease-in-out ${isOpen
                    ? 'max-h-96 opacity-100'
                    : 'max-h-0 opacity-0 pointer-events-none'
                    }`}
            >
                <div className="px-4 py-2 space-y-1 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md">
                    {!isOnBlogsPage && navLinks.map((link) => (
                        <HashLink
                            key={link.path}
                            smooth
                            to={link.path}
                            className="block px-3 py-2 rounded-lg text-gray-600 dark:text-gray-300 
                                hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                            onClick={() => setIsOpen(false)} // Close menu on link click
                        >
                            {link.name}
                        </HashLink>
                    ))}
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-lg text-gray-600 dark:text-gray-300 
                            hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                        aria-label="Toggle theme"
                    >
                        {theme === 'light' ? (
                            <>
                                <h4>Dark Mode</h4> <Moon className="w-5 h-5" />
                            </>
                        ) : (
                            <>
                                <h4>Light Mode</h4> <Sun className="w-5 h-5" />
                            </>
                        )}
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
