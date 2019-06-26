import React from 'react';
import { Supportlist } from './Supportlist'
import Cardlist from './Cardlist';
import ScrollAnimation from 'react-animate-on-scroll';

const Supporters = () => {
    return(
        <div className='supporters' id='supporters'>
            <ScrollAnimation animateIn='fadeInRight'>
                <h1 className=' f1 ttu pl6 pt3'>
                    <u>Our Supporters</u>
                </h1>
         
           
            <div className='pl6 pt4 pb4'>
                <Cardlist Supportlist={Supportlist} />
            </div>
            
            </ScrollAnimation>
        </div>
    )
}

export default Supporters;