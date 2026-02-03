import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedBody from "../animations/AnimatedBody";

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <motion.section
      className="w-full border-t border-slate-800 bg-slate-950/95 py-6 font-bold uppercase md:py-8"
      initial="initial"
      animate="animate"
    >
      <motion.div className="mx-auto flex w-[90%] flex-col items-center justify-between gap-3 text-center text-[11px] text-slate-300 sm:flex-row sm:text-[12px] md:text-[13px] lg:max-w-[1440px] lg:text-[13px]">
        <AnimatedBody text={`© ${year} Tayyaba Naseer`} className={"m-0 p-0"} />
        <div className="flex flex-col items-center sm:flex-row sm:gap-1 md:gap-2">
          <AnimatedBody
            text={"Design & development by"}
            className={"m-0 p-0"}
          />
          <Link
            href="https://github.com/victorcodess"
            target="_blank"
            aria-label="Tayyaba Naseer's GitHub Profile"
          >
            <span className="underline underline-offset-2 hover:no-underline">
              <AnimatedBody text={"Tayyaba Naseer"} className={"m-0 p-0"} />
            </span>
          </Link>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Footer;
