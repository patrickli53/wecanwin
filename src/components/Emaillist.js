import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

const Emaillist = () => {
    return(
        <div className='emaillist'>
            <ScrollAnimation animateIn='fadeInRight'>
                <h1 className=' f1 ttu pl6 pt3'>
                    <u>Join Our Email List!</u>
                </h1>
            </ScrollAnimation>
        </div>
    )
}

export default Emaillist;