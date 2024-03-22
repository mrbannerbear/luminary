const Banner = () => {
  interface bannerContent {
    url: string;
    caption: string;
  }

  let bannerArray: bannerContent[] = [
    {
      url: "https://images.unsplash.com/photo-1611365892117-00ac5ef43c90?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      caption: "",
    },
    {
        url: "https://images.unsplash.com/photo-1439405326854-014607f694d7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        caption: ""
    },
    {
        url: "https://images.unsplash.com/photo-1567360615751-58281b426a5a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        caption: ""
    }
  ];

  return (
    <div
      style={{
        backgroundImage: `url(${bannerArray[0].url})`,
      }}
      className="min-h-screen bg-cover bg-center -mt-32 lg:-mt-20 z-40"
    >
      <div className="absolute w-full h-full bg-gradient-to-r from-black/50 via-transparent to-transparent"></div>
      ${bannerArray[0].caption}
    </div>
  );
};

export default Banner;
