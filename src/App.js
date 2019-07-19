import React, { Component } from 'react';
import './App.css';

import { Eventlist } from './components/Eventlist';
import Navigation from './components/Navigation';
import Landingpage from './components/Landingpage';
import Whatpage from './components/Whatpage';
import Eventslanding from './components/Eventslanding';
import Wholanding from './components/Wholanding';
import Emaillist from './components/Emaillist';
import Getinvolved from './components/Getinvolved';
import Footer from './components/Footer';

class App extends Component {
    constructor() {
        super();
        this.state = {
            eventList:[],
            currentDate:""

        }
    }

    componentDidMount(){

        const events = Eventlist.map(item => {
            return item;
        })

        this.setState({
            eventList : events
        });
        // fetch('./events.json')
        //     .then(response => response.json())
        //     .then(result => {
        //         const events = result.map(item => {
        //             return item;
        //         })

        //         this.setState({
        //             eventList : events
        //         });
        //     });
    }
    render(){
        return (
            <div>
                <Navigation />
                <Landingpage />
                <Whatpage />
                <Eventslanding eventList={this.state.eventList}/>
                <Wholanding />
                <Emaillist />
                <Getinvolved />
                <Footer />
            </div>
    );
    }
   
}

export default App;