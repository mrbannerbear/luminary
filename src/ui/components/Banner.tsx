import Image from "next/image";

const Banner = () => {
  return (
    <div
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1417144527634-653e3dec77b2?q=80&w=1798&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
      }}
      className="min-h-screen bg-cover bg-center -mt-32 lg:-mt-20"
    ></div>
  );
};

export default Banner;
