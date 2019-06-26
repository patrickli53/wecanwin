import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

const Team = () => {
    return(
        <div className='team' id='team'>
            <ScrollAnimation animateIn='fadeInRight'>
                <h1 className=' f1 ttu pl6 pt3'>
                    <u>Our Team</u>
                </h1>
            </ScrollAnimation>
        </div>
    )
}

export default Team;