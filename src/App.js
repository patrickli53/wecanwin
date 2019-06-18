import React from 'react';
import './App.css';
<<<<<<< HEAD
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
=======
import Navigation from './components/Navigation';
import Landingpage from './components/Landingpage';
import Whatpage from './components/Whatpage';
import Eventslanding from './components/Eventslanding';
import Wholanding from './components/Wholanding';
import Emaillist from './components/Emaillist';
import Getinvolved from './components/Getinvolved';
import Contactlanding from './components/Contactlanding';
import Footer from './components/Footer';

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
>>>>>>> fixed routing
    );
}

export default App;