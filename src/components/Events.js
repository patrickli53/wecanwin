import React, { Component } from 'react';
import Navigation from './Navigation';
import Eventcalendar from './Eventcalendar';
import { Eventlist } from './Eventlist';

import './Events.css';
import styled, { keyframes } from 'styled-components';
import { fadeInRight } from 'react-animations';
import { Col, Container, Row } from 'reactstrap';
import Upcomingeventslist from './Upcomingeventslist';

const fadeAnimation = keyframes`${ fadeInRight}`;

const FadeDiv = styled.div`
  animation: 1s ${fadeAnimation};
`;

class Events extends Component{
    constructor(){
        super();
        this.state = {
            eventsList: []
        }
    }

    componentDidMount(){
        const events = Eventlist.map(item => {
            return item;
        })

        this.setState({
            eventsList : events
        });
    }

    render(){
        return(
            <div className='events'>
                <Navigation/>
                <FadeDiv>
                    <Container fluid style={{ paddingLeft: 0, paddingRight: 0}}>
                        <Row>
                            <Col>
                                <h1 className=' f1 ttu pl6 eventPageTitle'>
                                    <u>Events and Calendar</u>
                                </h1>
                            </Col>
                        </Row>
                        <Row>
                            <Col className='eventPadding' md='12' lg='8' style={{ paddingLeft: 0, paddingRight: 0}}>
                                <Eventcalendar eventsList={this.state.eventsList}/>
                            </Col>

                            <Col md='12' lg='4' style={{ paddingLeft: 0, paddingRight: 0}}>
                                <Upcomingeventslist eventsList={this.state.eventsList}/>
                            </Col>
                        </Row>
                    </Container>
                </FadeDiv>
            </div>
        )
    }
}

export default Events;