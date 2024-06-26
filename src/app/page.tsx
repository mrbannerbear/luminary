import Banner from "@/ui/components/home/Banner";
import Blogs from "@/ui/components/home/Blogs";
import Contribute from "@/ui/components/home/Contribute";
import Impact from "@/ui/components/home/Impact";
import Mission from "@/ui/components/home/Mission";
import Newsletter from "@/ui/components/home/Newsletter";
import Programs from "@/ui/components/home/Programs";

const page = () => {
  return (
    <div className="min-h-[200vh]">
      <Banner />
      <Mission />
      <Programs />
      <Impact/>
      <Contribute />
      <Blogs/>
      <Newsletter/>
    </div>
  );
};

export default page;
