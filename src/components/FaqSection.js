import React from 'react';
import {
  StyledHide,
  StyledDescription,
  StyledAbout,
  StyledImage,
} from "./Styles";
import ToggleFaq from './ToggleFaq.js';
import styled from 'styled-components';
import { AnimateSharedLayout } from 'framer-motion';
export default function FaqSection () {
  return (
    <StyledFaq>
      <h2>
        Ant Questions <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        
          <ToggleFaq title="What we do?">
            <div className="answer">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
                deleniti, ea ab magni fugit nulla?
              </p>
            </div>
          </ToggleFaq>
            
            
          <ToggleFaq title="What Products do we offer?">
            <div className="answer">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
                deleniti, ea ab magni fugit nulla?
              </p>
            </div>
          </ToggleFaq>


          <ToggleFaq title="Daily Schedule">
            <div className="answer">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
                deleniti, ea ab magni fugit nulla?
              </p>
            </div>
          </ToggleFaq>

          
          <ToggleFaq title="Different Payment Methods">
            <div className="answer">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
                deleniti, ea ab magni fugit nulla?
              </p>
            </div>
          </ToggleFaq>
      </AnimateSharedLayout>

    </StyledFaq>
  );
}

const StyledFaq = styled(StyledAbout)`
  display: block;
  span{
    display: block;
  }
  h2{
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line{
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question{
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer{
    padding: 2rem 0rem;
    p{
      padding: 1rem 0rem;
    }
  }
`
