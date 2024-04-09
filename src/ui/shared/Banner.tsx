const Banner = ({ img, title, subtitle }: any) => {
  return (
    <div
      style={{
        backgroundImage: `url(${img})`,
      }}
      className="h-[55vh]  bg-cover bg-center z-40 flex justify-center items-center lg:items-end"
    >
        <div className="w-1/3 mx-auto text-center lg:top-12 relative">
            <div className="bg-purple-50 py-3">
                <h1 className="text-4xl">{title}</h1>
            </div>
            <div className="bg-purple-950 text-purple-50 py-3">
                <p>{subtitle}</p>
            </div>
        </div>
    </div>
  );
};

export default Banner;
