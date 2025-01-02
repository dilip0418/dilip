const BlogService = {
    fetchDevToBlogs: async () => {
        const DevToUsername = import.meta.env.VITE_DEVTO_USERNAME;
        try {
            const url = `https://dev.to/api/articles?username=${DevToUsername}&per_page=8`;
            const response = await fetch(url);
            console.log(response);



            // Check if response is successful
            if (!response.ok) {
                return { success: false, message: 'Failed to fetch Dev.to blogs.' };
            }

            const data = await response.json();
            console.log(data);


            // Check if data is valid
            if (data && Array.isArray(data) && data.length > 0) {
                return {
                    success: true,
                    data: data.map(article => ({
                        id: article.id,
                        title: article.title,
                        excerpt: article.description,
                        categories: article.tag_list || ['General'],
                        date: article.published_at,
                        readTime: `${Math.ceil(article.reading_time_minutes)} min`,
                        url: article.url,
                        source: 'dev.to',
                        coverImage: article.cover_image || '/path/to/default-image.jpg',
                    })),
                };
            } else {
                return { success: true, message: 'No blogs found on Dev.to.' };  // Success even if no blogs are found
            }
        } catch (error) {
            console.error("Error fetching Dev.to blogs:", error);
            return { success: false, message: "An error occurred. Please try again later." };
        }
    },

    fetchMediumBlogs: async () => {
        try {
            const MediumUsername = import.meta.env.VITE_MEDIUM_USERNAME;
            const url = `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${MediumUsername}`;
            const response = await fetch(url);

            // Check if response is successful
            if (!response.ok) {
                return { success: false, message: 'Failed to fetch Medium blogs.' };
            }

            const data = await response.json();

            // Check if the status is ok and data exists
            if (data.status === 'ok' && data && Array.isArray(data.items) && data.items.length > 0) {
                return {
                    success: true,
                    data: data.items.map(article => ({
                        id: article.guid,
                        title: article.title,
                        excerpt: article.description.replace(/<[^>]*>/g, '').substring(0, 150) + '...',
                        categories: article.categories || ['General'],
                        date: article.pubDate,
                        readTime: '5 min', // Medium RSS doesn't provide reading time
                        url: article.link,
                        source: 'medium',
                        coverImage: article.thumbnail || '/path/to/default-image.jpg',
                    })),
                };
            } else {
                return { success: true, message: 'No blogs found on Medium.' }; // Success even if no blogs are found
            }
        } catch (error) {
            console.error("Error fetching Medium blogs:", error);
            return { success: false, message: "An error occurred. Please try again later." };
        }
    },

    getAllBlogs: async () => {
        try {
            const [devtoBlogs, mediumBlogs] = await Promise.all([
                BlogService.fetchDevToBlogs(),
                BlogService.fetchMediumBlogs(),
            ]);

            // If at least one source has blogs, proceed
            const allBlogs = [
                ...(devtoBlogs.success && devtoBlogs.data ? devtoBlogs.data : []),
                ...(mediumBlogs.success && mediumBlogs.data ? mediumBlogs.data : [])
            ];

            if (allBlogs.length > 0) {
                // Sort all blogs by date
                allBlogs.sort((a, b) => new Date(b.date) - new Date(a.date));

                return {
                    success: true,
                    data: allBlogs,
                };
            } else {
                // Both sources returned empty or failed
                return { success: false, message: 'No blogs found from both sources.' };
            }
        } catch (error) {
            console.error("Error fetching all blogs:", error);
            return { success: false, message: "An error occurred. Please try again later." };
        }
    },
};

export default BlogService;
