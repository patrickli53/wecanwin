import React, { Component } from 'react';
import { Calendar, momentLocalizer} from 'react-big-calendar';
import moment from 'moment';

const localizer = momentLocalizer(moment)

// const events = this.props.eventsList;

// const eventDates = events.map(item => {
//     return item.date;
// })

class Eventcalendar extends Component {
    constructor(){
        super();
        this.state = {

        }
    }

    render(){
        return(
            <div className='eventCalendar'>
                <Calendar
                    localizer={localizer}
                    events={[]}
                    startAccessor="start"
                    endAccessor="end"
                />
            </div>
        )
    }
}

export default Eventcalendar;