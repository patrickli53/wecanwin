import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import Flyermodal from './Flyermodal';

const Whatpage = () => {
    return(
        <div className='whatpage' id='what'>
            <ScrollAnimation animateIn='fadeInRight'>
                <h1 className=' f1 ttu pl6 pt5'>
                    <u>What We Do</u>
                </h1>
                <div className="pl6 pt5 ">
                    <img
                        src={require('./create.svg')}
                        className="br-100 ba b--blue h3 w3 dib" alt="create" />
                </div>

                <h3 className='fw4 baskerville pl6 pt3'> <u>This Week's Flyer</u></h3>
                <img className ='pt2 pb2 ml6' src={require('./flyer.png')} height={250} width={200}/>
                <Flyermodal buttonLabel='Open Flyer' />
            </ScrollAnimation>
        </div>
    )
}

export default Whatpage;