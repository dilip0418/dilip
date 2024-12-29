/* eslint-disable react/prop-types */
const IconLink = ({ href, children, ariaLabel }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel}
        className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
    >
        {children}
    </a>
);

export default IconLink;