import React, { Component } from 'react';
import { Calendar, momentLocalizer} from 'react-big-calendar';
import moment from 'moment';

const localizer = momentLocalizer(moment)

class Eventcalendar extends Component {
   

    render(){
        return(
            <div className='eventCalendar'>
                <Calendar
                    localizer={localizer}
                    events={this.props.eventsList}
                    startAccessor="start"
                    endAccessor="end"
                />
            </div>
        )
    }
}

export default Eventcalendar;