import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { MovieState } from "../MovieState";
//ANIMATION
import { motion } from "framer-motion";
import { PageAnimation } from "../components/Animation";

export default function MovieDetail() {
  const history = useHistory();
  const url = history.location.pathname;
  const [movies, setMovies] = useState(MovieState);
  const [movie, setMovie] = useState(null);
  const Award = ({ title, description }) => {
    return (
      <StyeldAward>
        <h3>{title}</h3>
        <div className="line"></div>
        <p>{description}</p>
      </StyeldAward>
    );
  };

  useEffect(() => {
    const currentMovie = movies.filter((stateMovie) => stateMovie.url === url);
    setMpovie(currentMovie[0]);
  }, [movies, url]);
  return (
    <>
      {movie && (
        <StyledDetails variants={PageAnimation} initial='hidden' animate='show'>
          <StyledHeadline>
            <h2>{movie.title}</h2>
            <img src={movie.mainImg} alt="movie" />
          </StyledHeadline>
          <StyledAwards>
            {movie.awards.map((award) => {
              return (
                <Award
                  title={award.title}
                  description={award.description}
                  key={award.title}
                />
              );
            })}
          </StyledAwards>
          <ImageDisplay>
            <img src={movie.secondaryImg} alt="" />
          </ImageDisplay>
        </StyledDetails>
      )}
    </>
  );
}

//STYLED COMPONENTS

const StyledDetails = styled(motion.div)`
  color: white;
`;

const StyledHeadline = styled.div`
  min-height: 90vh;
  position: relative;
  padding-top: 20vh;
  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

const StyledAwards = styled.div`
  min-height: 80vh;
  display: flex;
  align-items: center;
  margin: 5rem 10rem;
  justify-content: space-around;
`;

const StyeldAward = styled.div`
  padding: 5rem;
  h3 {
    font-size: 2rem;
  }
  .line {
    width: 100%;
    background: #23d997;
    margin: 1rem 0rem;
    height: 0.5rem;
  }
  p {
    padding: 2rem 0rem;
  }
`;

const ImageDisplay = styled.div`
    min-height: 50vh;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`