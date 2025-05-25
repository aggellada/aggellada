"use client";

import React, { RefObject, useEffect, useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  animate,
} from "motion/react";
import { VT323 } from "next/font/google";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import Link from "next/link";
import Header from "./Header";

const COLORS = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

const vt323 = VT323({
  weight: "400",
  subsets: ["latin"],
});

type Props = {
  auroraRef: RefObject<HTMLElement | null>;
};

export default function AuroraHero({ auroraRef }: Props) {
  const color = useMotionValue(COLORS[0]);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 120% at 50% 0%, #020617 50%, ${color})`;

  useEffect(() => {
    animate(color, COLORS, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  return (
    <div className="relative">
      <Header position="absolute" />
      <motion.section
        style={{
          backgroundImage,
        }}
        className="relative grid min-h-screen place-content-center overflow-hidden bg-bray-950 px-4 py-24 text-gray-200"
        ref={auroraRef}
      >
        <div className="text-center flex flex-col gap-4">
          <h1 className={`text-3xl md:text-4xl`}>Hello, I am Alejandro.</h1>
          <h1 className={`text-2xl md:text-4xl`}>
            I am a self-taught web developer.
          </h1>
          <h2 className="text-md md:text-xl">
            I build interactive, user-friendly websites and web applications
            using modern technologies like React, Next.js, and TailwindCSS.
          </h2>
        </div>
        <div className="absolute inset-0 z-0">
          <Canvas>
            <Stars radius={50} count={2500} factor={4} fade speed={2} />
          </Canvas>
        </div>
      </motion.section>
    </div>
  );
}
