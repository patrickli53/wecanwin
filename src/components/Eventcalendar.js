import React, { Component } from 'react';
import { Calendar, momentLocalizer} from 'react-big-calendar';
import moment from 'moment';

const localizer = momentLocalizer(moment)

class Eventcalendar extends Component {
    constructor(){
        super();
        
    }

    render(){
        const listEvents = this.props.eventsList.map(item => {
            return item.date;    
        });
        return(
            <div className='eventCalendar'>
                <Calendar
                    localizer={localizer}
                    events={listEvents}
                    startAccessor="start"
                    endAccessor="end"
                />
            </div>
        )
    }
}

export default Eventcalendar;