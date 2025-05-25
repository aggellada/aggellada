"use client";

import About from "@/components/About";
import AuroraHero from "@/components/AuroraHero";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Project from "@/components/Project";
import Stack from "@/components/Stack";
import { useInView } from "motion/react";
import { useRef } from "react";

export default function Home() {
  const auroraRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(auroraRef, {
    margin: "-50px 0px 0px 0px",
  });

  return (
    <>
      {!isInView && <Header isInView={isInView} position="sticky" />}
      <AuroraHero auroraRef={auroraRef} />
      <Stack />
      <Project />
      <About />
      <Contact />
    </>
  );
}
