import Link from "next/link";
import Image from "next/image";
import { monaSans } from "../fonts/monaSans";
import { motion } from "framer-motion";
import { imageAnimation, bodyAnimation } from "../animations/animations";
import AnimatedWords from "../animations/AnimatedWords";
import profile from "../../public/tayyaba.png";
import ThemeToggleButton from "../theme/ThemeToggleButton";

const Hero = () => {
  return (
    <motion.section
      className="relative z-10 flex h-[85vh] w-full items-stretch justify-center bg-[url('.//../public/hero.jpg')] bg-cover bg-center py-0 sm:h-[90vh] md:h-[100vh] 3xl:h-[85vh]"
      id="home"
      initial="initial"
      animate="animate"
    >
      <motion.div className="absolute left-0 top-0 right-0 bottom-0 h-full w-full bg-gradient-to-br from-brand-deep via-brand-teal to-brand-primary mix-blend-multiply opacity-95 dark:from-slate-950 dark:via-brand-deep dark:to-brand-primary"></motion.div>

      <div className="absolute top-8 flex w-full max-w-[1100px] items-center justify-between px-6 sm:top-10 sm:w-[90%] lg:max-w-[1440px]">
        <div>
          <Link
            href="https://cal.com/victorwilliams/30min"
            target="_blank"
            aria-label="BOOK A CALL"
          >
            <motion.button
              className="hidden rounded-full border border-brand-accent/70 bg-brand-primary/30 py-2 px-5 text-[14px] font-semibold uppercase tracking-wide text-slate-50 shadow-lg backdrop-blur-md transition hover:bg-brand-accent hover:text-slate-950 sm:inline-flex md:text-[16px]"
              variants={bodyAnimation}
            >
              BOOK A CALL
            </motion.button>
          </Link>
        </div>

        <div className="flex items-center gap-6 text-slate-50 sm:gap-8 md:gap-10 lg:gap-10">
          <Link
            href="https://github.com/victorcodess"
            target="_blank"
            aria-label="View GitHub Profile"
          >
            <motion.p
              className="text-[16px] font-bold text-slate-50 md:text-[16px]"
              variants={bodyAnimation}
            >
              GH
            </motion.p>
          </Link>
          <Link
            href="https://www.linkedin.com/in/victor-williams-chukwudi/"
            target="_blank"
            aria-label="View LinkedIn Profile"
          >
            <motion.p
              className="text-[16px] font-bold text-slate-50 md:text-[16px]"
              variants={bodyAnimation}
            >
              LN
            </motion.p>
          </Link>
          <Link
            href="https://twitter.com/victorwill__"
            target="_blank"
            aria-label="View Twitter Profile"
          >
            <motion.p
              className="text-[16px] font-bold text-slate-50 md:text-[16px]"
              variants={bodyAnimation}
            >
              TW
            </motion.p>
          </Link>
          <Link
            href="https://contra.com/victorwilliams"
            target="_blank"
            aria-label="View Contra Profile"
          >
            <motion.p
              className="text-[16px] font-bold text-slate-50 md:text-[16px]"
              variants={bodyAnimation}
            >
              CO
            </motion.p>
          </Link>

          <div className="ml-4">
            <ThemeToggleButton />
          </div>
        </div>
      </div>

      <div className="-mt-36 flex flex-col items-center justify-center sm:-mt-20 lg:my-40 lg:-mt-2 lg:py-40 ">
        <div
          className={`relative flex flex-col items-center justify-center ${monaSans.className}`}
        >
          <AnimatedWords
            title="TAYYABA NASEER"
            style="inline-block overflow-hidden pt-1 -mr-4 sm:-mr-5 md:-mr-7 lg:-mr-9 -mb-1 sm:-mb-2 md:-mb-3 lg:-mb-4"
          />
          <motion.div
            className="absolute bottom-[-110px] mx-auto sm:bottom-[-100px] md:bottom-[-130px] lg:bottom-[-150px]"
            variants={imageAnimation}
          >
            <Image
              src={profile}
              priority
              alt="Tayyaba Naseer's headshot"
              data-blobity-tooltip="Sulphite"
              data-blobity-invert="false"
              className=" w-[150px] rounded-[16px] grayscale hover:grayscale-0 md:w-[200px] md:rounded-[32px] lg:w-[245px]"
            />
          </motion.div>
        </div>
      </div>

      <div
        className="absolute bottom-10 flex items-center 
      justify-center
      md:bottom-10 lg:w-[90%] lg:max-w-[1440px] lg:justify-between"
      >
        <motion.div
          className="  max-w-[350px] md:max-w-[400px] lg:max-w-[400px]"
          variants={bodyAnimation}
        >
          <p className="z-50 text-center text-[16px] font-medium text-slate-50 md:text-[20px] lg:text-left">
            Frontend Engineer and Web Designer, prev at{" "}
            <Link
              href="https://www.trivia.com/"
              target="_blank"
              className="underline underline-offset-2 hover:no-underline"
              aria-label="Trivia Website"
            >
              Trivia,
            </Link>{" "}
            currently available for work.
          </p>
        </motion.div>

        <motion.div
          className="  hidden max-w-[500px] lg:block lg:max-w-[420px]"
          variants={bodyAnimation}
        >
          <p className="text-right text-[16px] font-semibold text-slate-50 md:text-[20px]">
            Focused on interfaces and experiences, working remotely from Gojra,
            Pakistan.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
