import React from 'react';
import './App.css';
import Navigation from './landingcomponents/Navigation';
import Landingpage from './landingcomponents/Landingpage';
import Whatpage from './landingcomponents/Whatpage';
import Eventslanding from './landingcomponents/Eventslanding';
import Wholanding from './landingcomponents/Wholanding';
import Emaillist from './landingcomponents/Emaillist';
import Getinvolved from './landingcomponents/Getinvolved';
import Contactlanding from './landingcomponents/Contactlanding';
import Footer from './landingcomponents/Footer';
//import Routing from './landingcomponents/Routing';

const App = () => {
    return (
        <div>
            <Navigation />
            <Landingpage />
            <Whatpage />
            <Eventslanding />
            <Wholanding />
            <Emaillist />
            <Getinvolved />
            <Contactlanding />
            <Footer />
        </div>
    );
}

export default App;