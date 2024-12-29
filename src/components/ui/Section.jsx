/* eslint-disable react/prop-types */
const Section = ({
    children,
    className = '',
    id,
    ...props
}) => {
    return (
        <section
            id={id}
            className={`
          py-16 md:py-24
          ${className}
        `}
            {...props}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {children}
            </div>
        </section>
    );
};

export default Section;