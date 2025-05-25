import { VT323 } from "next/font/google";
import React from "react";

const vt323 = VT323({
  weight: "400",
  subsets: ["latin"],
});

export default function About() {
  return (
    <div
      id="about"
      className={`w-full text-sm md:text-xl min-h-screen justify-center relative px-12 md:px-12 lg:px-40 pb-22 text-zinc-100 bg-[#020617] flex flex-col gap-8 `}
    >
      <h1 className="text-center md:text-left text-4xl font-bold border-b-2 border-gray-700 pb-6 md:pb-12">
        About Me
      </h1>
      <p>Hi, I’m Alejandro — but I go by the name Anjo.</p>
      <p>
        I’m a self-taught web developer with a passion for turning ideas into
        functional, beautiful digital experiences.
      </p>
      <p>
        I graduated with a Bachelor's Degree in Social Sciences at University of
        the Philippines Baguio and currently taking a graduate degree in
        Computer Science at UPOU. I've always been passionate and curious about
        tech, and what drew me to development is the perfect mix of creativity,
        logic, and problem-solving — and I’ve been hooked ever since. What
        pushed me to transition into tech was a realization: this life is too
        short to not pursue endeavors that truly excites and motivates me. So I
        decided to take a leap of faith and trust God in His plans for me.
      </p>
      <p>
        I believe in life-long learning and I am always looking for ways to
        grow, whether it's by exploring new tech, building better user
        experiences, or developing apps that help solve real world problems. I
        get a real kick out of seeing something go from a blank screen to a
        living, breathing website.
      </p>
      <p>
        My goal is to become a well-rounded full-stack developer who builds
        meaningful digital tools and experiences that create real impact.
        Eventually, I’d love to work on projects that empower creatives, small
        businesses, or underserved communities — a mission that aligns with my
        background in Social Sciences, particularly Anthropology and Psychology.
      </p>
      <p>
        When I’m not writing code, I’m probably reading, staying active, playing
        video games, or strumming a few chords on my guitar!
      </p>
    </div>
  );
}
