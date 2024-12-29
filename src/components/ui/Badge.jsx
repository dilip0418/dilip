/* eslint-disable react/prop-types */
const Badge = ({
    children,
    variant = 'default',
    className = ''
}) => {
    const variants = {
        default: 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200',
        blue: 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200',
        green: 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200',
    };

    return (
        <span className={`
        ${variants[variant]}
        px-2.5 py-0.5 rounded-full text-sm font-medium
        ${className}
      `}>
            {children}
        </span>
    );
};

export default Badge;