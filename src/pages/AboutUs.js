import React from "react";
import styled from "styled-components";
//Page Components
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import FaqSection from "../components/FaqSection";
//Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
import ScrollTop from "../components/ScrollTop";

const AboutUs = () => {
  return (
    <Motion
      className="m"
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <AboutSection />
      <ServicesSection />
      <FaqSection />
      <ScrollTop />
    </Motion>
  );
};

//styled Components
const Motion = styled(motion.div)`
  overflow-x: hidden !important;
  overflow-y: hidden !important;
`;

export default AboutUs;
