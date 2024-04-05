import Section from "@/ui/shared/Section";
import data from "../../../../public/homePrograms.json";
import Link from "next/link";

const Programs = () => {
  return (
    <Section>
      <h2>What Are We Working On?</h2>
      <p>
        Take a look at our current programs, collaborations with local
        governments, scientists & more.
      </p>

      <div className="mt-10">
        <div className="flex justify-center lg:justify-between flex-wrap gap-5 lg:gap-0">
          {data.slice(0, 3).map((each) => (
            <div
              key={each.id}
              className="h-52 bg-cover relative"
              style={{ backgroundImage: `url(${each.image})` }}
            >
              <div className="absolute w-full h-full bg-gradient-to-b from-transparent to-black"></div>

              <div className="px-6 py-4 flex justify-center items-center h-full w-full z-40">
                <Link href={`/projects/project_${each.id}`}>
                  <h3 className="relative top-16 text-purple-50 hover:underline">
                    {each.name}
                  </h3>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center mt-10">
          <Link href={"/projects"}>
            <button>All Projects</button>
          </Link>
        </div>
      </div>
    </Section>
  );
};

export default Programs;
