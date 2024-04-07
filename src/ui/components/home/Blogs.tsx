import Section from "@/ui/shared/Section";
import sampleBlogs from "../../../../public/blogs.json";
import Link from "next/link";

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
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
        {sampleBlogs.slice(0, 3).map((each: cardObjType) => (
          <div
            key={each.id}
            className="w-full bg-purple-50 border border-purple-950 overflow-hidden"
          >
            <div className="px-4 py-3 relative">
              <h3 className="text-lg font-semibold text-purple-950">
                {each.title}
              </h3>
              <p className="text-sm text-purple-950 my-2">{each.author}</p>
              <p className="overflow-hidden text-ellipsis mb-2">{each.content.slice(0, 100)}...</p>
              <Link href={`/blog/${each.id}`}><span className="underline">Read More</span></Link>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <Link href={"/blog"}>
        <button>
            All Blogs
        </button>
        </Link>
      </div>
    </Section>
  );
};

export default Blogs;
