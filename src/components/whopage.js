import React from 'react';
import Navigation from './Navigation';
import About from './About';
import Team from './Team';
import Supporters from './Supporters';
import Footer from './Footer';

const Whopage = () => {
    return(
        <div className='whopage'>
            <Navigation />
            <About />
            <Team />
            <Supporters />
            <Footer />
        </div>
    ) 
}

export default Whopage;