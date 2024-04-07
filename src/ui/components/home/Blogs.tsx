import Section from "@/ui/shared/Section";
import sampleBlogs from "../../../../public/blogs.json";

const Blogs = () => {
  interface cardObjType {
    id: number;
    title: string;
    author: string;
    date: string;
    content: string;
    tags: string[];
  }

  return (
    <Section>
      <div>
        <h2>From the Journal</h2>
      </div>
      <div className="grid grid-cols-3 gap-5">
        {sampleBlogs.slice(0, 3).map((each: cardObjType) => (
          <div
            key={each.id}
            className="w-full bg-purple-50 overflow-hidden h-full border border-purple-950"
          >
            <div className="px-4 py-3">
              <h3 className="text-lg font-semibold text-purple-950">
                {each.title}
              </h3>
              <p className="text-sm text-purple-950">{each.author}</p>
              <p className="overflow-hidden text-ellipsis">{each.content}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Blogs;
