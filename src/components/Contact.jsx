import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  return (
    <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
      {/* LEFT SIDE: Friendly Message + Social Icons */}
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl 
                   border border-[#04d9ff]"  // Neon-blue border
      >
        <p className={styles.sectionSubText}>
          Feel free to hit me up whenever
        </p>
        <h3 className={styles.sectionHeadText}>
          I’m always open to chat!
        </h3>
        
        <p className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
          I'd love to hear from you, whether you have a question or just want 
          to say hi. Connect with me on social media or shoot me an email:
        </p>

        {/* Social Icons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center sm:items-start gap-6">
          {/* Gmail */}
          <a 
            href="mailto:Jay.memon985@gmail.com" 
            target="_blank" 
            rel="noopener noreferrer"
            title="Email me"
          >
            <img
              src="/gmail.png"
              alt="Gmail"
              className="w-16 h-16 hover:scale-110 transition duration-200"
            />
          </a>

          {/* GitHub */}
          <a 
            href="https://github.com/Mehprogrammer" 
            target="_blank" 
            rel="noopener noreferrer"
            title="My GitHub"
          >
            <img
              src="/github.png"
              alt="GitHub"
              className="w-16 h-16 hover:scale-110 transition duration-200"
            />
          </a>

          {/* LinkedIn */}
          <a 
            href="https://www.linkedin.com/in/junaid-memon1/" 
            target="_blank" 
            rel="noopener noreferrer"
            title="My LinkedIn"
          >
            <img
              src="/linkedin-logo-linkedin-logo-transparent-linkedin-icon-transparent-free-free-png.webp"
              alt="LinkedIn"
              className="w-16 h-16 hover:scale-110 transition duration-200"
            />
          </a>
        </div>
      </motion.div>

      {/* RIGHT SIDE: Earth Canvas (3D Globe) */}
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
