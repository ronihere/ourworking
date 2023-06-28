import React from 'react'
import money from '../img/money.svg'
import clock from '../img/clock.svg'
import diaphragm from '../img/diaphragm.svg'
import teamwork from '../img/teamwork.svg'
import home2 from '../img/home2.png'
import styled from 'styled-components'
import {
  StyledHide,
  StyledDescription,
  StyledAbout,
  StyledImage,
} from "./Styles";


export default function ServicesSection () {
  return (
    <StyledServices>
      <StyledDescription>
        <h2>
          High <span>Quality</span> Services
        </h2>
        <StyledCards>
          <StyledCard>
            <div className="icon">
              <img src={money} alt="finance"></img>
              <h3>Affordable</h3>
            </div>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </StyledCard>
          <StyledCard>
            <div className="icon">
              <img src={diaphragm} alt="diaphragm"></img>
              <h3>Diaphragm</h3>
            </div>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </StyledCard>
          <StyledCard>
            <div className="icon">
              <img src={clock} alt="Efficient"></img>
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </StyledCard>
          <StyledCard>
            <div className="icon">
              <img src={teamwork} alt="teamwork"></img>
              <h3>Teamwork</h3>
            </div>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </StyledCard>
        </StyledCards>
      </StyledDescription>
      <StyledImage>
        <img src={home2} alt="home2"></img>
      </StyledImage>
    </StyledServices>
  );
}

const StyledServices = styled(StyledAbout)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;

const StyledCards = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const StyledCard = styled.div`
  flex-basis: 20rem;
  .icon{
    display: flex;
    align-items: center;
    h3{
      margin-left: 1rem;
      background: white;
      color: black;
      padding: 1rem;
      border-radius: 10rem;
    }
  }
`
