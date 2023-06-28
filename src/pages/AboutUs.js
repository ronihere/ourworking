import React from 'react';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import FaqSection from '../components/FaqSection';
//ANIMATION
import { motion } from "framer-motion";
import { PageAnimation } from "../components/Animation";

export default function AboutUs() {
  return (
    <motion.div variants={PageAnimation} initial="hidden" animate="show">
      <AboutSection />
      <ServicesSection />
      <FaqSection/>
    </motion.div>
  )
}
