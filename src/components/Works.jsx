import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

// Individual Project Card (No Tilt, now with gradient & darker text)
const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div
      // Keep the fade-in animation from below
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      style={{
        // 1) Gradient background & box shadow
        background: "linear-gradient(to bottom right, #7df3ff, #66f7ff)",
        color: "#111827", // Dark text color for contrast
        borderRadius: "0.5rem",
        boxShadow: "0 10px 15px rgba(0, 0, 0, 0.3)",
      }}
      className="p-5 sm:w-[360px] w-full"
    >
      {/* Image section with source code link */}
      <div className="relative w-full h-[230px]">
        <img
          src={image}
          alt="project_image"
          className="w-full h-full object-cover rounded-2xl"
        />

        <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
          <div
            onClick={() => window.open(source_code_link, "_blank")}
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          >
            <img
              src={github}
              alt="source code"
              className="w-1/2 h-1/2 object-contain"
            />
          </div>
        </div>
      </div>

      {/* Title and description */}
      <div className="mt-5">
        <h3
          className="font-bold text-[24px]"
          style={{ color: "#111827" }}
        >
          {name}
        </h3>
        <p
          className="mt-2 text-[14px]"
          style={{ color: "#111827" }}
        >
          {description}
        </p>
      </div>

      {/* Tags */}
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <p
            key={`${name}-${tag.name}`}
            className={`text-[14px] ${tag.color}`}
            style={{ color: "#111827" }}
          >
            #{tag.name}
          </p>
        ))}
      </div>
    </motion.div>
  );
};

// Main Works component
const Works = () => {
  return (
    <>
      {/* Animated heading/subheading */}
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      {/* Intro paragraph */}
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcase my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos. They reflect my ability to
          solve complex problems, work with various technologies, and manage
          projects effectively.
        </motion.p>
      </div>

      {/* Project cards */}
      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
