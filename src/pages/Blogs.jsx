import { useState, useEffect, useMemo } from 'react';
import { Search, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { IoArrowBackCircleOutline } from "react-icons/io5";
import BlogService from '../services/BlogService';
import Section from '../components/ui/Section';
import { useLocation, useNavigate } from 'react-router-dom';


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

    if (loading) {
        return (
            <div className="max-w-7xl mx-auto px-4 py-8 flex justify-center items-center min-h-screen">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 dark:border-blue-400"></div>
            </div>
        );
    }

    return (
        <Section>
            <div className="max-w-7xl mx-auto px-4 py-8">
                {/* Header */}
                <div className="flex justify-between items-center p-4">
                    <h1 className="text-4xl font-bold dark:text-white">Blog Posts</h1>

                    <IoArrowBackCircleOutline
                        onClick={handleBackClick}
                        className="text-gray-600 dark:text-gray-300 
                        hover:text-gray-800 dark:hover:text-gray-200 transition-colors w-8 h-8 cursor-pointer"
                    />
                </div>


                {/* Search and Filter Section */}
                <div className="flex flex-col md:flex-row gap-4 mb-8">
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-3 text-gray-400 dark:text-gray-500" size={20} />
                        <input
                            type="text"
                            placeholder="Search blogs..."
                            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 
                        dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:placeholder-gray-400"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                    <select
                        className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500
                    dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                        {categories.map(category => (
                            <option key={category} value={category}>
                                {category.charAt(0).toUpperCase() + category.slice(1)}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    {visibleBlogs.map(blog => (
                        <a
                            key={blog.id}
                            href={blog.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow
                    dark:border-gray-700 dark:bg-gray-800"
                        >
                            {blog.coverImage && (
                                <img
                                    src={blog.coverImage}
                                    alt={blog.title}
                                    className="w-full h-48 object-cover"
                                />
                            )}
                            <div className="p-6">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="text-sm text-gray-500 dark:text-gray-400">
                                        {blog.source} • {blog.readTime}
                                    </span>
                                    <ExternalLink size={16} className="text-gray-400 dark:text-gray-500" />
                                </div>
                                <h2 className="text-xl font-semibold mb-2 dark:text-white">{blog.title}</h2>
                                <p className="text-gray-600 dark:text-gray-300 mb-4">{blog.excerpt}</p>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-gray-500 dark:text-gray-400">
                                        {new Date(blog.date).toLocaleDateString()}
                                    </span>
                                    <span className="text-blue-600 dark:text-blue-400">Read More</span>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>

                {/* Pagination Controls */}
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                    <div className="flex items-center gap-2">
                        <select
                            className="px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500
                        dark:bg-gray-800 dark:border-gray-700 dark:text-white"
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
                        <button
                            className="p-2 border rounded-lg disabled:opacity-50 disabled:cursor-not-allowed
                        dark:border-gray-700 dark:text-white"
                            onClick={() => setCurrentPage(prev => prev - 1)}
                            disabled={currentPage === 1}
                        >
                            <ChevronLeft size={20} />
                        </button>
                        {[...Array(totalPages)].map((_, i) => (
                            <button
                                key={i}
                                className={`w-10 h-10 rounded-lg ${currentPage === i + 1
                                    ? 'bg-blue-600 text-white dark:bg-blue-500'
                                    : 'border hover:bg-gray-50 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700'
                                    }`}
                                onClick={() => setCurrentPage(i + 1)}
                            >
                                {i + 1}
                            </button>
                        ))}
                        <button
                            className="p-2 border rounded-lg disabled:opacity-50 disabled:cursor-not-allowed
                        dark:border-gray-700 dark:text-white"
                            onClick={() => setCurrentPage(prev => prev + 1)}
                            disabled={currentPage === totalPages}
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Blogs;
