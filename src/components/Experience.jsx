import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      // 1) Use a gradient background for the description boxes:
      contentStyle={{
        background: "linear-gradient(to bottom right, #7df3ff, #66f7ff)",
        color: "#111827", // text-gray-900 in Tailwind
        borderRadius: "0.5rem", // rounded-lg
        boxShadow: "0 10px 15px rgba(0, 0, 0, 0.3)", // shadow-lg
      }}
      // 2) Arrow color matching the top gradient color:
      contentArrowStyle={{
        borderRight: "7px solid #7df3ff",
      }}
      date={experience.date}
      // ** Make the dates white **
      dateClassName="text-white"
      // 3) Icon background remains up to you; you can use the experience.iconBg or match the new gradient.
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      <div>
        {/* Use dark text for readability on a lighter background */}
        <h3 className='text-[24px] font-bold' style={{ color: "#111827" }}>
          {experience.title}
        </h3>
        <p
          className='text-[16px] font-semibold'
          style={{ margin: 0, color: "#111827" }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-[14px] pl-1 tracking-wider'
            style={{ color: "#111827" }}
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center text-[#04d9ff]`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center text-white`}>
          Work Experience.
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        {/* 4) Keep your vertical line #04d9ff to match your overall theme */}
        <VerticalTimeline lineColor="#04d9ff">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
