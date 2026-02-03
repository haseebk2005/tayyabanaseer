import ProjectGrid from "./ProjectGrid";

const Work = () => {
  return (
    <section
      className="relative z-10 flex w-full flex-col items-center justify-center bg-slate-950/95 py-20 md:py-24 lg:py-28"
      id="work"
    >
      <div className="w-[90%] max-w-6xl">
        <div className="mb-10 flex flex-col gap-4 md:mb-14">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-accent/80">
            Selected Projects
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-slate-50 md:text-4xl lg:text-[40px]">
            Recent work I&apos;m proud of
          </h2>
          <p className="max-w-2xl text-sm text-slate-300 md:text-base">
            A curated collection of interfaces, experiences and products I&apos;ve
            crafted for startups and brands.
          </p>
        </div>

        <ProjectGrid />
      </div>
    </section>
  );
};

export default Work;
