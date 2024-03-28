const Section = ({children, className}: any) => {
    return (
        <div className={`mb-16 px-4 lg:px-24 ${className}`}>
            {children}
        </div>
    );
};

export default Section;