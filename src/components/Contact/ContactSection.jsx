/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { Mail, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import leetCode from '../../assets/leetcode.png';
import codingNinjas from '../../assets/coding-ninjas.png';
import emailjs from '@emailjs/browser';

// Fade In Animation
const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

// Slide In Animation for success/error message
const slideIn = {
    hidden: { x: '-100%' },
    visible: { x: '0%', transition: { duration: 0.5 } },
};

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [status, setStatus] = useState({ type: '', message: '' });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus({ type: '', message: '' });

        try {
            // Replace with your EmailJS service details
            const emailJsConfig = {
                serviceId: import.meta.env.VITE_EMAIL_SERVICE_ID,
                templateId: import.meta.env.VITE_EMAIL_TEMPLATE_ID,
                publicKey: import.meta.env.VITE_EMAIL_PUBLIC_KEY,
            }
            const templateParams = {
                name: formData.name,
                email: formData.email,
                subject: formData.subject,
                message: formData.message,
            };

            // Example EmailJS send - you'll need to replace with your actual service
            await emailjs.send(emailJsConfig.serviceId, emailJsConfig.templateId, templateParams, emailJsConfig.publicKey);

            setStatus({
                type: 'success',
                message: 'Message sent successfully! I will get back to you soon.',
            });
            setFormData({ name: '', email: '', subject: '', message: '' });
        } catch (error) {
            setStatus({
                type: 'error',
                message: error ?? 'Something went wrong. Please try again later.',
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="contact" className="py-16">
            <div className="max-w-6xl mx-auto px-4">
                <div className="mb-12 text-center">
                    <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4 flex items-center justify-center gap-2">
                        <motion.span
                            initial={{ rotate: 0 }}
                            animate={{ rotate: [0, 15, -10, 15, 0] }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                repeatType: "loop",
                            }}
                            className="inline-block text-white dark:text-gray-900 text-2xl"
                            style={{
                                transform: 'scaleX(-1)',
                                fontSize: '2.3rem'
                            }} // Flips the emoji horizontally
                        >
                            👋
                        </motion.span>
                        Get In Touch
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Have a question or want to work together? Feel free to reach out!
                    </p>
                </div>



                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeIn}
                        className="space-y-8"
                    >
                        <div className="bg-gradient-to-br from-indigo-50 to-blue-100 dark:from-gray-900 dark:to-gray-950 p-6 rounded-2xl">
                            <div className="prose dark:prose-invert">
                                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                                    Let&apos;s Connect
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300">
                                    Whether you have a question, project idea, or just want to say hello,
                                    I&apos;m always open to discussing new opportunities and connections.
                                </p>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-950 p-6 rounded-2xl">
                            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                                Contact Information
                            </h3>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <Mail className="text-blue-500 dark:text-blue-400" />
                                    <a
                                        href="mailto:sudheer0418@gmail.com"
                                        className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                                    >
                                        sudheer0418@gmail.com
                                    </a>
                                </div>

                                <div className="flex items-center gap-3">
                                    <img
                                        src={leetCode} // Replace with the actual path to the icon
                                        alt="LeetCode"
                                        className="w-6 h-6"
                                    />
                                    <a
                                        href="https://leetcode.com/u/dilip0418/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400"
                                    >
                                        dilip0418
                                    </a>
                                </div>

                                <div className="flex items-center gap-3">
                                    <img
                                        src={codingNinjas} // Replace with the actual path to the icon
                                        alt="Coding Ninjas"
                                        className="w-6 h-6"
                                    />
                                    <a
                                        href="https://www.naukri.com/code360/profile/dilipSudheer"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-600 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400"
                                    >
                                        Coding Ninjas Profile
                                    </a>
                                </div>

                                {/* Add more links as needed */}
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeIn}
                        className="bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-100 dark:from-gray-900 dark:bg-gray-950 rounded-2xl shadow-lg p-8"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                                    >
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-colors"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-colors"
                                    />
                                </div>
                            </div>

                            <div>
                                <label
                                    htmlFor="subject"
                                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                                >
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    required
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-colors"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                                >
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={5}
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-colors resize-none"
                                />
                            </div>

                            {status.message && (
                                <motion.div
                                    initial="hidden"
                                    animate="visible"
                                    variants={slideIn}
                                    className={`p-4 rounded-lg ${status.type === 'success'
                                        ? 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300'
                                        : 'bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300'
                                        }`}
                                >
                                    <div className="flex items-center gap-2">
                                        {status.type === 'success' ? (
                                            <CheckCircle className="w-5 h-5" />
                                        ) : (
                                            <AlertCircle className="w-5 h-5" />
                                        )}
                                        <span>{status.message}</span>
                                    </div>
                                </motion.div>
                            )}

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                type="submit"
                                className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium py-3 px-6 rounded-lg hover:from-blue-600 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition-all duration-200 flex items-center justify-center gap-2"
                            >
                                {loading ? (
                                    <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                ) : (
                                    <>
                                        <Send className="w-5 h-5" />
                                        Send Message
                                    </>
                                )}
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
