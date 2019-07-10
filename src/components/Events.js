import React, { Component } from 'react';
import Navigation from './Navigation';
import Eventcalendar from './Eventcalendar';

import styled, { keyframes } from 'styled-components';
import { fadeInRight } from 'react-animations';

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
        fetch('./events.json')
            .then(response => response.json())
            .then(result => {
                const events = result.map(item => {
                    return item;
                })

                this.setState({
                    eventsList : events
                });
            });
    }

    render(){
        return(
            <div className='events'>
                <Navigation/>
                <FadeDiv>
                    <h1 className=' f1 ttu pl6 eventPageTitle'>
                        <u>Events and Calendar</u>
                    </h1>
                   
                    <Eventcalendar eventsList={this.props.eventsList}/>
                </FadeDiv>
            </div>
        )
    }
}

export default Events;