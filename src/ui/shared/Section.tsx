const Section = ({children, className}: any) => {
    return (
        <div className={`mb-16 px-8 lg:px-24 ${className} min-h-[70vh] py-3 lg:py-6`}>
            {children}
        </div>
    );
};

export default Section;