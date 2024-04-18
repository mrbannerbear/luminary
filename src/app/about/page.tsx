import Headline from "@/ui/components/about/Headline";
import Banner from "@/ui/shared/Banner";


const page = () => {
  return (
    <div>
      <Banner
        img="https://images.unsplash.com/photo-1452179535021-368bb0edc3a8?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="About Us"
        subtitle="Who We Are & What We Do"
      />

<Headline/>
      
    </div>
  );
};

export default page;
