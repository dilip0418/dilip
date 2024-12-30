import { useState, useEffect, useMemo } from 'react';
import { Search, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { IoArrowBackCircleOutline } from "react-icons/io5";
import BlogService from '../services/BlogService';
import Section from '../components/ui/Section';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';


const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(6);
    const navigate = useNavigate(); // Use useNavigate instead of useHistory
    const location = useLocation();

    useEffect(() => {
        // Prevent scroll to #hero if the user is on the blogs page
        if (location.hash === "#hero" || location.pathname === "/blogs") {
            // Do not scroll to #hero on this page
            window.history.replaceState(null, '', '/blogs');
        }
    }, [location]);

    const handleBackClick = () => {
        navigate('/'); // Navigate back to the homepage or any other page
    };

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await BlogService.getAllBlogs();
                if (response.success) {
                    setBlogs(response.data);
                } else {
                    console.error('Failed to fetch blogs:', response.message);
                }
            } catch (error) {
                console.error('Error fetching blogs:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchBlogs();
    }, []);

    // Get unique categories from blogs
    const categories = useMemo(() => {
        const cats = [...new Set(blogs.flatMap(blog => blog.categories))];
        return ['all', ...cats];
    }, [blogs]);

    // Filter blogs based on search and category
    const filteredBlogs = useMemo(() => {
        return blogs.filter(blog => {
            const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesCategory = selectedCategory === 'all' || blog.categories.includes(selectedCategory);
            return matchesSearch && matchesCategory;
        });
    }, [searchQuery, selectedCategory, blogs]);

    // Pagination logic
    const totalPages = Math.ceil(filteredBlogs.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const visibleBlogs = filteredBlogs.slice(startIndex, startIndex + itemsPerPage);

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { y: 20, opacity: 0 },
        show: { y: 0, opacity: 1 }
    };

    if (loading) {
        return (
            <Section>
                <div className="max-w-7xl mx-auto px-4 py-8 flex justify-center items-center min-h-screen">
                    <div className="space-y-8 w-full">
                        {/* Header Skeleton */}
                        <div className="flex justify-between items-center">
                            <div className="h-10 w-48 bg-gray-300 dark:bg-gray-700 rounded-lg animate-pulse"></div>
                            <div className="h-8 w-8 bg-gray-300 dark:bg-gray-700 rounded-full animate-pulse"></div>
                        </div>

                        {/* Search and Filter Skeleton */}
                        <div className="flex flex-col md:flex-row gap-4">
                            <div className="h-10 w-full md:w-1/2 bg-gray-300 dark:bg-gray-700 rounded-lg animate-pulse"></div>
                            <div className="h-10 w-32 bg-gray-300 dark:bg-gray-700 rounded-lg animate-pulse"></div>
                        </div>

                        {/* Blog Grid Skeleton */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[...Array(3)].map((_, index) => (
                                <div
                                    key={index}
                                    className="border rounded-lg overflow-hidden shadow-sm animate-pulse dark:border-gray-700"
                                >
                                    <div className="h-48 bg-gray-300 dark:bg-gray-700"></div>
                                    <div className="p-6 space-y-4">
                                        <div className="h-4 w-1/2 bg-gray-300 dark:bg-gray-700 rounded"></div>
                                        <div className="h-4 w-3/4 bg-gray-300 dark:bg-gray-700 rounded"></div>
                                        <div className="h-4 w-1/3 bg-gray-300 dark:bg-gray-700 rounded"></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Section>
        );
    }

    return (
        <Section>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-7xl mx-auto px-4 py-8"
            >
                <motion.div
                    initial={{ x: -20 }}
                    animate={{ x: 0 }}
                    className="flex justify-between items-center p-4"
                >
                    <h1 className="text-4xl font-bold dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        Blog Posts
                    </h1>
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <IoArrowBackCircleOutline
                            onClick={handleBackClick}
                            className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-200 
              transition-colors w-8 h-8 cursor-pointer"
                        />
                    </motion.div>
                </motion.div>

                <div className="flex flex-col md:flex-row gap-4 mb-8">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="relative flex-1"
                    >
                        <Search className="absolute left-3 top-3 text-gray-400 dark:text-gray-500" size={20} />
                        <input
                            type="text"
                            placeholder="Search blogs..."
                            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 
              dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:placeholder-gray-400
              transform transition-transform focus:scale-[1.02]"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </motion.div>
                    <motion.select
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500
            dark:bg-gray-800 dark:border-gray-700 dark:text-white hover:border-blue-500
            transition-all cursor-pointer"
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                        {categories.map(category => (
                            <option key={category} value={category}>
                                {category.charAt(0).toUpperCase() + category.slice(1)}
                            </option>
                        ))}
                    </motion.select>
                </div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8"
                >
                    {visibleBlogs.map(blog => (
                        <motion.a
                            key={blog.id}
                            variants={item}
                            whileHover={{ scale: 1.02, y: -5 }}
                            href={blog.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border rounded-lg overflow-hidden shadow-sm hover:shadow-lg
              dark:border-gray-700 dark:bg-gray-800 transition-all duration-300"
                        >
                            {blog.coverImage && (
                                <div className="overflow-hidden">
                                    <motion.img
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.3 }}
                                        src={blog.coverImage}
                                        alt={blog.title}
                                        className="w-full h-48 object-cover"
                                    />
                                </div>
                            )}
                            <div className="p-6">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="text-sm text-gray-500 dark:text-gray-400">
                                        {blog.source} • {blog.readTime}
                                    </span>
                                    <ExternalLink size={16} className="text-gray-400 dark:text-gray-500" />
                                </div>
                                <h2 className="text-xl font-semibold mb-2 dark:text-white group-hover:text-blue-600 
                dark:group-hover:text-blue-400 transition-colors">
                                    {blog.title}
                                </h2>
                                <p className="text-gray-600 dark:text-gray-300 mb-4">{blog.excerpt}</p>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-gray-500 dark:text-gray-400">
                                        {new Date(blog.date).toLocaleDateString()}
                                    </span>
                                    <span className="text-blue-600 dark:text-blue-400 transform transition-transform 
                  hover:translate-x-1">
                                        Read More
                                    </span>
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex flex-col sm:flex-row justify-between items-center gap-4"
                >
                    <div className="flex items-center gap-2">
                        <select
                            className="px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500
              dark:bg-gray-800 dark:border-gray-700 dark:text-white hover:border-blue-500
              transition-all cursor-pointer"
                            value={itemsPerPage}
                            onChange={(e) => {
                                setItemsPerPage(Number(e.target.value));
                                setCurrentPage(1);
                            }}
                        >
                            {[6, 9, 12, 15].map(num => (
                                <option key={num} value={num}>{num} per page</option>
                            ))}
                        </select>
                        <span className="text-gray-600 dark:text-gray-300">
                            Showing {startIndex + 1}-{Math.min(startIndex + itemsPerPage, filteredBlogs.length)} of {filteredBlogs.length}
                        </span>
                    </div>

                    <div className="flex items-center gap-2">
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="p-2 border rounded-lg disabled:opacity-50 disabled:cursor-not-allowed
              dark:border-gray-700 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700
              transition-colors"
                            onClick={() => setCurrentPage(prev => prev - 1)}
                            disabled={currentPage === 1}
                        >
                            <ChevronLeft size={20} />
                        </motion.button>
                        {[...Array(totalPages)].map((_, i) => (
                            <motion.button
                                key={i}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className={`w-10 h-10 rounded-lg ${currentPage === i + 1
                                    ? 'bg-blue-600 text-white dark:bg-blue-500'
                                    : 'border hover:bg-gray-50 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700'
                                    } transition-colors`}
                                onClick={() => setCurrentPage(i + 1)}
                            >
                                {i + 1}
                            </motion.button>
                        ))}
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="p-2 border rounded-lg disabled:opacity-50 disabled:cursor-not-allowed
              dark:border-gray-700 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700
              transition-colors"
                            onClick={() => setCurrentPage(prev => prev + 1)}
                            disabled={currentPage === totalPages}
                        >
                            <ChevronRight size={20} />
                        </motion.button>
                    </div>
                </motion.div>
            </motion.div>
        </Section>
    );
};

export default Blogs;
