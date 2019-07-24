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
                    <h1 className='f1 ttu'>
                        <u>About Us</u>
                    </h1>

                    <p className='aboutText'>
                        We Can Win is a not-for-profit organization 
                        established in 2011 that has pioneered and guided
                        about 600 immigrant families by training and advising the 
                        youth, newcomers, women, and seniors. Our goal is to help 
                        create opportunities and provide resources to improve the 
                        condition of visible minorities by working to enhance their
                        skills for employment. Our mandate is to encourage 
                        participation in economic, cultural, social and political 
                        activities in the community, and to ensure individuals 
                        attain the resources in meeting future opportunities.
                    </p>

                    <h2>
                        Mission, Vision and Values
                    </h2>
                    
                    <div className="whatContainer pt4">
                    <img
                        src={require('../img/achievement.svg')}
                         alt="create" />
                    <div className='textContainer'>
                        <h3> Our Mission</h3>
                        <p className='missionTexts'>
                        Identify the potentials of all individuals and support to achieve
                        their objectives to create a synergy environment.
                        </p>
                    </div>
                    
                </div>
                
                <div className="whatContainer pt4">
                    <img
                        src={require('../img/eye-scan.svg')}
                         alt="create" />
                    <div className='visionContainer'>
                        <h3> Our Vision</h3>
                        <p className='visionTexts'>
                        Build empowering, compassionate, and inclusive communities. 
                        </p>
                    </div>
                </div>
                  
                <div className="whatContainer pt3">
                    <img
                        src={require('../img/product.svg')}
                        alt="create" 
                        width={100}
                        height={105}
                         />
                    <div className='valueContainer'>
                        <h3 className='valueTitle'>
                            Our Values
                        </h3>
                        <p className='valueTexts'>
                            <ul>
                                <li>Accountability</li>
                                <li>Diversity</li>
                                <li>Transparency</li>
                                <li>Inclusion</li>
                                <li>Social Justice</li>
                            </ul>
                        </p>
                    </div>
                </div>
                </FadeDiv>
         </div>
    )
}

export default About;