import React from 'react';
import Eventcardlist from './Eventcardlist';
import { Eventlist } from './Eventlist';
import ScrollAnimation from 'react-animate-on-scroll';
import Butt from './Button';
const Eventslanding = () => {
    return(
        <div className='eventslanding '>
            <ScrollAnimation animateIn='fadeInRight'>
                <h1 className='f1 ttu pl6 pb2 pt3'>
                    <u>Upcoming Events</u>
                </h1>
                
                    
                <div className="pl6 pr6 pt3" >
                    <Eventcardlist Eventlist={Eventlist} />  
                </div>

                <div className="pl6 pr6 pt3" >
                    <Butt message={'View Calendar!'} address={'/events'}/>
                </div>
                
            </ScrollAnimation>
        </div>
    )
}

export default Eventslanding;