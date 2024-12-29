import { useEffect, useState } from 'react';

export const useActiveSection = (sectionIds) => {
    const [activeSection, setActiveSection] = useState(sectionIds[0]); // Default to first section (e.g., "home")

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                // Sort visible entries by visibility ratio
                const visibleEntries = entries
                    .filter(entry => entry.isIntersecting)
                    .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

                // Update the active section based on the most visible entry
                if (visibleEntries.length > 0) {
                    setActiveSection(visibleEntries[0].target.id);
                } else if (window.scrollY === 0) {
                    // Default to the first section if at the top of the page
                    setActiveSection(sectionIds[0]);
                }
            },
            {
                root: null, // Viewport
                threshold: Array.from({ length: 11 }, (_, i) => i * 0.1), // Precise visibility detection
            }
        );

        const elements = sectionIds.map((id) => document.getElementById(id));
        elements.forEach((el) => el && observer.observe(el));

        return () => observer.disconnect();
    }, [sectionIds]);

    return activeSection;
};
