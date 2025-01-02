import { motion } from 'framer-motion';
import AnimatedText from '../ui/AnimatedText';
import SocialHandles from '../ui/SocialHandles';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { ArrowRight, Download, ExternalLink } from 'lucide-react';

const Hero = () => {
    return (
        <section id="hero">
            <div className="min-h-screen relative">
                {/* Background decoration */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 z-0">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
                    <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
                    <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 min-h-screen flex items-center justify-center px-4 pt-16">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="mb-6"
                        >
                            <p className="text-blue-600 dark:text-blue-400 font-medium mb-4">
                                Hello, I&apos;m
                            </p>
                            <div className="text-center">
                                <AnimatedText delay={0.2}>
                                    <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                                        Dilip Kumar B K
                                    </h1>
                                </AnimatedText>
                            </div>
                            <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-300">
                                Full Stack Developer
                            </h2>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto"
                        >
                            I craft exceptional digital experiences that merge elegant design
                            with robust functionality. Specializing in modern web technologies
                            and user-centric solutions.
                        </motion.p>

                        {/* Main CTA */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="mb-8"
                        >
                            <HashLink
                                smooth
                                to="#projects"
                                className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
                            >
                                View my Work
                                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </HashLink>
                        </motion.div>

                        {/* Secondary Actions */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="flex flex-wrap justify-center items-center gap-6 mb-12"
                        >
                            <a
                                href="https://drive.google.com/file/d/1w6Msh48PXV_DOyBqu28XT-RjswlwnU_o"
                                download="Resume_DilipKumar.pdf"
                                target='_blank'
                                className="inline-flex items-center gap-2 px-6 py-2 border-2 border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 hover:bg-blue-500 dark:hover:bg-blue-600 text-gray-800 dark:text-gray-200 hover:text-white dark:hover:text-white rounded-lg font-medium transition-all duration-300 shadow-sm hover:shadow-lg group"
                            >
                                <Download className="w-5 h-5 transition-transform transform group-hover:-translate-y-1" />
                                Resume
                            </a>

                            <Link
                                to="/blogs"
                                className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors group"
                            >
                                Read Blog
                                <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                            <HashLink
                                smooth
                                to="#contact"
                                className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors group"
                            >
                                Contact Me
                                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </HashLink>
                        </motion.div>

                        {/* Social Links */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            className="flex justify-center space-x-6"
                        >
                            <SocialHandles />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;