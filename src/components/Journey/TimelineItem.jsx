/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Briefcase, GraduationCap, Trophy, ChevronRight } from 'lucide-react';

const TimelineItem = ({ item }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const getIcon = (type) => {
        switch (type) {
            case 'work':
                return <Briefcase className="text-blue-500 dark:text-blue-400" />;
            case 'education':
                return <GraduationCap className="text-purple-500 dark:text-purple-400" />;
            case 'achievement':
                return <Trophy className="text-yellow-500 dark:text-yellow-400" />;
            default:
                return null;
        }
    };

    const getTypeStyles = (type) => {
        switch (type) {
            case 'work':
                return 'bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300';
            case 'education':
                return 'bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300';
            case 'achievement':
                return 'bg-yellow-50 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-300';
            default:
                return '';
        }
    };

    return (
        <div className="relative pl-8 pb-12 group">
            {/* Timeline dot */}
            <div className="absolute left-0 top-2 h-6 w-6 rounded-full bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 flex items-center justify-center">
                {getIcon(item.type)}
            </div>

            <div className="group-hover:translate-x-2 transition-transform duration-300">
                {/* Timeline header */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-2">
                    <span className={`text-sm font-medium px-3 py-1 rounded-full ${getTypeStyles(item.type)} w-fit`}>
                        {item.duration}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {item.title}
                    </h3>
                </div>

                <div className="text-lg text-gray-700 dark:text-gray-200 mb-2">
                    {item.organization}
                </div>

                {/* Mobile: Expandable content */}
                <div className="block sm:hidden">
                    <div
                        className={`text-gray-600 dark:text-gray-300 overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-96' : 'max-h-20'
                            }`}
                    >
                        <p
                            className="mb-4"
                            dangerouslySetInnerHTML={{ __html: item.description }}
                        />
                        {item.highlights && (
                            <ul className="list-disc list-inside space-y-1 ml-4">
                                {item.highlights.map((highlight, idx) => (
                                    <li key={idx} className="text-gray-600 dark:text-gray-300">
                                        {highlight}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="flex items-center gap-1 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 mt-2 text-sm font-medium"
                    >
                        {isExpanded ? 'Show less' : 'Show more'}
                        <ChevronRight
                            className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-90' : ''
                                }`}
                        />
                    </button>
                </div>

                {/* Desktop: Full content */}
                <div className="hidden sm:block text-gray-600 dark:text-gray-300">
                    <p
                        className="mb-4"
                        dangerouslySetInnerHTML={{ __html: item.description }}
                    />
                    {item.highlights && (
                        <ul className="list-disc list-inside space-y-1 ml-4">
                            {item.highlights.map((highlight, idx) => (
                                <li key={idx} className="text-gray-600 dark:text-gray-300">
                                    {highlight}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TimelineItem;
