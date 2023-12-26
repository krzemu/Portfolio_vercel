"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const fadeInAnimationVars = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
      ref={ref}>
      <SectionHeading>My skills</SectionHeading>

      <ul className="flex relative flex-wrap gap-2 justify-center text-lg text-gray-800 before:w-40 before:h-20 sm:before:w-[30rem] sm:before:h-[10rem] before:bg-[#dbd7fb] before:absolute before:bottom-20 sm:before:-bottom-10 before:inset-x-0 before:mx-auto before:-z-10 before:blur-[10rem]">
        {skillsData.map((item, index) => (
          <motion.li
            key={index}
            className="bg-white borderBlack rounded-xl px-5 py-3"
            variants={fadeInAnimationVars}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}>
            {item}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
