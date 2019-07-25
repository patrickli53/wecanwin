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
                        <Form>
                            <Row>
                                <Col>
                                    <FormGroup>
                                        <Label for="name">Name</Label>
                                        <Input type="text" placeholder="Enter name"></Input>
                                    </FormGroup>
                                </Col>
                                <Col>
                                    <FormGroup>
                                        <Label for="email"> Email</Label>
                                        <Input type='email' placeholder="Enter email"/>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <FormGroup>
                                        <Label for="message">Message</Label>
                                        <Input type="textarea" placeholder="Enter message" className='submitFormButton'/>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs='2'>
                                    <FormGroup>
                                        <Input type="submit" />
                                    </FormGroup>
                                </Col>
                            </Row>
                        </Form>
                    </Container>
                    <Footer />
                </FadeDiv>
            </div>
        )
    }
}

export default Contact;