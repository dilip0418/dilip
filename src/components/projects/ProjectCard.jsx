/* eslint-disable react/prop-types */
import { useState } from "react";
import { Github, ExternalLink, Star, GitFork } from "lucide-react";

const ProjectCard = ({ project, index }) => {
    const maxVisibleContributors = 5;
    const [hoveredContributor, setHoveredContributor] = useState(null); // State to track the hovered contributor

    return (
        <div
            className={`group relative overflow-hidden rounded-xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-1 transition-all duration-300 hover:scale-[1.02] ${index % 2 === 0
                ? "hover:shadow-blue-200/50 dark:hover:shadow-blue-900/50"
                : "hover:shadow-purple-200/50 dark:hover:shadow-purple-900/50"
                } hover:shadow-xl`}
        >
            {/* Gradient border effect */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 transition-opacity duration-300 group-hover:opacity-20" />

            <div className="relative rounded-lg bg-white dark:bg-gray-800 p-6">
                {/* Project Type Badge */}
                <div className="absolute -right-2 -top-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-1 text-sm font-medium text-white shadow-lg">
                    {project.type}
                </div>

                {/* Header Section */}
                <div className="mb-4">
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                        {project.title}
                    </h3>
                    <p
                        className="mt-2 text-gray-600 dark:text-gray-300 leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: project.description }}
                    />
                </div>

                {/* Tech Stack */}
                <div className="mb-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                        <span
                            key={idx}
                            className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium transition-colors duration-200 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Project Stats */}
                <div className="mb-4 flex items-center gap-4 text-sm text-gray-600 dark:text-gray-300">
                    {project.stats && (
                        <>
                            <div className="flex items-center gap-1">
                                <Star size={16} className="text-yellow-400" />
                                <span>{project.stats.stars}</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <GitFork size={16} className="text-blue-400" />
                                <span>{project.stats.forks}</span>
                            </div>
                        </>
                    )}
                </div>

                {/* Links Section */}
                <div className="flex items-center gap-3">
                    {project.githubUrl && (
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 rounded-lg bg-gray-900 dark:bg-gray-700 px-4 py-2 text-sm text-white transition-transform hover:scale-105"
                        >
                            <Github size={16} />
                            View Source
                        </a>
                    )}
                    {project.liveUrl && (
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-2 text-sm text-white transition-transform hover:scale-105"
                        >
                            <ExternalLink size={16} />
                            Live Demo
                        </a>
                    )}
                </div>

                {/* Contributors Section */}
                {project.contributors && (
                    <div className="mt-6">
                        <h4 className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-300">
                            Contributors:
                        </h4>
                        <div className="flex items-center gap-2">
                            {project.contributors.slice(0, maxVisibleContributors).map((contributor, idx) => (
                                <div
                                    key={idx}
                                    className="relative flex items-center justify-center h-10 w-10 rounded-full bg-gray-100 dark:bg-gray-700"
                                    onMouseEnter={() => setHoveredContributor(contributor)}
                                    onMouseLeave={() => setHoveredContributor(null)}
                                    title={`${contributor.name} - ${contributor.role}`}
                                >
                                    {contributor.image ? (
                                        <img
                                            src={contributor.image}
                                            alt={contributor.name}
                                            className="h-full w-full rounded-full object-cover"
                                        />
                                    ) : (
                                        <span className="text-sm font-bold text-gray-500 dark:text-gray-300">
                                            {contributor.name.charAt(0).toUpperCase()}
                                        </span>
                                    )}

                                    {/* Tooltip Popup on Hover */}
                                    {hoveredContributor === contributor && (
                                        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 mt-2 p-2 bg-opacity-80 rounded-md shadow-lg text-sm text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-800 transition-all duration-200">
                                            <p className="font-semibold">{contributor.name}</p>
                                            <p className="text-gray-600 dark:text-gray-400">{contributor.role}</p>
                                        </div>
                                    )}
                                </div>
                            ))}

                            {/* Show "+X" for additional contributors */}
                            {project.contributors.length > maxVisibleContributors && (
                                <div
                                    className="flex items-center justify-center h-10 w-10 rounded-full bg-gray-300 dark:bg-gray-700 text-sm font-medium text-gray-700 dark:text-gray-300"
                                    title={`${project.contributors.length - maxVisibleContributors} more contributors`}
                                >
                                    +{project.contributors.length - maxVisibleContributors}
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProjectCard;
