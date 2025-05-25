"use client";

import { motion } from "motion/react";
import { useRef } from "react";

type Props = {
  title: string;
  date: string;
  description: string;
  video: string;
  github: string;
  link: string;
  main: string;
  sub1: string;
  sub2: string;
};

const ProjectItem = ({
  title,
  date,
  main,
  sub1,
  sub2,
  description,
  video,
  github,
  link,
}: Props) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <motion.div
      initial={{ y: 48, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
      className="px-12 gap-6 mb-9 flex flex-col-reverse md:flex-row items-center justify-between border-b border-zinc-800 md:px-3 pb-9 md:gap-12"
    >
      <div className="w-full md:w-1/3 flex flex-col gap-2">
        <p className="mb-1.5 text-xl text-zinc-50">{title}</p>
        <p className="text-sm uppercase text-zinc-500">{date}</p>
        <p className="text-zinc-300 text-sm">{description}</p>
        <div className="flex gap-4">
          <a href={`${link}`} target="_blank" className="text-zinc-300 text-sm">
            Link
          </a>
          <a
            href={`${github}`}
            target="_blank"
            className="text-zinc-300 text-sm"
          >
            GitHub
          </a>
        </div>
      </div>
      <div className="w-full md:w-2/3 h-full flex justify-end items-center gap-1.5 relative ">
        <div className="opacity-0 transition-opacity duration-300 hover:opacity-100 hover:block bg-[rgba(0,0,0,0.4)] absolute inset-0 z-20">
          <video
            ref={videoRef}
            className="rounded-lg shadow-lg object-cover w-full h-full"
            width="1000"
            height="1000"
            onMouseEnter={() => {
              videoRef.current?.play();
            }}
            onMouseLeave={() => {
              if (!videoRef.current) return;
              videoRef.current?.pause();
              videoRef.current.currentTime = 0; // Optional: restart when hover again
            }}
            muted
            loop
          >
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="w-full flex gap-2">
          <img src={main} className="w-1/2 object-contain" />
          <div className="flex flex-col gap-2 w-1/2">
            <img src={sub1} className="object-contain" />
            <img src={sub2} className="object-contain" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectItem;
