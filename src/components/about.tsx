"use client";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useEffect } from "react";

export default function About() {
  const { ref, inView } = useInView();
  const { setActiveSection } = useActiveSectionContext();

  useEffect(() => {
    if (inView) {
      setActiveSection("About");
    }
  }, [inView, setActiveSection]);

  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ y: 200, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.175 }}
      id="about"
      ref={ref}>
      <SectionHeading>about me</SectionHeading>
      <p className="mb-3">
        After graduating with a degree in <strong>Accounting</strong>, I decided
        to pursue my passion for programming. I enrolled in a coding bootcamp
        and learned <strong>full-stack web development</strong>.
        <strong className="italic">My favorite part of programming</strong> is
        the problem-solving aspect. I<strong className="underline">love</strong>
        the feeling of finally figuring out a solution to a problem. My core
        stack is
        <strong>React, Next.js, Node.js, and MongoDB</strong>. I am also
        familiar with TypeScript and Prisma. I am always looking to learn new
        technologies. I am currently looking for a
        <strong>full-time position</strong> as a software developer.
      </p>
      <p>
        <strong className="italic">When I'm not coding</strong>, I enjoy playing
        video games, watching movies, and playing with my dog. I also enjoy
        <strong>learning new things</strong>. I am currently learning about
        <strong>history and philosophy</strong>. I'm also learning how to play
        the guitar.
      </p>
    </motion.section>
  );
}
