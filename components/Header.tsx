"use client";

import React from "react";
import { motion } from "motion/react";

type Props = {
  isInView?: boolean;
  position: string;
};

function Header({ isInView, position }: Props) {
  return (
    <motion.div
      className={`hidden md:flex top-0 left-0 w-full h-[70px] justify-end gap-12 items-center pr-28 bg-transparent z-50 text-zinc-200 ${position} `}
      initial={{ y: "-100px" }}
      animate={{ y: 0 }}
    >
      <a href="#stack">
        <nav className="text-2xl">Skills</nav>
      </a>
      <a href="#projects">
        <nav className="text-2xl">Projects</nav>
      </a>
      <a href="#about">
        <nav className="text-2xl">About</nav>
      </a>
      {/* <a href="#contact">
        <nav className="text-2xl">Contact</nav>
      </a> */}
    </motion.div>
  );
}

export default Header;
