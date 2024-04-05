import Banner from "@/ui/components/home/Banner";
import Contribute from "@/ui/components/home/Contribute";
import Impact from "@/ui/components/home/Impact";
import Mission from "@/ui/components/home/Mission";
import Programs from "@/ui/components/home/Programs";

const page = () => {
  return (
    <div className="min-h-[200vh]">
      <Banner />
      <Mission />
      <Programs />
      <Contribute />
      <Impact/>
    </div>
  );
};

export default page;
