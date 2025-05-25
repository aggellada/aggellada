import { animate } from "motion";
import { useMotionTemplate, useMotionValue, motion } from "motion/react";
import React, { useEffect } from "react";

const STACKS: string[] = ["HTML5", "CSS3", "JavaScript", "Python"];
const FRAMEWORKS_LIBRARIES: string[] = [
  "React.js",
  "Next.js",
  "TypeScript",
  "TailwindCSS",
  "Motion",
];
const DATABASES_BACKEND = ["Supabase", "Prisma"];

const COLORS = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

function Stack() {
  const color = useMotionValue(COLORS[0]);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 120% at 50% 100%, #020617 50%, ${color})`;

  useEffect(() => {
    animate(color, COLORS, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  return (
    <motion.div
      className="px-12 bg-gray-950 w-full min-h-[50vh] flex flex-col gap-12 text-white md:px-12 lg:px-40 pt-24"
      id="stack"
      style={{ backgroundImage }}
    >
      <div className="flex flex-col gap-8">
        <h1 className="text-3xl md:text-4xl font-bold">LANGUAGES</h1>
        <div className="flex gap-4">
          {STACKS.map((stack) => {
            return (
              <h1 key={stack} className="border-2 border-gray-700 p-2 md:p-6">
                {stack}
              </h1>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col gap-8">
        <h1 className="text-3xl md:text-4xl font-bold">
          FRAMEWORKS & LIBRARIES
        </h1>
        <div className="flex gap-4 flex-wrap">
          {FRAMEWORKS_LIBRARIES.map((item) => {
            return (
              <h1 key={item} className="border-2 border-gray-700 p-2 md:p-6">
                {item}
              </h1>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col gap-8">
        <h1 className="text-3xl md:text-4xl font-bold">DATABASE SERVICES</h1>
        <div className="flex gap-4 flex-wrap">
          {DATABASES_BACKEND.map((item) => {
            return (
              <h1 key={item} className="border-2 border-gray-700 p-2 md:p-6">
                {item}
              </h1>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}

export default Stack;
