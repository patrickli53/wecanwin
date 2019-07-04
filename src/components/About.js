import React from 'react';
import styled, { keyframes } from 'styled-components';
import { fadeInRight } from 'react-animations';

const fadeAnimation = keyframes`${ fadeInRight}`;

const FadeDiv = styled.div`
  animation: 1s ${fadeAnimation};
`;

const About = () => {
    return(
        <div className='about' id='about'>
                <FadeDiv>
                    <h1 className=' f1 ttu pl6 pt6'>
                        <u>About Us</u>
                    </h1>
                </FadeDiv>
         </div>
    )
}

export default About;