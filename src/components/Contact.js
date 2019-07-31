import React, { Component } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';

import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
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

                    <Container className='contactFormContainer'>
                    <form id="contactUs" name="contactUs" accept-charset="utf-8" action="https://formspree.io/info@wecanwin.ca" method="post">
                            <Row>
                                <Col>
                                    <label for="full-name" className='fullName'>Full Name</label>
                                    <br />
                                    <input type="text" name="name" id="full-name" placeholder="John Smith" required=""/>
                                </Col>
                                <Col>
                                    <label for="email-address" className='emailAddress'>Email Address</label>
                                    <br />
                                    <input type="email" name="email-address" id="email-address" placeholder="email@domain.tld" required=""/>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <label for="message" className='mt2'>Message</label>
                                    <textarea rows="6" name="message" id="message" placeholder="Keep up the good work! Love seeing the change in the community! How can I get involved?"
                                    required=""/>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs='2'>
                                <input className="sendMessage" type="submit" value="Send Message"/>
                                </Col>
                            </Row>
                            </form>
                    </Container>
                    <Footer />
                </FadeDiv>
            </div>
        )
    }
}

export default Contact;