/* eslint-disable react/prop-types */
const Container = ({ 
    children, 
    className = '',
    size = 'default'
  }) => {
    const sizes = {
      small: 'max-w-4xl',
      default: 'max-w-7xl',
      large: 'max-w-8xl'
    };
  
    return (
      <div className={`
        ${sizes[size]} 
        mx-auto px-4 sm:px-6 lg:px-8
        ${className}
      `}>
        {children}
      </div>
    );
  };
  
  export default Container;