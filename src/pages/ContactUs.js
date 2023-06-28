import React from 'react'
//ANIMATION
import { motion } from "framer-motion";
import { PageAnimation } from "../components/Animation";

export default function ContactUs() {
  return (
    <motion.div style={{background: "#fff"}} variants={PageAnimation} initial="hidden" animate="show">
      <h1>Contact Us</h1>
    </motion.div>
  );
}
