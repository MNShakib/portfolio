import React from "react";
import home1 from "../img/portfolio_photo.jpg";
import { About, Description, Image, Hide } from "../styles";
//Framer Motion
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../animation";
import Wave from "./Wave";
//Link
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnim}>
              I'm <span>Mohd</span>
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              <span>Najmush Shakib.</span>
            </motion.h2>
          </Hide>
          {/* <Hide>
            <motion.h2 variants={titleAnim}>true.</motion.h2>
          </Hide> */}
        </motion.div>
        <motion.p variants={fade}>
          I am <span>MERN</span> Stack Developer from India. Hire me and let's
          build some amazing stuff.
        </motion.p>
        <Link to="/contact">
          <motion.button variants={fade}>Contact Me</motion.button>
        </Link>
      </Description>
      <Image>
        <motion.img variants={photoAnim} src={home1} alt="guy with a camera" />
      </Image>
      <Wave />
    </About>
  );
};

//Styled Components

export default AboutSection;
