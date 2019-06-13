import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { LandingPage } from './Landingpage';

const Routing = () => (
    <Switch>
        <Route exact path='/' component= {LandingPage} />
        
    </Switch>
);

export default Routing;