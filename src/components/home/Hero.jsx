import { motion } from 'framer-motion';
import AnimatedText from '../ui/AnimatedText';
import SocialHandles from '../ui/SocialHandles';
import { Link } from 'react-router-dom';  // Using Link for route navigation
import { HashLink } from 'react-router-hash-link';

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
                            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto"
                        >
                            I craft exceptional digital experiences that merge elegant design
                            with robust functionality. Specializing in modern web technologies
                            and user-centric solutions.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
                        >
                            <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors shadow-lg hover:shadow-xl">
                                <HashLink smooth to='#projects'>View my Work</HashLink>
                            </button>
                            <button className="px-8 py-3 border-2 border-gray-800 dark:border-white hover:bg-gray-800 hover:text-white dark:hover:bg-white dark:text-white dark:hover:text-black rounded-lg font-medium transition-all">
                                <HashLink smooth to='#contact'>Get in Touch</HashLink>
                            </button>
                            {/* Blogs Button */}
                            <Link to="/blogs" className="px-8 py-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-lg font-medium transition-all shadow-lg hover:shadow-xl">
                                Read My Blogs
                            </Link>
                        </motion.div>

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
