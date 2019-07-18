import React, { Component } from 'react';
import Upcomingcard from './Upcomingcard';

class Upcomingeventslist extends Component{
    render () {
        return(
            <div className='upcomingEvents'>
               <h3><u>Upcoming Events</u></h3>
               {this.props.eventsList.map((user,i) => {
                return (
                    <Upcomingcard 
                    key={i} 
                    title={this.props.eventsList[i].title} 
                    start={this.props.eventsList[i].start} 
                    end={this.props.eventsList[i].end}
                    info={this.props.eventsList[i].info}
                    />
                );
            })
        }
            </div>
        )
    }
}
 

export default Upcomingeventslist;