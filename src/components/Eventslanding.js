import React, { Component } from 'react';
import Eventcardlist from './Eventcardlist';
import ScrollAnimation from 'react-animate-on-scroll';
import Butt from './Button';
import Flyermodal from './Flyermodal';

class Eventslanding extends Component {
    render(){
        return(
            <div className='eventslanding '>
                <ScrollAnimation animateIn='fadeInRight'>
                    <h1 className='f1 ttu  pb2 pt5 white'>
                        <u>Upcoming Events</u>
                    </h1>
                    
                        
                    <div className=" pr6 pt3" >
                        <Eventcardlist Eventlist={ this.props.eventList }/>  
                    </div>
    
                    <div className=" pr6 pt3" >
                        <Butt message={'View Calendar!'} address={'/events'}/>
                        <Flyermodal buttonLabel={'THIS WEEK\'S FLYER'}/>
                        
                    </div>
                    
                </ScrollAnimation>
            </div>
        )
    }
   
}

export default Eventslanding;