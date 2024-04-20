const Section = ({children, className}: any) => {
    return (
        <div className={`mb-16 px-8 lg:px-24 min-h-[60vh] py-3 lg:py-6 ${className}`}>
            {children}
        </div>
    );
};

export default Section;