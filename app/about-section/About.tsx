import SongCarousel from "./SongCarousel";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";

const About = () => {
  return (
    <section
      className="relative z-10 w-full items-center justify-center overflow-hidden bg-gradient-to-b from-slate-950 via-brand-deep/95 to-slate-950 pt-24 pb-32 md:pt-28 md:pb-40 lg:pt-32 lg:pb-48"
      id="about"
    >
      <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
        <AnimatedTitle
          text={
            "I MAKE BRANDS BEAUTIFUL, WEBSITES POWERFUL AND CONTENT CAPTIVATING."
          }
          className={
            "mb-10 text-left text-[34px] font-bold leading-[0.95em] tracking-tight text-slate-50 sm:text-[40px] md:mb-16 md:text-[52px] lg:text-[64px]"
          }
          wordSpace={"mr-[14px]"}
          charSpace={"mr-[0.001em]"}
        />

        <div className="mx-auto flex w-[100%] flex-col lg:max-w-[1200px] lg:flex-row lg:gap-20">
          <div className="mb-10 flex w-[100%] flex-col gap-4 text-[16px] font-medium leading-relaxed tracking-wide text-slate-100 md:mb-16 md:gap-6 md:text-[18px] md:leading-relaxed lg:mb-16 lg:max-w-[90%] lg:text-[20px] ">
            <AnimatedBody
              text={
                "I specialize in crafting high-converting landing pages and websites for SaaS, Web3 & AI startups. I'm passionate about building software that makes a difference."
              }
            />
            <AnimatedBody
              text={
                "Whether I’m designing a sleek user interface or coding a complex application, I’m always striving to create something unique and innovative. I love experimenting with new technologies and staying up-to-date with the latest trends in the tech world."
              }
              className={"hidden"}
            />
            <AnimatedBody
              text={
                "Beyond my work as a frontend developer, I'm an active leader in tech communities on campus. As a member of the Google Developer Student Clubs and Microsoft Learn Student Ambassadors, I've led workshops and mentored other students."
              }
            />
            <AnimatedBody
              text={
                "When I'm not coding, you can find me binge-watching anime, hanging out with friends, cheering on Manchester United, or discovering new music in my favorite genres like RnB, UK Drill, and Chill Rap."
              }
            />
            <AnimatedBody
              text={
                "I'm currently working on some exciting projects that I can't wait to share with you. But I’m always open to new opportunities and collaborations."
              }
            />
          </div>

          <div className="mb-24 flex w-[100%] flex-col gap-4 rounded-3xl border border-slate-800/80 bg-slate-950/70 p-6 text-[16px] font-normal leading-relaxed tracking-wide text-slate-300 shadow-[0_18px_50px_rgba(15,23,42,0.45)] sm:mb-32 md:mb-40 md:gap-6 md:text-[15px] md:leading-normal lg:mt-0 lg:mb-16 lg:max-w-[30%] lg:text-[16px]">
            <div className="flex flex-col gap-4 md:gap-3">
              <AnimatedTitle
                text={"Frontend Tools"}
                className={
                  "text-[20px] font-semibold text-brand-accent md:text-[22px] lg:text-[18px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              <AnimatedBody
                text={
                  "JavaScript (ES6+), React, Next.js, TypeScript, Prismic CMS, Redux, Redux Toolkit, React Testing Library, Vitetest, HTML5, Git/GitHub, NextAuth, Formik."
                }
              />
            </div>
            <div className="flex flex-col gap-3">
              <AnimatedTitle
                text={"UI Libraries"}
                className={
                  "text-[20px] font-semibold text-brand-accent md:text-[22px] lg:text-[18px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              <AnimatedBody
                text={
                  "CSS3/SCSS/SASS, Tailwind CSS, Material UI, Framer Motion, GSAP, Bootstrap, Chart.js."
                }
              />
            </div>
            <div className="flex flex-col gap-3">
              <AnimatedTitle
                text={"Design Tools"}
                className={
                  "text-[20px] font-semibold text-brand-accent md:text-[22px] lg:text-[18px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              <AnimatedBody
                text={
                  "Figma, Framer, FigJam, Adobe XD, ProtoPie, Adobe Photoshop, UX Research, UI Design, Prototyping."
                }
              />
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col md:-mt-0 lg:mt-24">
          <SongCarousel />
          <AnimatedBody
            text="A few songs I can recommend if you're looking for some fresh tunes :)"
            className="absolute bottom-10 right-0 left-0 mx-auto w-[90%] text-center text-[13px] font-semibold uppercase text-slate-200 sm:w-[500px] md:bottom-12 md:w-[550px] md:text-[14px]"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
