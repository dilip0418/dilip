/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
const Card = ({
    children,
    className = '',
    hover = false,
    ...props
}) => {
    return (
        <div
            className={`
          bg-white dark:bg-gray-900 
          rounded-xl shadow-md
          ${hover ? 'hover:shadow-xl transition-shadow duration-300' : ''}
          ${className}
        `}
            {...props}
        >
            {children}
        </div>
    );
};

// Optional CardHeader and CardBody components for consistent spacing
Card.Header = ({ children, className = '' }) => (
    <div className={`p-4 border-b dark:border-gray-700 ${className}`}>
        {children}
    </div>
);

Card.Body = ({ children, className = '' }) => (
    <div className={`p-4 ${className}`}>
        {children}
    </div>
);

export default Card;