import React, { Component } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';

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
                    <h1 className='f1 ttu '>
                        <u> Programs</u>
                    </h1>

                    <p id='firstPara'> We Can Win is currently working on two projects – The New Horizons for Seniors Program and The Youth Employment Skills Strategy Program.</p>
                   
                    <h2>
                        New Horizons for Seniors Program
                    </h2>
                    <div className='lessonsContainer'>
                        <p>
                            The goal of our project in the New Horizons for Seniors Program is to increase the social participation of the seniors and to include them in all dimensions of life. 
                            The program will bring different generations together, so that they can share their knowledge and life experiences and to encourage volunteering, involvement and 
                            mentoring. They can contribute their degree of knowledge to all sorts of circumstances in order to educate others. 
                            <br />
                            <br />
                            Bridging the gap between seniors and the youth can build the relationships which will enhance their lives and community. This project provides good learning opportunities 
                            for the senior people to become active users of new technology, and to learn and grow from each other. In addition to communication learning and entertainment, 
                            computer training can help the seniors to bridge the individual gap boosting their self-confidence which also enables them to be working members of society. 
                            <br />
                            <br />
                            This project prioritizes empowering seniors by fostering stronger connections with their community and reviving their great spirit which improves their quality of life. 
                        </p>
                        <img src={require('../img/flyer.png')} alt={'flyer'} />
                    </div>
                    
                    <h2>
                            Youth Employment Skills Strategy Program
                    </h2>
                    <div className='lessonsContainer'>
                        <p id='youthLessons'>In this project, We Can Win is targeting youth that face barriers to employment and aid them into transitioning into the labour market. 
                        We strive to promote learning in existing job markets such as information technology, Microsoft Office, Project Management, Business Analysis skills. 
                        <br />
                        <br />
                        Our organization wants to engage youth in programs addressing specific needs for improving career prospects and to improve the lives of people who face barriers to economic, 
                        physical, and social well-being.
                        </p>
                   </div>
                <Footer />    
                </FadeDiv>
                
            </div>
        )
    }
}

export default Lessons;