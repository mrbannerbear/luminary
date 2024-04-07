import Section from "@/ui/shared/Section";
import Image from "next/image";

const Newsletter = () => {
  return (
    <Section>
      <div className="flex flex-col px-6 lg:flex-row justify-center bg-purple-950 text-purple-50 py-6 gap-6 lg:gap-10 items-center">
        <div className="max-w-sm">
          <h2>Subscribe to Our Newsletter</h2>
          <p className="-mt-3 mb-4">Get all the news about our projects, new developments & more!</p>
          <form action="" className="flex flex-col gap-2" onSubmit={() => alert("hi")}>
            <input
              type="text"
              placeholder="Name"
              name="name"
              className="text-purple-950 border-[1.5px] py-1 px-2 border-purple-50
                            outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              className="text-purple-950 border-[1.5px] py-1 px-2 border-purple-50
                            outline-none"
            />
            <input type="button" value="Subscribe" className="btn" />
          </form>
        </div>
        <div>
          <Image
            alt="Photo of a person holding a bulb under sunlight that symbolizes green energy"
            height={300}
            width={300}
            src={
             "https://images.unsplash.com/photo-1470081766425-a75c92adff0b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
          />
        </div>
      </div>
    </Section>
  );
};

export default Newsletter;
