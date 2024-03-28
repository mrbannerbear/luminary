import Section from "@/ui/shared/Section";
import Image from "next/image";
import Link from "next/link";

const Mission = () => {
  return (
    <Section
      className={"mt-16 flex flex-col lg:flex-row gap-10 justify-between"}
    >
      <div className="lg:w-1/2">
        <h2>Our Mission</h2>
        <p>
          At Luminary, we are committed to safeguarding our planet for future
          generations by championing environmental protection initiatives. Our
          mission is driven by a profound sense of responsibility to address
          pressing environmental challenges, including ocean pollution, wildlife
          conservation, deforestation, and the transition to renewable energy.
          <br />
          <br />
          Join us on our mission to protect our planet and strive for a
          sustainable future for generations to come. Together, we can make a
          meaningful impact and illuminate the path towards a brighter, greener
          world.
          <br />
          <br />
          <button className="border-purple-950 border-[1.5px]">
            <Link href={"/about"}>Learn More</Link>
          </button>
        </p>
      </div>
      <div className="flex flex-col  lg:w-1/2 gap-5">
        <div>
          <Image
            className="w-full"
            height={250}
            width={400}
            alt="One of our projects to provide energy for six villages using turbines"
            src={
              "https://images.unsplash.com/photo-1562519990-50eb51e282b2?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
          />
        </div>

        <div className="flex gap-5">
          <div className="w-1/2">
            <Image
            className="h-32 lg:h-40"
              height={250}
              width={300}
              alt="Ocean cleansing on the Arctic coast"
              src={
                "https://images.unsplash.com/photo-1582032951374-314efb7ccb76?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
            />
          </div>

          <div className="w-1/2">
            <Image
            className="h-32 lg:h-40"
              height={250}
              width={300}
              alt="An endangered tortoise, one of the many wildlife we are trying to protect"
              src={
                "https://images.unsplash.com/photo-1594225513799-a9f646521469?q=80&w=1862&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Mission;
