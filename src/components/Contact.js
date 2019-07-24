import React, { Component } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';

import styled, { keyframes } from 'styled-components';
import { fadeInRight } from 'react-animations';

const fadeAnimation = keyframes`${ fadeInRight}`;

const FadeDiv = styled.div`
  animation: 1s ${fadeAnimation};
`;

class Contact extends Component{
    render(){
        return(
            <div className='contact'>
                <Navigation />
                <FadeDiv>
                    <h1 className='contactTitle f1 ttu'>
                        <u>Contact Us</u>
                    </h1>

                    <h2>  
                        Let us know if you have a question, 
                        an idea, or you just want to tell us how good of a job we're doing!
                    </h2>
                    <Footer />
                </FadeDiv>
            </div>
        )
    }
}

export default Contact;