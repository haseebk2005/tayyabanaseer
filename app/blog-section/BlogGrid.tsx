import BlogCard from "./BlogCard";
import { blogDetails } from "./blogDetails";
import AnimatedWords2 from "../animations/AnimatedWords2";
import { monaSans } from "../fonts/monaSans";
import AnimatedBody from "../animations/AnimatedBody";

const Blog = () => {
  return (
    <section className="z-10 flex w-full flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-slate-950 via-slate-950 to-brand-deep/95 pt-24 pb-24 md:pb-32">
      <div
        className={`relative mb-16 flex w-full flex-col items-center justify-center gap-8 text-slate-50 sm:items-center lg:max-w-[1440px]`}
      >
        {" "}
        <AnimatedWords2
          title={"Blog"}
          style={`flex max-w-[500px] pr-5 flex-col items-start text-left ${monaSans.className} font-extrabold uppercase leading-[0.9em] text-slate-50 sm:max-w-full sm:flex-row sm:items-center sm:justify-center sm:text-center lg:text-center text-[clamp(52px,8vw,110px)]`}
        />
        <AnimatedBody
          text="I write about frontend, design systems and the lessons I learn while building products."
          className="w-[90%] text-center text-[13px] font-semibold uppercase text-slate-300 sm:w-[500px] md:w-[550px] md:text-[14px]"
        />
      </div>
      <div className="grid w-[90%] max-w-[1200px] grid-cols-1 place-content-center place-items-stretch gap-x-6 gap-y-6 sm:grid-cols-2 md:grid-cols-3">
        {blogDetails.map((blog, index) => {
          return (
            <BlogCard
              key={index}
              title={blog.title}
              image={blog.image}
              url={blog.url}
              date={blog.date}
              available={blog.available}
              index={index}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Blog;
