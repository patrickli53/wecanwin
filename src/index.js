import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Whopage from './components/whopage';
import Events from './components/Events';
import Lessons from './components/Lessons';
import Contact from './components/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'animate.css/animate.min.css';
import { HashRouter, Switch, Route} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<HashRouter> 
                    <Switch>
                        <Route exact path ='/' component={App}/>
                        <Route path='/events' component={Events}/>
                        <Route path='/lessons' component={Lessons}/>
                        <Route path='/whopage' component={Whopage}/>
                        <Route path='/contactus' component={Contact}/>
                    </Switch>
                   
                </HashRouter>,
                document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
