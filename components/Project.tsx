import { motion } from "motion/react";
import ProjectItem from "./ProjectItem";

const Project = () => {
  return (
    <section className="w-full relative px-1 md:px-12 lg:px-40 py-20 text-white bg-[#020617]  " id="projects">
      <motion.h1
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
        className="mb-6 md:mb-20 text-center md:text-left text-3xl md:text-4xl font-black uppercase text-zinc-50 border-b-2 border-gray-700 pb-6 md:pb-12"
      >
        Personal Projects
      </motion.h1>
      <ProjectItem
        title="Chatty "
        date="HTML | TailwindCSS | JavaScript | ReactJS | NodeJS | Express | MongoDB "
        description="A real-time chat application with user authentication, message persistence, and responsive UI using React, Express, Node.js, and MongoDB."
        main="https://res.cloudinary.com/dqrhjsi7y/image/upload/v1750964584/2_ffel8l.png"
        sub1="https://res.cloudinary.com/dqrhjsi7y/image/upload/v1750964585/3_ntltwh.png"
        sub2="https://res.cloudinary.com/dqrhjsi7y/image/upload/v1750964470/1_ohcd4f.png"
        video="https://res.cloudinary.com/dqrhjsi7y/video/upload/v1750964921/2025-06-27_03-07-27_ewthfd.mkv"
        link="https://fullstack-chat-app-8wse.onrender.com/"
        github="https://github.com/aggellada/fullstack-chat-app.git"
      />
      <ProjectItem
        title="Pictour "
        date="HTML | TailwindCSS | JavaScript | TypeScript | ReactJS | NextJS | Prisma | Leaflet | Cloudinary"
        description="An interactive travel photography platform that allows users to explore, mark, and share visited locations via an intuitive Leaflet-based map interface."
        main="https://res.cloudinary.com/dqrhjsi7y/image/upload/v1748199909/pictour-main_zyzhsn.png"
        sub1="https://res.cloudinary.com/dqrhjsi7y/image/upload/v1748199929/pictour-sub1_zqfthh.png"
        sub2="https://res.cloudinary.com/dqrhjsi7y/image/upload/v1748199929/pictour-sub2_srshvd.png"
        video="https://res.cloudinary.com/dqrhjsi7y/video/upload/v1748201465/2025-05-26_03-27-38_mmwsyl.mkv"
        link="https://pictour-seven.vercel.app/"
        github="https://github.com/aggellada/pictour.git"
      />
      <ProjectItem
        title="Projectory"
        date="HTML | TailwindCSS | JavaScript | ReactJS | NextJS | Prisma"
        description="A productivity-focused project management app enabling users to efficiently organize, prioritize, and track their projects and tasks with kanban board."
        main="https://res.cloudinary.com/dqrhjsi7y/image/upload/v1748199940/projectory-main_f8lo3a.png"
        sub1="https://res.cloudinary.com/dqrhjsi7y/image/upload/v1748199940/projectory-sub1_jxi4at.png"
        sub2="https://res.cloudinary.com/dqrhjsi7y/image/upload/v1748199941/projectory-sub2_fowern.png"
        video="https://res.cloudinary.com/dqrhjsi7y/video/upload/v1748200006/projectory-demo-vid_wmk3l0.mkv"
        github="https://github.com/aggellada/projectory.git"
        link="https://projectory-eight.vercel.app/"
      />
      <ProjectItem
        title="Recipe Finder"
        date="HTML | TailwindCSS | JavaScript | TypeScript | ReactJS | NextJS"
        description="A front-end web application for finding recipes. Used APIs to fetch recipe data, enabling users to filter their favorite meals and dishes."
        main="https://res.cloudinary.com/dqrhjsi7y/image/upload/v1748199965/recipe-finder-main_qncwps.png"
        sub1="https://res.cloudinary.com/dqrhjsi7y/image/upload/v1748199966/recipe-finder-sub2_foi8by.png"
        sub2="https://res.cloudinary.com/dqrhjsi7y/image/upload/v1748199966/recipe-finder-sub1_khpktr.png"
        video="https://res.cloudinary.com/dqrhjsi7y/video/upload/v1748200010/recipe-finder-demo_orlkuc.mkv"
        github="https://github.com/aggellada/recipe-finder.git"
        link="https://recipe-finder-lemon-phi.vercel.app/"
      />
      <ProjectItem
        title="AppleTV Clone"
        date="HTML | TailwindCSS | JavaScript | ReactJS | Framer Motion"
        description="A responsive and visually engaging clone of AppleTV’s interface, emphasizing smooth transitions and animated UI components."
        main="https://res.cloudinary.com/dqrhjsi7y/image/upload/v1748199888/appletv-clone-main_ckysye.png"
        sub1="https://res.cloudinary.com/dqrhjsi7y/image/upload/v1748199888/appletv-clone-sub1_fabogp.png"
        sub2="https://res.cloudinary.com/dqrhjsi7y/image/upload/v1748199887/appletv-clone-sub2_cnbf6g.png"
        video="https://res.cloudinary.com/dqrhjsi7y/video/upload/v1748200006/appletvclone-demo-vid_p6h1o2.mkv"
        link="https://appletv-clone-psi.vercel.app/"
        github="https://github.com/aggellada/appletv-clone.git"
      />
      <ProjectItem
        title="Starbucks Clone"
        date="HTML | TailwindCSS | JavaScript | ReactJS | NextJS"
        main="https://res.cloudinary.com/dqrhjsi7y/image/upload/v1748199981/starbucks-main_opiru1.png"
        sub1="https://res.cloudinary.com/dqrhjsi7y/image/upload/v1748199981/starbucks-sub1_yugzur.png"
        sub2="https://res.cloudinary.com/dqrhjsi7y/image/upload/v1748199982/starbucks-sub2_vwffml.png"
        description="Recreated the Starbucks website, showcasing responsiveness, accessibility, and clean UI layouts."
        video="https://res.cloudinary.com/dqrhjsi7y/video/upload/v1748200011/sbclone-demo-vid_p0vxuh.mkv"
        github="https://github.com/aggellada/starbucks-clone.git"
        link="https://starbucks-clone-snowy-tau.vercel.app/"
      />
      <ProjectItem
        title="Personal Portfolio"
        date="HTML | CSS | JavaScript | ReactJS | Framer Motion"
        description="A personal portfolio website to showcase my skills in web design, development, and animation.  "
        main="https://res.cloudinary.com/dqrhjsi7y/image/upload/v1748199898/personal-portfolio-main_tlxirb.png"
        sub1="https://res.cloudinary.com/dqrhjsi7y/image/upload/v1748199899/personal-portfolio-sub2_y7j5yr.png"
        sub2="https://res.cloudinary.com/dqrhjsi7y/image/upload/v1748199898/personal-portfolio-sub1_a1kld6.png"
        video="https://res.cloudinary.com/dqrhjsi7y/video/upload/v1748200006/personal-portfolio-demo_gjqyb8.mkv"
        github="https://github.com/aggellada/starbucks-clone.git"
        link="https://starbucks-clone-snowy-tau.vercel.app/"
      />
    </section>
  );
};

export default Project;
