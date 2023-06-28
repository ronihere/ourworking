import React from "react";
import home1 from '../img/home1.png';
import { StyledHide, StyledDescription, StyledAbout, StyledImage } from './Styles';
//ANIMATION
import { motion } from "framer-motion";
import {
  TitleAnimation,
  FadeAnimation,
  PhotoAnimation,
} from "../components/Animation";

export default function AboutSection() {
  return (
    <StyledAbout>
      <StyledDescription>
        <motion.div variants={TitleAnimation} initial="hidden" animate="show">
          <StyledHide>
            <motion.h2>We want to make</motion.h2>
          </StyledHide>
          <StyledHide>
            <motion.h2
              variants={TitleAnimation}
              initial="hidden"
              animate="show"
            >
              your <span>dreams</span> come
            </motion.h2>
          </StyledHide>
          <StyledHide>
            <motion.h2
              variants={TitleAnimation}
              initial="hidden"
              animate="show"
            >
              true.
            </motion.h2>
          </StyledHide>
        </motion.div>
        <motion.p variants={FadeAnimation} >
          Contact us for any photography events. We have some amazing skilled
          professionals who can give your pictures a new dimension
        </motion.p>
        <motion.button variants={FadeAnimation}>Contact Us</motion.button>
      </StyledDescription>
      <StyledImage>
        <motion.img variants={PhotoAnimation} src={home1} alt="guy with a camera"></motion.img>
      </StyledImage>
    </StyledAbout>
  );
}


