import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";
//ANIMATION
import { motion } from "framer-motion";
import { PageAnimation,FadeAnimation , PhotoAnimation,LineAnimation } from "../components/Animation";

export default function OurWork() {
  return (
    <Work
      style={{ background: "#fff" }}
      variants={PageAnimation}
      initial="hidden"
      animate="show"
    >
      <Movie>
        <motion.h2 variants={FadeAnimation}>The Athlete</motion.h2>
        <motion.div variants={LineAnimation} className="line"></motion.div>
        <Link to="#">
          <Hide>
            <motion.img variants={PhotoAnimation} src={athlete} alt="The Athlete" />
          </Hide>
        </Link>
      </Movie>
      <Movie>
        <motion.h2 variants={FadeAnimation}>The Racer</motion.h2>
        <motion.div className="line"></motion.div>
        <Link to="#">
          <Hide>
            <motion.img variants={PhotoAnimation} src={theracer} alt="The Athlete" />
          </Hide>
        </Link>
      </Movie>
      <Movie>
        <h2>Good Times</h2>
        <div className="line"></div>
        <Link to="#">
          <Hide>
            <img src={goodtimes} alt="The Athlete" />
          </Hide>
        </Link>
      </Movie>
    </Work>
  );
}

const Work = styled(motion.div)`
  min-height: 100vh;
  padding : 4rem 10rem;
`;

const Movie = styled.div`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #cccccc;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`
