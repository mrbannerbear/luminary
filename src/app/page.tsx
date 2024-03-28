import Banner from "@/ui/components/home/Banner";
import Mission from "@/ui/components/home/Mission";
import Programs from "@/ui/components/home/Programs";

const page = () => {
    return (
        <div className="min-h-[200vh]">
            <Banner/>
            <Mission/>
            <Programs/>
        </div>
    );
};

export default page;