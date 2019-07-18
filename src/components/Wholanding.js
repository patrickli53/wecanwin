import React from 'react';
import Butt from './Button';
import ScrollAnimation from 'react-animate-on-scroll';

const Wholanding = () => {
    return(
        <div className='wholand' id='who'>
            <ScrollAnimation animateIn='fadeInRight'>
                <h1 className=' f1 ttu pl6 pt3'>
                    <u>Who We Are</u>
                </h1>
            
                <div>
                    <Butt message={'learn about us!'} address={'/whopage'}/>
                </div>
            </ScrollAnimation>
        </div>
    )
}

export default Wholanding;