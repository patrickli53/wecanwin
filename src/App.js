import React from 'react';
import './App.css';
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
    );
}

export default App;