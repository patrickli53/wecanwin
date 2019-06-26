import React, { Component } from 'react';
import Navigation from './Navigation';
import styled, { keyframes } from 'styled-components';
import { fadeInRight } from 'react-animations';

const fadeAnimation = keyframes`${ fadeInRight}`;

const FadeDiv = styled.div`
  animation: 1s ${fadeAnimation};
`;

class Lessons extends Component{
    render(){
        return(
            <div className='lessons'>
                <Navigation />
                <FadeDiv>
                    <h1 className=' f1 ttu pl6 pt5'>
                        <u>Lessons</u>
                    </h1>
                </FadeDiv>
            </div>
        )
    }
}

export default Lessons;