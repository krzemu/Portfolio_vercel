"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsGithub, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
export default function Hero() {
  return (
    <section
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
      id="home">
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}>
            <Image
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=368&h=368&q=100"
              alt="Portriait"
              width="256"
              height="256"
              priority={true}
              className="h-48 w-48 rounded-full border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>
          <motion.span
            className="text-6xl  absolute bottom-0 right-0"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 85,
              delay: 0.1,
              duration: 0.7,
            }}>
            👋
          </motion.span>
        </div>
      </div>

      <motion.p
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-3xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}>
        <span className="font-bold">Hello, I'm Ricardo.</span> I'm a{" "}
        <span className="font-bold">full-stack developer</span> with{" "}
        <span className="font-bold">8 years</span> of experience. I enjoy
        building <span className="italic">sites & apps</span>. My focus is{" "}
        <span className="underline">React (Next.js)</span>.
      </motion.p>

      <motion.div
        className="flex flex-col sm:flex-row justify-center items-center gap-4 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}>
        <Link
          href="#contact"
          className="bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 hover:bg-gray-950 transition-all group cursor-pointer">
          Contact me here{" "}
          <BsArrowRight className="transition opacity-70 group-hover:translate-x-1 group-hover:opacity-85" />
        </Link>
        <a
          className="bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none border border-black/10 focus:scale-110 hover:scale-110 active:scale-105 transition-all group cursor-pointer"
          href="/CV.pdf"
          download>
          Download CV{" "}
          <HiDownload className="transition opacity-70 group-hover:translate-y-1 group-hover:opacity-85" />
        </a>
        <a
          className="bg-white p-4 flex items-center gap-2 rounded-full outline-none border border-black/10 focus:scale-[1.15] hover:scale-[1.15] active:scale-[1.07] transition-all group cursor-pointer"
          href="#">
          <BsLinkedin className="transition opacity-70 group-hover:opacity-90" />
        </a>
        <a
          className="bg-white p-4 flex items-center gap-2 rounded-full outline-none border border-black/10 focus:scale-[1.15] hover:scale-[1.15] active:scale-[1.07] transition-all group cursor-pointer"
          href="https://github.com/krzemu"
          target="_blank"
          rel="nofollow noopener noreferrer">
          <BsGithub className="transition opacity-70 group-hover:opacity-90" />
        </a>
      </motion.div>
    </section>
  );
}
